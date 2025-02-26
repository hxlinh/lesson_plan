import React from "react"
import "../styles/chatPage.css"

const ChatPage = () => {
  return (
    <div className="chat-page">
      <div className="chat-container">
        {/* Chat List Section */}
        <div className="chat-list">
          <div className="section-header">
            <h2>Đoạn Chat</h2>
          </div>
          <div className="chat-users">
            {[1, 2, 3].map((user) => (
              <div key={user} className="user-item">
                <div className="user-avatar">
                  <img src="/placeholder.svg" alt="avatar" />
                </div>
                <div className="user-info">
                  <h3>Người dùng {user}</h3>
                  <p className="last-message">Tin nhắn cuối...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Messages Section */}
        <div className="chat-messages">
          <div className="section-header">
            <h2>Cuộc trò chuyện</h2>
          </div>

          <div className="messages-container">
            <div className="message received">
              <div className="message-avatar">
                <img src="/placeholder.svg" alt="avatar" />
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <p className="message-sender">Đầu xanhh</p>
                  <p className="message-text">Ghi lớn rồi =))</p>
                  <span className="message-time">20:27 8 Tháng 2, 2025</span>
                </div>
              </div>
            </div>

            <div className="message sent">
              <div className="message-content">
                <div className="message-bubble">
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <p className="message-text">e oiw</p>
                  <p className="message-text">cíu</p>
                  <p className="message-text">ivy luege</p>
                  <span className="message-time">23:29 8 Tháng 2, 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="message-input">
            <input type="text" placeholder="Nhập tin nhắn..." />
            <button className="send-button">
              <span>Gửi</span>
            </button>
          </div>
        </div>

        {/* Book Section */}
        <div className="book-section">
          <div className="section-header">
            <h2>Sách</h2>
          </div>
          <div className="book-content">{/* Book content here */}</div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage

