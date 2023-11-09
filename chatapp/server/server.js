// server.js
const express = require('express');
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const messagesApi = require('/api/messages'); // Importez votre API messages

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // Utilisez l'API messages
  server.use('/api/messages', messagesApi);
  

  server.get('/api/test', (req, res) => {
    console.log('Received test request'); // Ajoutez cette ligne
    res.status(200).json({ message: 'Test endpoint success' });
  });
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
  
});
