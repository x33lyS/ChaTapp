// pages/messages.tsx
import { useState, useEffect } from 'react';

interface Message {
  id: number;
  user: string;
  content: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
