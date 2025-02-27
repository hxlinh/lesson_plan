import React from "react"
import "../styles/chatPage.css"

const ChatPage = () => {
  return (
    <div className="chat-page">
      <div className="chat-container row">

        <div className="chat-list col l-2">
          <div className="section-header">
            <h2>Đoạn Chat</h2>
          </div>
          <div className="chat-body">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((user) => (
              <div key={user} className="user-item">
                  <h3>Buổi {user}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-messages col l-5">
          <div className="section-header">
            <h2>Cuộc trò chuyện</h2>
          </div>

          <div className="messages-container">
            <div className="message received">
              <div className="message-avatar">
                <img src="/placeholder.svg" alt="avatar" />
              </div>
              <div className="message-content">
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
                <p className="message-text">Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))Ghi lớn rồi =))</p>
              </div>
            </div>

            <div className="message sent">
              <div className="message-content">
                  <p className="message-text">ivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luege</p>
                  <p className="message-text">ivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luege</p>
                  <p className="message-text">ivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luege</p>
                  <p className="message-text">ivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luege</p>
                  <p className="message-text">ivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luegeivy luege</p>
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

        <div className="book col l-5">
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

