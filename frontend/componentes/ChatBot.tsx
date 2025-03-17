// Adicione esta linha no topo do arquivo ChatBot.tsx
"use client";

import { useState } from "react";

interface ChatMessage {
  sender: string;
  text: string;
}

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMessage = message;
    setChatHistory([...chatHistory, { sender: "user", text: userMessage }]);

    const response = await fetch("http://localhost:15000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    setChatHistory([...chatHistory, { sender: "user", text: userMessage }, { sender: "bot", text: data.response }]);

    if (data.action === "forward_to_whatsapp") {
      window.location.href = data.whatsAppLink;
    }

    setMessage("");
  };

  return (
    <div className="chat-box p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <div className="messages">
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <p className="p-2 inline-block bg-gray-200 rounded-lg">{msg.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="mt-4 p-2 w-full border rounded-lg"
      />
      <button
        onClick={sendMessage}
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatBot;
