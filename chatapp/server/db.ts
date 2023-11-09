// db.ts
import { createPool } from "mariadb";

  const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'chatapp_db',
    connectionLimit: 5,
  });

  export default pool;

