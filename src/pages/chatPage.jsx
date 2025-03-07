import "../styles/chatPage.css";
import botImg from "../assets/images/bot_img.jpg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const loadPdfFiles = () => {
  const context = require.context("../assets/book", true, /\.pdf$/);
  let pdfMap = {};

  context.keys().forEach((key) => {
    const folderName = key.split("/")[1]; // Lấy thư mục {id}
    pdfMap[folderName] = context(key);
  });

  return pdfMap;
};

const pdfFiles = loadPdfFiles(); // Lưu danh sách PDF

const ChatPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [pdfPath, setPdfPath] = useState(""); 
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
  
    try {
      const response = await fetch('http://localhost:5000/chat-clo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: parseInt(id),
          message: inputMessage
        })
      });
  
      const data = await response.json();
      if (data.success) {
        // Cập nhật state messages
        setSelectedMessages([
          ...selectedMessages,
          { role: 'User', content: inputMessage },
          { role: 'AI', content: data.message }
        ]);
        setInputMessage(''); // Clear input
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((response) => response.json())
      .then((data) => {
        const selectedCourse = data.find((item) => item.id === parseInt(id));
        setCourse(selectedCourse);

        if (selectedCourse) {
          if (selectedCourse.message_CLOs?.length > 0) {
            setSelectedMessages(selectedCourse.message_CLOs);
            setSelectedTitle("CLOs");
          } else if (selectedCourse.message_CS?.length > 0) {
            setSelectedMessages(selectedCourse.message_CS);
            setSelectedTitle("Course Syllabus");
          } else {
            const firstLesson = Object.keys(selectedCourse)
              .filter((key) => key.startsWith("message_L") && selectedCourse[key]?.length > 0)
              .sort()[0];

            if (firstLesson) {
              setSelectedMessages(selectedCourse[firstLesson]);
              setSelectedTitle(`Buổi ${firstLesson.replace("message_L", "")}`);
            }
          }
        }
      })
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, [id]);

  // Tìm file PDF theo id
  useEffect(() => {
    if (pdfFiles[id]) {
      setPdfPath(pdfFiles[id]); // Lấy file PDF từ danh sách
    }
  }, [id]);

  if (!course) return <p>Đang tải...</p>;

  return (
    <div className="chat-page">
      <div className="chat-container row">
        <div className="chat-list col l-2">
          <div className="section-header">
            <h2>{course.subject}</h2>
          </div>
          <div className="chat-body">
            {course.message_CLOs?.length > 0 && (
              <div
                className={`user-item ${selectedTitle === "CLOs" ? "active" : ""}`}
                onClick={() => {
                  setSelectedMessages(course.message_CLOs);
                  setSelectedTitle("CLOs");
                }}
              >
                <h3>CLOs</h3>
              </div>
            )}
            {course.message_CS?.length > 0 && (
              <div
                className={`user-item ${selectedTitle === "Course Syllabus" ? "active" : ""}`}
                onClick={() => {
                  setSelectedMessages(course.message_CS);
                  setSelectedTitle("Course Syllabus");
                }}
              >
                <h3>Course Syllabus</h3>
              </div>
            )}
            {Object.keys(course)
              .filter((key) => key.startsWith("message_L") && course[key]?.length > 0)
              .sort()
              .map((key) => (
                <div
                  key={key}
                  className={`user-item ${selectedTitle === `Buổi ${key.replace("message_L", "")}` ? "active" : ""}`}
                  onClick={() => {
                    setSelectedMessages(course[key]);
                    setSelectedTitle(`Buổi ${key.replace("message_L", "")}`);
                  }}
                >
                  <h3>Buổi {key.replace("message_L", "")}</h3>
                </div>
              ))}
          </div>
        </div>

        <div className="chat-messages col l-5">
          <div className="section-header">
            <h2>{selectedTitle}</h2>
          </div>
          <div className="messages-container">
          {selectedMessages.length > 0 ? (
            selectedMessages.map((msg, index) => (
              <div key={index} className={`message ${msg.role === "AI" ? "received" : "sent"}`}>
                {msg.role === "AI" && (
                  <div className="message-avatar">
                    <img src={botImg} alt="avatar" />
                  </div>
                )}
                <div className="message-content">
                  <p className="message-text">{msg.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-messages">Không có tin nhắn.</p>
          )}
          </div>
          <div className="message-input">
            <input 
              type="text" 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Nhập tin nhắn..." 
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="send-button" onClick={handleSendMessage}>
              <span>Gửi</span>
            </button>
          </div>
        </div>

        {/* Hiển thị PDF */}
        <div className="book col l-5">
          <div className="section-header">
            <h2>Sách</h2>
          </div>
          <div className="book-content">
            {pdfPath ? (
              <iframe
                src={pdfPath}
                width="100%"
                height="500px"
                style={{ border: "none" }}
              ></iframe>
            ) : (
              <p>Không tìm thấy sách.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
