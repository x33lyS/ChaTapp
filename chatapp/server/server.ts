// server.js
import {NextApiRequest} from 'next'
import {NextApiResponse} from 'next'
const dev = process.env.NODE_ENV !== 'production';
const express = require('express');
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const messagesApi = require('./pages/api/messages'); // Importez votre API messages

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // Utilisez l'API messages
  server.use('/api/messages', messagesApi);

  server.all('*', (req: NextApiRequest , res: NextApiResponse ) => {
    return handle(req, res);
  });

  server.listen(3000, (err: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
