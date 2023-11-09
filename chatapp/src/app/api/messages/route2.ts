// src/app/api/messages.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../server/db';
import { Message } from '../../types';

interface ErrorResponse {
  messages?: Message[];
  error?: string;
}

export const getMessages = async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
  console.log('req.method:', req.method);

  if (req.method === 'GET') {
    try {
      const messages = await pool.query('SELECT * FROM chat_messages');
      res.status(200).json({ messages });
    } catch (error) {
      console.error('Error retrieving messages:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
};
