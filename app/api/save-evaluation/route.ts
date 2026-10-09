import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, age, country, history, purpose, occupation, score, level, confidence, analysis, timestamp } = body

    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    if (!url || !token) {
      return NextResponse.json({ ok: false, error: 'Redis not configured' })
    }

    const docId = `eval_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
    const data = { name, email, phone, age, country, history, purpose, occupation, score, level, confidence, analysis, timestamp }
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
