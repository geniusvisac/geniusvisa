import { NextRequest } from 'next/server'
import { createHash, timingSafeEqual } from 'crypto'

// Bloqueo por intentos fallidos: 8 errores → 15 minutos sin poder intentar desde esa conexión
const MAX_FAILS = 8
const BLOCK_SECONDS = 15 * 60

export function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return { url, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
}

async function redis(path: string): Promise<unknown> {
  const cfg = redisConfig()
  if (!cfg) return null
  try {
    const res = await fetch(`${cfg.url}/${path}`, { headers: cfg.headers, cache: 'no-store' })
    const data = await res.json()
    return data.result ?? null
  } catch {
    return null
  }
}

function sameSecret(a: string, b: string) {
  // Comparación en tiempo constante (no revela cuántos caracteres coinciden)
  const ha = createHash('sha256').update(a).digest()
  const hb = createHash('sha256').update(b).digest()
  return timingSafeEqual(ha, hb)
}

export type AuthResult = { ok: true } | { ok: false; status: number; error: string }

export async function checkPanelAuth(req: NextRequest): Promise<AuthResult> {
  const expected = process.env.PANEL_PASSWORD
  if (!expected) return { ok: false, status: 500, error: 'PANEL_PASSWORD no está configurada en Vercel' }

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'desconocida'
  const failKey = encodeURIComponent(`panel_fail:${ip}`)

  const fails = Number(await redis(`get/${failKey}`)) || 0
  if (fails >= MAX_FAILS) {
    return { ok: false, status: 429, error: 'Demasiados intentos. Espera 15 minutos.' }
  }

  let provided = ''
  try { provided = decodeURIComponent(req.headers.get('x-panel-password') || '') } catch { provided = '' }

  if (!provided || !sameSecret(provided, expected)) {
    const n = Number(await redis(`incr/${failKey}`))
    if (n === 1) await redis(`expire/${failKey}/${BLOCK_SECONDS}`)
    return { ok: false, status: 401, error: 'Contraseña incorrecta' }
  }

  if (fails > 0) await redis(`del/${failKey}`)
  return { ok: true }
}
