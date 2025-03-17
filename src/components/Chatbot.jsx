import { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // We'll create this next

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle chat visibility
  const [messages, setMessages] = useState([]); // Store chat messages
  const [input, setInput] = useState(''); // Store user input

  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY; 

  // Toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Send message to OpenAI API
  const sendMessage = async () => {
    if (!input.trim()) return; // Ignore empty messages

    // Add user message to chat
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput(''); // Clear input

    try {
      // Call OpenAI API
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      // Add bot response to chat
      const botMessage = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: "Sorry, I'm having trouble responding. Please try again later." },
      ]);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Chat Icon */}
      <div className="chat-icon" onClick={toggleChat}>
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Portfolio Assistant</h3>
            <button className="close-btn" onClick={toggleChat}>
              ✖
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              className='text-gray-200'
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;