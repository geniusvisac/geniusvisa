import { NextRequest, NextResponse } from 'next/server'
import { checkPanelAuth, redisConfig } from '@/lib/panel-auth'

export const dynamic = 'force-dynamic'
const NO_STORE = { 'Cache-Control': 'no-store' }

export async function GET(req: NextRequest) {
  const auth = await checkPanelAuth(req)
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status, headers: NO_STORE })

  try {
    const cfg = redisConfig()
    if (!cfg) return NextResponse.json({ evaluaciones: [] }, { headers: NO_STORE })

    const keysRes = await fetch(`${cfg.url}/zrange/evaluaciones_idx/0/-1/rev`, { headers: cfg.headers, cache: 'no-store' })
    const keysData = await keysRes.json()
    const keys: string[] = keysData.result || []
    if (keys.length === 0) return NextResponse.json({ evaluaciones: [] }, { headers: NO_STORE })

    const batch = keys.slice(0, 200)
    const results = await Promise.all(
      batch.map(async (key) => {
        try {
          const res = await fetch(`${cfg.url}/get/${encodeURIComponent(key)}`, { headers: cfg.headers, cache: 'no-store' })
          const data = await res.json()
          if (!data.result) return null
          return { id: key, ...JSON.parse(data.result) }
        } catch { return null }
      })
    )
    return NextResponse.json({ evaluaciones: results.filter(Boolean) }, { headers: NO_STORE })
  } catch {
    return NextResponse.json({ evaluaciones: [], error: 'Error al leer la base de datos' }, { status: 500, headers: NO_STORE })
  }
}
