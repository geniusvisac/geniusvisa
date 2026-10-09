import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    if (!url || !token) {
      return NextResponse.json({ evaluaciones: [] }, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    const keysRes = await fetch(`${url}/zrange/evaluaciones_idx/0/-1/rev`, { headers })
    const keysData = await keysRes.json()
    const keys: string[] = keysData.result || []

    if (keys.length === 0) {
      return NextResponse.json({ evaluaciones: [] }, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
    }

    const batch = keys.slice(0, 200)
    const results = await Promise.all(
      batch.map(async (key) => {
        try {
          const res = await fetch(`${url}/get/${encodeURIComponent(key)}`, { headers })
          const data = await res.json()
          if (!data.result) return null
          return { id: key, ...JSON.parse(data.result) }
        } catch { return null }
      })
    )

    return NextResponse.json(
      { evaluaciones: results.filter(Boolean) },
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  } catch (error) {
    return NextResponse.json({ evaluaciones: [], error: String(error) }, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })
}
