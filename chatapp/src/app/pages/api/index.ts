import { NextApiRequest, NextApiResponse } from 'next';
import messages from './messages';

export default (req, res) => {
  return messages(req, res);
};
