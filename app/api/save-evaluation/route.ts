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
    const data = JSON.stringify({ name, email, phone, age, country, history, purpose, occupation, score, level, confidence, analysis, timestamp })
    const ts = Date.now()

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    // Use pipeline to execute both commands atomically
    const pipeline = [
      ['SET', docId, data],
      ['ZADD', 'evaluaciones_idx', ts, docId],
    ]

    const res = await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers,
      body: JSON.stringify(pipeline),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Upstash pipeline error:', err)
      return NextResponse.json({ ok: false, error: err })
    }

    const result = await res.json()
    console.log('Upstash pipeline result:', JSON.stringify(result))

    return NextResponse.json({ ok: true, id: docId })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Save evaluation error:', msg)
    return NextResponse.json({ ok: false, error: msg })
  }
}
