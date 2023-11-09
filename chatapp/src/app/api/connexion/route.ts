// pages/api/verifierPseudo.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../server/db';

export async function GET (req: NextRequest){
  try {
    const url = new URL(req.url);
    const pseudo = url.searchParams.get('pseudo');
    const connection = await pool.getConnection();

    // Exécutez une requête SQL pour vérifier si le pseudo existe
    const [rows, fields] = await connection.query('SELECT * FROM utilisateurs WHERE pseudo = ?', [pseudo]);
    const response = {
      data: rows,
    };
    connection.release();
    console.log(response);
    
    if (response.data && response.data.length > 0) {
      return NextResponse.json(response.data[0].id);
    } else {
      return NextResponse.json(null); // ou un autre traitement approprié
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données depuis la base de données", error);
    return NextResponse.error();
  }
};
