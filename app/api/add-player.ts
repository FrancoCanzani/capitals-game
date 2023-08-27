import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playerName = searchParams.get('playerName');
  const score = searchParams.get('score');

  try {
    if (!playerName || !score) throw new Error('Player and score required');
    await sql`INSERT INTO Pets (Player, Score) VALUES (${playerName}, ${score});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const players = await sql`SELECT * FROM Players;`;
  return NextResponse.json({ players }, { status: 200 });
}
