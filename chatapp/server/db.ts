// db.ts
import { createPool } from "mariadb";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();
const pool = createPool({
  host: "127.0.0.1",
  user: "root",
  password: process.env.DB_PASSWORD || 'root',
  database: "chatapp_db",
  connectionLimit: 5,
});

export default pool;
