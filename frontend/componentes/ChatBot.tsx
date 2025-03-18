"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface ChatMessage {
  sender: string;
  text: string;
}

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null); // Referência para rolagem automática

  // Função para enviar mensagem
  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setChatHistory((prev) => [...prev, { sender: "user", text: userMessage }]);

    const response = await fetch("http://localhost:15000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    setChatHistory((prev) => [...prev, { sender: "bot", text: data.response }]);

    if (data.action === "forward_to_whatsapp") {
      console.log(data.whatsAppLink);
      //window.location.href = data.whatsAppLink;
    }

    setMessage("");
  };

  // Função para capturar o Enter e enviar a mensagem
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim()) {
      sendMessage();
    }
  };

  // Rolagem automática para a última mensagem
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Caixa de chat animada */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? "block" : "hidden"
        } w-80 sm:w-96 md:w-104 bg-white shadow-lg rounded-lg p-4 mt-2 max-h-80 overflow-hidden flex flex-col`}
      >
        <div className="h-64 overflow-y-auto flex-1 space-y-2">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white text-right" : "bg-gray-200 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {/* Div de rolagem automática */}
          <div ref={chatEndRef} />
        </div>

        {/* Entrada de mensagem */}
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown} // Captura a tecla Enter
            placeholder="Digite sua mensagem..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatBot;
