import { NextRequest, NextResponse } from 'next/server'
import { FACTOR_ORDER } from '@/lib/visa-model'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, age, country, history, purpose, occupation, score, scoreMax, breakdown, level, confidence, analysis, timestamp } = body

    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    if (!url || !token) {
      return NextResponse.json({ ok: false, error: 'Redis not configured' })
    }

    const docId = `eval_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
    // Evaluaciones nuevas: puntaje sobre 100 + desglose por factor (las anteriores quedan sobre 94 sin cambios)
    const safeBreakdown = Array.isArray(breakdown)
      ? breakdown
          .filter((b: { key?: string; points?: number; max?: number }) => b && (FACTOR_ORDER as string[]).includes(b.key as string) && Number.isFinite(b.points) && Number.isFinite(b.max))
          .slice(0, FACTOR_ORDER.length)
          .map((b: { key: string; points: number; max: number }) => ({ key: b.key, points: Number(b.points), max: Number(b.max) }))
      : []
    const data = {
      name, email, phone, age, country, history, purpose, occupation, score,
      ...(scoreMax === 100 ? { scoreMax: 100 } : {}),
      ...(safeBreakdown.length ? { breakdown: safeBreakdown } : {}),
      level, confidence, analysis, timestamp,
    }
    const ts = Date.now()
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }

    // SET using GET-style URL (most compatible Upstash format)
    const setRes = await fetch(`${url}/set/${docId}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
    const setData = await setRes.json()
    console.log('SET result:', JSON.stringify(setData))

    // ZADD using URL path format
    const zaddRes = await fetch(`${url}/zadd/evaluaciones_idx/${ts}/${docId}`, {
      method: 'POST',
      headers,
    })
    const zaddData = await zaddRes.json()
    console.log('ZADD result:', JSON.stringify(zaddData))

    return NextResponse.json({ ok: true, id: docId, set: setData, zadd: zaddData })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Save evaluation error:', msg)
    return NextResponse.json({ ok: false, error: msg })
  }
}
