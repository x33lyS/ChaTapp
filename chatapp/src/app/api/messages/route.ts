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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const bodyText = await req.text();
    const { expediteur_id, destinataire_id, texte } = JSON.parse(bodyText) as {
      expediteur_id: number;
      destinataire_id: number;
      texte: string;
    };
    console.log(expediteur_id, "expediteur_id");
    console.log(destinataire_id, "destinataire_id");
    console.log(texte, "texte");
    

    // Exécutez une requête SQL pour insérer le message en base de données
    await pool.query(
      'INSERT INTO chat_messages (expediteur_id, destinataire_id, texte) VALUES (?, ?, ?)',
      [expediteur_id, destinataire_id, texte]
    );

    // Envoyer une réponse JSON en cas de succès
    return NextResponse.json({ status: 200, body: 'Send' });
  } catch (error) {
    console.error('Erreur lors de l\'interaction avec la base de données', error);
    return NextResponse.json({ status: 500, body:'Erreur lors de l\'interaction avec la base de données' });
  }
}
