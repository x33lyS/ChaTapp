// server.js
const express = require('express');
const next = require('next');
const pool = require('./db');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware pour parser le JSON
  server.use(express.json());

  // Route pour gérer les messages (à compléter)
  server.post('/api/messages', async (req, res) => {
    const { user, content } = req.body;

    // À compléter: Insérer le message dans la base de données
    // Utilise pool.query pour exécuter des requêtes SQL
  });

  // Route pour récupérer tous les messages (à compléter)
  server.get('/api/messages', async (req, res) => {
    // À compléter: Récupérer les messages depuis la base de données
    // Utilise pool.query pour exécuter des requêtes SQL
  });

  // Gérer toutes les autres routes avec Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Écouter sur le port 3000
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
