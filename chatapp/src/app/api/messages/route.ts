import { NextRequest, NextResponse } from "next/server";
 
export async function GET(request: NextRequest) {
 let response = {
    data: [ {
        id: 1,
        expediteur_id: 1,
        destinataire_id: 2,
        date_message: '2021-01-01',
        texte: 'Salut'
    },
    {
        id: 2,
        expediteur_id: 2,
        destinataire_id: 1,
        date_message: '2021-01-01',
        texte: 'Salut2'
    }
    ]
 }
 
 return NextResponse.json(response);
}