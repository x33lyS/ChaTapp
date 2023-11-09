// db.ts
import { createPool } from "mariadb";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();
const pool = createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "chatapp_db",
  connectionLimit: 5,
});

export default pool;
