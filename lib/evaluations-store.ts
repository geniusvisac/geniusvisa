import { redisConfig } from '@/lib/panel-auth'

/** Guarda una evaluación en Upstash (mismo formato de siempre: SET + ZADD al índice). Nunca lanza error. */
export async function saveEvaluation(data: Record<string, unknown>): Promise<boolean> {
  const cfg = redisConfig()
  if (!cfg) return false
  const docId = `eval_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
  try {
    const setRes = await fetch(`${cfg.url}/set/${docId}`, { method: 'POST', headers: cfg.headers, body: JSON.stringify(data), cache: 'no-store' })
    const setJson = await setRes.json()
    if (setJson?.result !== 'OK') { console.error('SET falló:', JSON.stringify(setJson)); return false }
    const zRes = await fetch(`${cfg.url}/zadd/evaluaciones_idx/${Date.now()}/${docId}`, { method: 'POST', headers: cfg.headers, cache: 'no-store' })
    const zJson = await zRes.json()
    if (zJson?.error) { console.error('ZADD falló:', JSON.stringify(zJson)); return false }
    return true
  } catch (e) {
    console.error('Error al guardar la evaluación:', e instanceof Error ? e.message : String(e))
    return false
  }
}
