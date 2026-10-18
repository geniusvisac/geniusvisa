import { NextRequest, NextResponse } from 'next/server'
import { checkPanelAuth, redisConfig } from '@/lib/panel-auth'

export const dynamic = 'force-dynamic'
const NO_STORE = { 'Cache-Control': 'no-store' }
// Solo se aceptan IDs con el formato que genera el evaluador (ej. eval_1791530495197_37q6s)
const ID_FORMAT = /^eval_\d{10,16}_[a-z0-9]{1,10}$/

export async function POST(req: NextRequest) {
  const auth = await checkPanelAuth(req)
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status, headers: NO_STORE })

  const cfg = redisConfig()
  if (!cfg) return NextResponse.json({ error: 'Base de datos no configurada' }, { status: 500, headers: NO_STORE })

  let ids: unknown
  try { ids = (await req.json()).ids } catch { ids = null }
  if (!Array.isArray(ids) || ids.length === 0 || ids.length > 200 || !ids.every(id => typeof id === 'string' && ID_FORMAT.test(id))) {
    return NextResponse.json({ error: 'Solicitud no válida' }, { status: 400, headers: NO_STORE })
  }

  const results = await Promise.all((ids as string[]).map(async (id) => {
    try {
      const k = encodeURIComponent(id)
      const [del] = await Promise.all([
        fetch(`${cfg.url}/del/${k}`, { headers: cfg.headers, cache: 'no-store' }).then(r => r.json()),
        fetch(`${cfg.url}/zrem/evaluaciones_idx/${k}`, { headers: cfg.headers, cache: 'no-store' }).then(r => r.json()),
      ])
      return del?.result === 1
    } catch { return false }
  }))

  const deleted = results.filter(Boolean).length
  return NextResponse.json({ ok: true, deleted, requested: ids.length }, { headers: NO_STORE })
}
