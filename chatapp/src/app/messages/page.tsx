"use client"
import { useState, useEffect } from 'react';
import { Message } from '../types';
import io from 'socket.io-client';

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState<any>(null); // Déclarer socket ici

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
    const newSocket: any = io('http://localhost:3001'); // Remplacez par l'URL de votre serveur Socket.io
    setSocket(newSocket); // Mettez à jour la variable socket

    // Écouter l'événement "receive_msg" pour recevoir des messages du serveur
    newSocket.on('receive_msg', (data: any) => {
      // Mettre à jour votre état local avec le message reçu
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Déconnecter le socket lorsque le composant est démonté
    return () => {
      newSocket.disconnect();
    };
  }, []);
    

  const sendMessage = () => {
    // Envoyez un message au serveur via Socket.io
    const data = { message };
    // Vous pouvez personnaliser les noms d'événements selon votre application
    socket.emit('send_msg', data);

    // Effacez le champ de message après l'envoi
    setMessage('');
  };

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.length ? (
      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message.texte}</li>
        ))}
      </ul>
      ) : (
        <p>Aucun message à afficher.</p>
      )}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
};

export default Messages;
