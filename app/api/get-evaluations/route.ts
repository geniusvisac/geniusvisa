import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    if (!url || !token) {
      return NextResponse.json({ error: 'Redis not configured' }, { status: 500 })
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    // Get all keys from sorted set (newest first, up to 500)
    const keysRes = await fetch(`${url}/zrange/evaluaciones_index/0/-1/rev`, {
      headers,
    })

    if (!keysRes.ok) {
      return NextResponse.json({ evaluaciones: [] })
    }

    const keysData = await keysRes.json()
    const keys: string[] = keysData.result || []

    if (keys.length === 0) {
      return NextResponse.json({ evaluaciones: [] })
    }

    // Fetch all evaluations in parallel (batch of 50 max)
    const batch = keys.slice(0, 200)
    const results = await Promise.all(
      batch.map(async (key) => {
        const res = await fetch(`${url}/get/${encodeURIComponent(key)}`, { headers })
        if (!res.ok) return null
        const data = await res.json()
        if (!data.result) return null
        try {
          const parsed = JSON.parse(data.result)
          return { id: key, ...parsed }
        } catch {
          return null
        }
      })
    )

    const evaluaciones = results.filter(Boolean)
    return NextResponse.json({ evaluaciones })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Get evaluations error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
