import { NextRequest, NextResponse } from 'next/server'

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
- Fondos suficientes: ${formData.funds}
- Estado civil: ${formData.marital}
- Viajes internacionales recientes: ${formData.travel}
- Familiares en EE.UU.: ${formData.relatives}
- Propiedad inmueble: ${formData.property}
- Duración planificada: ${formData.duration}
- Antecedentes penales: ${formData.criminal}
- Puntuación calculada: ${score}/94 (${pct}%)

Responde SOLO con JSON válido sin markdown ni texto adicional:
{
  "summary": "Párrafo de 3-4 oraciones resumiendo el caso con detalles específicos del perfil",
  "strengths": [
    {"title": "Título corto", "text": "Explicación de 2-3 oraciones específica al perfil"},
    {"title": "...", "text": "..."}
  ],
  "risks": [
    {"title": "Título corto", "text": "Explicación de 2-3 oraciones específica al perfil"},
    {"title": "...", "text": "..."}
  ],
  "recommendations": [
    {"title": "Título corto", "text": "Acción concreta de 2-3 oraciones que el solicitante debe tomar"},
    {"title": "...", "text": "..."}
  ]
}

Incluye entre 3 y 5 items en cada sección. Sé muy específico — menciona detalles concretos como el país, ocupación y situación migratoria del solicitante.`
      : `You are a US visa expert with 15 years of experience. Analyze the following visa application profile and generate a detailed professional report.

APPLICANT PROFILE:
- Name: ${formData.name}
- Age: ${formData.age} years
- Country: ${formData.country}
- Immigration history: ${formData.history}
- Previous denials: ${formData.dcount || 'N/A'}
- Last denial: ${formData.dwhen || 'N/A'}
- Time outside US: ${formData.timegone || 'N/A'}
- Previous visa: ${formData.visacat || 'N/A'}
- Purpose: ${formData.purpose}
- Occupation: ${formData.occupation}
- Time in job: ${formData.jobtime}
- Education: ${formData.education}
- Income: ${formData.income}
- Who pays: ${formData.whopays}
- Sufficient funds: ${formData.funds}
- Marital status: ${formData.marital}
- Recent travel: ${formData.travel}
- Relatives in US: ${formData.relatives}
- Property: ${formData.property}
- Planned duration: ${formData.duration}
- Criminal record: ${formData.criminal}
- Score: ${score}/94 (${pct}%)

Respond ONLY with valid JSON, no markdown or additional text:
{
  "summary": "3-4 sentence paragraph summarizing the case with specific profile details",
  "strengths": [
    {"title": "Short title", "text": "2-3 sentence explanation specific to this profile"},
    {"title": "...", "text": "..."}
  ],
  "risks": [
    {"title": "Short title", "text": "2-3 sentence explanation specific to this profile"},
    {"title": "...", "text": "..."}
  ],
  "recommendations": [
    {"title": "Short title", "text": "Concrete 2-3 sentence action the applicant must take"},
    {"title": "...", "text": "..."}
  ]
}

Include 3 to 5 items per section. Be specific — mention concrete details like country, occupation and immigration situation.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic API error:', err)
      return NextResponse.json({ error: 'AI service error' }, { status: 500 })
    }

    const data = await response.json()
    const text = data.content?.[0]?.text || ''
    const clean = text.replace(/```json|```/g, '').trim()
    const analysis = JSON.parse(clean)

    return NextResponse.json({ analysis })
  } catch (error) {
    console.error('Evaluate route error:', error)
    return NextResponse.json(
      { error: 'Error generating evaluation. Please try again.' },
      { status: 500 }
    )
  }
}
