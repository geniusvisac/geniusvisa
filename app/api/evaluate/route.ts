import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formData, score, pct, lang = 'es' } = body

    if (!formData || score === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const prompt = `Eres un experto en visas americanas. Analiza este perfil y responde ÚNICAMENTE con un objeto JSON válido, sin texto antes ni después, sin comillas de código.

PERFIL:
Nombre: ${formData.name}, País: ${formData.country}, Edad: ${formData.age}, Historial: ${formData.history}, Propósito: ${formData.purpose}, Ocupación: ${formData.occupation}, Ingresos: ${formData.income}, Educación: ${formData.education}, Estado civil: ${formData.marital}, Viajes previos: ${formData.travel}, Familiares en EEUU: ${formData.relatives}, Propiedad: ${formData.property}, Duración: ${formData.duration}, Antecedentes: ${formData.criminal}, Fondos: ${formData.funds}, Puntuación: ${score}/94

Responde SOLO esto (reemplaza los valores entre comillas):
{"summary":"resumen de 3 oraciones específico al perfil","strengths":[{"title":"fortaleza 1","text":"explicación"},{"title":"fortaleza 2","text":"explicación"},{"title":"fortaleza 3","text":"explicación"}],"risks":[{"title":"riesgo 1","text":"explicación"},{"title":"riesgo 2","text":"explicación"},{"title":"riesgo 3","text":"explicación"}],"recommendations":[{"title":"recomendación 1","text":"acción concreta"},{"title":"recomendación 2","text":"acción concreta"},{"title":"recomendación 3","text":"acción concreta"}]}`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic error:', err)
      return NextResponse.json({ error: 'AI service error', detail: err }, { status: 500 })
    }

    const data = await response.json()
    const text = data.content?.[0]?.text || ''

    // Extract JSON - find first { and last }
    const start = text.indexOf('{')
    const end = text.lastIndexOf('}')

    if (start === -1 || end === -1) {
      console.error('No JSON in response. Raw text:', text)
      return NextResponse.json({ error: 'No JSON found', raw: text }, { status: 500 })
    }

    const jsonStr = text.slice(start, end + 1)
    const analysis = JSON.parse(jsonStr)

    return NextResponse.json({ analysis })

  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Route error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
