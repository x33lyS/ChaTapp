"use client"
import { useState, useEffect } from 'react';

interface Message {
    id: number;
    expediteur_id: number;
    destinataire_id: number;
    date_message: string;
    texte: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/messages');
      const data = await response.json();
      console.log(data);
      
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.texte}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
