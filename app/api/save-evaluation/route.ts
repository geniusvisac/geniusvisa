import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name, email, phone, age, country, history,
      purpose, occupation, score, level, confidence,
      analysis, timestamp
    } = body

    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    if (!url || !token) {
      return NextResponse.json({ ok: false, error: 'Redis not configured' }, { status: 200 })
    }

    const docId = `eval_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
    const data = {
      name, email, phone, age, country, history,
      purpose, occupation, score, level, confidence,
      analysis, timestamp
    }

    // Save to Upstash Redis as JSON string
    const response = await fetch(`${url}/set/${encodeURIComponent(docId)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(JSON.stringify(data)),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Upstash error:', err)
      return NextResponse.json({ ok: false }, { status: 200 })
    }

    // Add to sorted set for easy retrieval by date
    await fetch(`${url}/zadd/evaluaciones_idx`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([Date.now(), docId]),
    })

    return NextResponse.json({ ok: true, id: docId })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Save evaluation error:', msg)
    return NextResponse.json({ ok: false, error: msg }, { status: 200 })
  }
}
