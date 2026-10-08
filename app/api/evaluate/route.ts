import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formData, score, pct, lang = 'es' } = body

    if (!formData || score === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const isEs = lang === 'es'

    const prompt = isEs
      ? `Eres un experto en visas americanas con 15 años de experiencia en consulados de Honduras y Latinoamérica. Analiza el siguiente perfil de solicitud de visa y genera un reporte profesional detallado.

PERFIL DEL SOLICITANTE:
- Nombre: ${formData.name}
- Edad: ${formData.age} años
- País de origen: ${formData.country}
- Historial migratorio: ${formData.history}
- Número de rechazos previos: ${formData.dcount || 'N/A'}
- Último rechazo: ${formData.dwhen || 'N/A'}
- Tiempo fuera de EE.UU.: ${formData.timegone || 'N/A'}
- Categoría visa anterior: ${formData.visacat || 'N/A'}
- Propósito del viaje: ${formData.purpose}
- Ocupación: ${formData.occupation}
- Tiempo en empleo: ${formData.jobtime}
- Educación: ${formData.education}
- Ingresos mensuales: ${formData.income}
- Quién paga el viaje: ${formData.whopays}
- Fondos suficientes (doble del costo): ${formData.funds}
- Estado civil: ${formData.marital}
- Viajes internacionales recientes: ${formData.travel}
- Familiares en EE.UU.: ${formData.relatives}
- Propiedad inmueble: ${formData.property}
- Duración planificada en EE.UU.: ${formData.duration}
- Antecedentes penales: ${formData.criminal}
- Puntuación calculada: ${score}/94 (${pct}%)

Genera un JSON con esta estructura exacta (sin markdown, sin texto adicional, solo JSON puro):
{
  "summary": "Párrafo de 3-4 oraciones resumiendo objetivamente el caso, mencionando los aspectos más relevantes del perfil",
  "strengths": [
    {"title": "Título corto de la fortaleza", "text": "Explicación específica de 2-3 oraciones basada en los datos del perfil"},
    {"title": "...", "text": "..."}
  ],
  "risks": [
    {"title": "Título corto del factor de riesgo", "text": "Explicación específica de 2-3 oraciones basada en los datos del perfil"},
    {"title": "...", "text": "..."}
  ],
  "recommendations": [
    {"title": "Título corto de la recomendación", "text": "Acción concreta y específica de 2-3 oraciones que el solicitante debe tomar"},
    {"title": "...", "text": "..."}
  ]
}

Incluye entre 3 y 5 items en cada sección. Sé muy específico al perfil dado — menciona detalles concretos como el país, ocupación, situación migratoria. No uses respuestas genéricas.`
      : `You are a US visa expert with 15 years of experience at consulates in Latin America. Analyze the following visa application profile and generate a professional detailed report.

APPLICANT PROFILE:
- Name: ${formData.name}
- Age: ${formData.age} years
- Country of origin: ${formData.country}
- Immigration history: ${formData.history}
- Number of previous denials: ${formData.dcount || 'N/A'}
- Most recent denial: ${formData.dwhen || 'N/A'}
- Time outside US: ${formData.timegone || 'N/A'}
- Previous visa category: ${formData.visacat || 'N/A'}
- Purpose of trip: ${formData.purpose}
- Occupation: ${formData.occupation}
- Time in current job: ${formData.jobtime}
- Education: ${formData.education}
- Monthly income: ${formData.income}
- Who pays for trip: ${formData.whopays}
- Sufficient funds (double cost): ${formData.funds}
- Marital status: ${formData.marital}
- Recent international travel: ${formData.travel}
- Relatives in US: ${formData.relatives}
- Real estate property: ${formData.property}
- Planned duration in US: ${formData.duration}
- Criminal record: ${formData.criminal}
- Calculated score: ${score}/94 (${pct}%)

Generate a JSON with this exact structure (no markdown, no additional text, pure JSON only):
{
  "summary": "3-4 sentence paragraph objectively summarizing the case, mentioning the most relevant profile aspects",
  "strengths": [
    {"title": "Short strength title", "text": "Specific 2-3 sentence explanation based on profile data"},
    {"title": "...", "text": "..."}
  ],
  "risks": [
    {"title": "Short risk factor title", "text": "Specific 2-3 sentence explanation based on profile data"},
    {"title": "...", "text": "..."}
  ],
  "recommendations": [
    {"title": "Short recommendation title", "text": "Concrete and specific 2-3 sentence action the applicant must take"},
    {"title": "...", "text": "..."}
  ]
}

Include between 3 and 5 items in each section. Be very specific to the given profile — mention concrete details like country, occupation, immigration situation. Do not use generic responses.`

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text : ''
    const clean = text.replace(/```json|```/g, '').trim()
    const analysis = JSON.parse(clean)

    return NextResponse.json({ analysis })
  } catch (error) {
    console.error('Evaluate API error:', error)
    return NextResponse.json(
      { error: 'Error generating evaluation. Please try again.' },
      { status: 500 }
    )
  }
}
