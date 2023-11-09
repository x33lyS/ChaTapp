// pages/api/verifierPseudo.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../server/db';

export async function GET (req: NextRequest){
  try {
    const url = new URL(req.url);
    const pseudo = url.searchParams.get('pseudo');    
    const connection = await pool.getConnection();

    // Exécutez une requête SQL pour vérifier si le pseudo existe
    const user = await connection.query(`SELECT id FROM users WHERE prenom like '${pseudo}'`);
    connection.release();
    
    if (user.length > 0) {
      const userId = user[0].id;
      return NextResponse.json({ userId });
    } else {
      // L'utilisateur n'a pas été trouvé
      return NextResponse.json({ status: 404, body: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données depuis la base de données", error);
    return NextResponse.error();
  }
};
