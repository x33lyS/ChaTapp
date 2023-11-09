"use client"
import { useState, useEffect } from 'react';
import { Message } from '../types';

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Données reçues :', data.data);
        setMessages(data.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    fetchMessages();
  }, []);
  
  // Déplacez la console.log ici pour accéder à la valeur mise à jour de messages
  console.log('Messages après mise à jour :', messages);
  
  

  return (
    <div>
      <h1>Messages</h1>
      <ul>
      {messages.length ? (
  <ul>
    {messages.map((message) => (
      <li key={message.id}>{message.texte}</li>
    ))}
  </ul>
) : (
  <p>Aucun message à afficher.</p>
)}







      </ul>
    </div>
  );
};

export default Messages;
