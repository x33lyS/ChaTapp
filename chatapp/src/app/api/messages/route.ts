import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../server/db"; // Importez la connexion à la base de données depuis db.ts

export async function GET(request: NextRequest) {
  try {
    // Obtenez une connexion à partir du pool de connexions
    const connection = await pool.getConnection();

    // Exécutez une requête SQL pour récupérer les données depuis la base de données
    const rows = await connection.query("SELECT * FROM chat_messages");

    const response = rows
    
    // Libérez la connexion une fois que vous avez terminé avec elle
    connection.release();

    return NextResponse.json(response);
  } catch (error) {
    console.error("Erreur lors de la récupération des données depuis la base de données", error);
    return NextResponse.error();
  }
}
