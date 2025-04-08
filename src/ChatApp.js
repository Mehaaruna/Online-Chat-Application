import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import EmojiPicker from "emoji-picker-react";
import {FaPaperPlane} from "react-icons/fa"
import "./style.css"


const socket = io.connect("http://localhost:5000");

const ChatApp = ({username}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("sendMessage", { text: message });
      setMessage("");
    }
  };

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
          <img src="/images/profile.png" alt="profile" className="profile-pic" />
          <span className="chat-name">{username}...</span>
          <div className="icons">
            
          </div>
      </div>
      <div className="message-box">
        {messages.map((msg, index) => (
          <p key={index} className="message">{msg.text}</p>
        ))}
      </div>
      <div className="chat-input-container">
        
      
      <input
        type="text"
        className="chat-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="emoji-btn" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
      
      <button className="send-btn" onClick={sendMessage}>
        <FaPaperPlane />
      </button>
      </div>
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
};

export default ChatApp;
