import { NextResponse } from 'next/server'

// CERRADA. Las evaluaciones ahora las guarda el servidor dentro de /api/evaluate
// (con el puntaje recalculado y la fecha propia). Ya no se acepta nada desde el navegador.
const gone = () => NextResponse.json({ error: 'Gone' }, { status: 410, headers: { 'Cache-Control': 'no-store' } })
export const POST = gone
export const GET = gone
