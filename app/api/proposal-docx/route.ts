import { NextRequest, NextResponse } from 'next/server'
import {
  AlignmentType, BorderStyle, Document, Footer, Header, ImageRun, LeaderType, Packer, Paragraph, ShadingType,
  Table, TableCell, TableRow, TabStopType, TextRun, VerticalAlign, WidthType,
} from 'docx'
import { checkPanelAuth } from '@/lib/panel-auth'
import { LOGO_PNG_B64 } from '@/lib/logo-b64'
import type { ProposalData, ProposalRow } from '@/lib/proposal'

export const dynamic = 'force-dynamic'
const NO_STORE = { 'Cache-Control': 'no-store' }
const TEAL = '1A3A3A', GOLD = 'C9A84C', GRAY = '6B7280', DARK = '374151', FONT = 'Arial'
const W = 9972 // ancho útil (carta, márgenes de 2 cm)

const str = (v: unknown, max = 2000) => (typeof v === 'string' ? v.slice(0, max) : '')
const strs = (v: unknown, n = 40) => (Array.isArray(v) ? v.slice(0, n).map(x => str(x)) : [])
const row = (v: unknown): ProposalRow => {
  const o = (v && typeof v === 'object' ? v : {}) as Record<string, unknown>
  return { label: str(o.label, 300), detail: str(o.detail, 200), total: str(o.total, 100) }
}

// El panel manda el contenido ya armado; aquí se vuelve a validar su forma antes de generar el archivo.
function clean(raw: unknown): ProposalData | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  if (typeof o.title !== 'string' || !Array.isArray(o.includes) || !Array.isArray(o.terms)) return null
  const ev = o.evaluation as Record<string, unknown> | null
  const cons = (o.consular && typeof o.consular === 'object' ? o.consular : {}) as Record<string, unknown>
  return {
    clientName: str(o.clientName, 200), fileName: str(o.fileName, 200) || 'Propuesta_Servicios', title: str(o.title, 200), subtitle: str(o.subtitle, 300),
    placeDate: str(o.placeDate, 200), description: str(o.description, 1500),
    evaluation: ev && typeof ev === 'object' ? { intro: str(ev.intro, 1000), points: strs(ev.points, 6) } : null,
    includes: strs(o.includes), consular: { ...row(cons), note: str(cons.note, 600) }, fees: row(o.fees),
    discount: o.discount ? row(o.discount) : null, final: row(o.final), investmentNotes: strs(o.investmentNotes, 6),
    payment: strs(o.payment, 8), documents: strs(o.documents, 20), documentsNote: str(o.documentsNote, 400), why: strs(o.why, 12),
    validity: str(o.validity, 200), hours: str(o.hours, 200), terms: strs(o.terms, 12), acceptance: str(o.acceptance, 1500),
  }
}

const logo = (size: number) => new ImageRun({ type: 'png', data: Buffer.from(LOGO_PNG_B64, 'base64'), transformation: { width: size, height: size }, altText: { title: 'Genius', description: 'Logo Genius Visa Consultants', name: 'logo' } })
const run = (text: string, o: { bold?: boolean; color?: string; size?: number; italics?: boolean; caps?: boolean } = {}) =>
  new TextRun({ text, font: FONT, size: o.size ?? 20, bold: o.bold, color: o.color ?? DARK, italics: o.italics, allCaps: o.caps })
const NONE = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' }
const noBorders = { top: NONE, bottom: NONE, left: NONE, right: NONE }

const heading = (text: string) => new Paragraph({
  keepNext: true, spacing: { before: 280, after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: TEAL, space: 3 } },
  children: [run('▌ ', { color: GOLD, bold: true, size: 20 }), run(text, { bold: true, color: TEAL, size: 19, caps: true })],
})
const para = (text: string, o: { size?: number; color?: string; italics?: boolean; after?: number; align?: (typeof AlignmentType)[keyof typeof AlignmentType] } = {}) =>
  new Paragraph({ spacing: { after: o.after ?? 100, line: 276 }, alignment: o.align, children: [run(text, { size: o.size ?? 20, color: o.color, italics: o.italics })] })
const item = (mark: string, text: string, color = GOLD) => new Paragraph({
  spacing: { after: 70, line: 264 }, indent: { left: 360, hanging: 300 }, tabStops: [{ type: TabStopType.LEFT, position: 360 }],
  children: [run(mark, { bold: true, color }), run('\t' + text)],
})

const cell = (children: Paragraph[], w: number, o: { fill?: string; borders?: object } = {}) =>
  new TableCell({
    width: { size: w, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    shading: o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined,
    borders: (o.borders as never) ?? {
      top: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' }, bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' },
      left: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' }, right: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' },
    },
    children,
  })
const cp = (text: string, o: { bold?: boolean; color?: string; align?: (typeof AlignmentType)[keyof typeof AlignmentType]; size?: number } = {}) =>
  new Paragraph({ keepNext: true, alignment: o.align, children: [run(text, { bold: o.bold, color: o.color, size: o.size ?? 19 })] })

function build(p: ProposalData): Document {
  const COLS = [5400, 2200, 2372]
  const money = (r: ProposalRow, o: { strong?: boolean; muted?: boolean } = {}) =>
    new TableRow({
      cantSplit: true,
      children: [
        cell([cp(r.label, { bold: o.strong, color: o.muted ? GRAY : TEAL })], COLS[0], { fill: o.strong ? 'E8EEEE' : undefined }),
        cell([cp(r.detail, { color: GRAY })], COLS[1], { fill: o.strong ? 'E8EEEE' : undefined }),
        cell([cp(r.total, { bold: true, color: o.strong ? TEAL : DARK, align: AlignmentType.RIGHT, size: o.strong ? 22 : 19 })], COLS[2], { fill: o.strong ? 'E8EEEE' : undefined }),
      ],
    })
  const th = (t: string, w: number, right = false) => cell([cp(t.toUpperCase(), { bold: true, color: 'FFFFFF', size: 16, align: right ? AlignmentType.RIGHT : undefined })], w, { fill: TEAL })

  const investment = new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: COLS,
    rows: [
      new TableRow({ tableHeader: true, children: [th('Concepto', COLS[0]), th('Detalle', COLS[1]), th('Total', COLS[2], true)] }),
      money(p.consular),
      new TableRow({ cantSplit: true, children: [new TableCell({ columnSpan: 3, width: { size: W, type: WidthType.DXA }, margins: { top: 40, bottom: 90, left: 110, right: 110 },
        borders: { top: NONE, left: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' }, right: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' }, bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' } },
        children: [new Paragraph({ keepNext: true, children: [run(p.consular.note, { size: 16, color: '9CA3AF', italics: true })] })] })] }),
      money(p.fees),
      ...(p.discount ? [money(p.discount, { muted: true })] : []),
      money(p.final, { strong: true }),
    ],
  })

  const evaluation = p.evaluation
    ? [new Table({
        width: { size: W, type: WidthType.DXA }, columnWidths: [W],
        rows: [new TableRow({ cantSplit: true, children: [new TableCell({
          width: { size: W, type: WidthType.DXA }, margins: { top: 120, bottom: 120, left: 200, right: 160 },
          shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'F8F8F8' },
          borders: { top: NONE, bottom: NONE, right: NONE, left: { style: BorderStyle.SINGLE, size: 24, color: GOLD } },
          children: [
            new Paragraph({ spacing: { after: 80 }, children: [run('RESUMEN DE SU EVALUACIÓN', { bold: true, color: TEAL, size: 17 })] }),
            new Paragraph({ spacing: { after: p.evaluation.points.length ? 100 : 0, line: 276 }, children: [run(p.evaluation.intro)] }),
            ...(p.evaluation.points.length ? [new Paragraph({ spacing: { after: 60 }, children: [run('Aspectos en los que trabajaremos juntos:', { bold: true, color: GRAY, size: 18 })] }), ...p.evaluation.points.map(t => item('•', t))] : []),
          ],
        })] })],
      }), new Paragraph({ spacing: { after: 60 }, children: [] })]
    : []

  const why = new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: [W / 2, W / 2],
    rows: Array.from({ length: Math.ceil(p.why.length / 2) }, (_, i) => new TableRow({
      children: [p.why[i * 2], p.why[i * 2 + 1]].map(t => new TableCell({
        width: { size: W / 2, type: WidthType.DXA }, borders: noBorders, margins: { top: 40, bottom: 40, left: 60, right: 60 },
        children: [new Paragraph({ children: t ? [run('✓  ', { bold: true, color: GOLD }), run(t)] : [] })],
      })),
    })),
  })

  const sign = (label: string) => new Paragraph({
    spacing: { before: 260 }, tabStops: [{ type: TabStopType.RIGHT, position: W - 400, leader: LeaderType.UNDERSCORE }],
    children: [run(label + ':  ', { size: 18 }), run('\t')],
  })

  const header = new Header({ children: [
    new Table({
      width: { size: W, type: WidthType.DXA }, columnWidths: [1000, 5372, 3600],
      rows: [new TableRow({ children: [
        new TableCell({ width: { size: 1000, type: WidthType.DXA }, borders: noBorders, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ children: [logo(48)] })] }),
        new TableCell({ width: { size: 5372, type: WidthType.DXA }, borders: noBorders, verticalAlign: VerticalAlign.CENTER, children: [
          new Paragraph({ children: [run('GENIUS VISA CONSULTANTS', { bold: true, color: TEAL, size: 26 })] }),
          new Paragraph({ children: [run('Asesoría Migratoria Profesional · Más de 15 años de experiencia', { color: GOLD, size: 15, bold: true })] }),
        ] }),
        new TableCell({ width: { size: 3600, type: WidthType.DXA }, borders: noBorders, verticalAlign: VerticalAlign.CENTER, children: [
          new Paragraph({ alignment: AlignmentType.RIGHT, children: [run('+504 9741-0936', { size: 15, color: '9CA3AF' })] }),
          new Paragraph({ alignment: AlignmentType.RIGHT, children: [run('geniusvisac@gmail.com', { size: 15, color: '9CA3AF' })] }),
          new Paragraph({ alignment: AlignmentType.RIGHT, children: [run('geniusvctravel.com', { size: 15, color: '9CA3AF' })] }),
        ] }),
      ] })],
    }),
    new Paragraph({ spacing: { before: 40, after: 120 }, border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: TEAL, space: 1 } }, children: [] }),
  ] })

  const footer = new Footer({ children: [
    new Table({
      width: { size: W, type: WidthType.DXA }, columnWidths: [600, W - 600],
      rows: [new TableRow({ children: [
        new TableCell({ width: { size: 600, type: WidthType.DXA }, borders: { ...noBorders, top: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' } }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ children: [logo(26)] })] }),
        new TableCell({ width: { size: W - 600, type: WidthType.DXA }, borders: { ...noBorders, top: { style: BorderStyle.SINGLE, size: 4, color: 'E5E7EB' } }, verticalAlign: VerticalAlign.CENTER, children: [
          new Paragraph({ children: [run('Genius Visa Consultants | ' + p.validity, { size: 15, bold: true, color: GRAY })] }),
          new Paragraph({ children: [run('+504 9741-0936 | geniusvisac@gmail.com | @geniusvisac | geniusvctravel.com', { size: 15, color: '9CA3AF' })] }),
          new Paragraph({ children: [run(p.hours, { size: 15, color: '9CA3AF' })] }),
        ] }),
      ] })],
    }),
  ] })

  return new Document({
    creator: 'Genius Visa Consultants', title: p.fileName.replace(/_/g, ' '),
    styles: { default: { document: { run: { font: FONT, size: 20 } } } },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1700, bottom: 1300, left: 1134, right: 1134, header: 500, footer: 450 } } },
      headers: { default: header }, footers: { default: footer },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 40 }, children: [run('PROPUESTA DE SERVICIOS', { bold: true, color: GOLD, size: 18 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [run(p.title, { bold: true, color: TEAL, size: 36 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [run(p.subtitle, { size: 21, color: '4B5563' })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, children: [run(p.placeDate, { size: 17, color: '9CA3AF' })] }),
        heading('Descripción del servicio'), para(p.description),
        ...(p.evaluation ? [heading('Su evaluación'), ...evaluation] : []),
        heading('¿Qué incluye nuestro servicio?'), ...p.includes.map(t => item('✓', t)),
        heading('Detalle de inversión'), investment,
        ...p.investmentNotes.map(n => new Paragraph({ spacing: { before: 80 }, children: [run(n, { size: 16, color: '9CA3AF', italics: true })] })),
        heading('Forma de pago de honorarios'), ...p.payment.map(t => item('•', t)),
        heading('Documentos requeridos por persona'), ...p.documents.map(t => item('☐', t, TEAL)),
        new Paragraph({ spacing: { before: 60 }, children: [run(p.documentsNote, { size: 16, color: '9CA3AF', italics: true })] }),
        heading('¿Por qué elegir Genius Visa Consultants?'), why,
        new Paragraph({ pageBreakBefore: true, keepNext: true, spacing: { after: 60 }, border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: TEAL, space: 3 } }, children: [run('▌ ', { color: GOLD, bold: true }), run('Términos y condiciones', { bold: true, color: TEAL, size: 19, caps: true })] }),
        new Paragraph({ spacing: { after: 120 }, children: [run('Última actualización: junio 2026', { size: 16, color: '9CA3AF' })] }),
        ...p.terms.map((t, i) => {
          const k = t.indexOf(':')
          return new Paragraph({ spacing: { after: 110, line: 264 }, keepLines: true, children: [run(`${i + 1}. ${t.slice(0, k + 1)}`, { bold: true, size: 17, color: '1F2937' }), run(t.slice(k + 1), { size: 17, color: '4B5563' })] })
        }),
        new Paragraph({ keepNext: true, spacing: { before: 240, after: 80 }, children: [run('ACEPTACIÓN DEL CLIENTE Y COMPROMISO DE PAGO', { bold: true, color: TEAL, size: 17 })] }),
        new Paragraph({ keepNext: true, keepLines: true, spacing: { after: 60, line: 264 }, children: [run(p.acceptance, { size: 17, color: '4B5563' })] }),
        sign('Nombre del cliente (en letra de molde)'), sign('Firma del cliente'), sign('Fecha de aceptación'),
      ],
    }],
  })
}

export async function POST(req: NextRequest) {
  const auth = await checkPanelAuth(req)
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status, headers: NO_STORE })
  let body: { proposal?: unknown }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Solicitud no válida' }, { status: 400, headers: NO_STORE }) }
  const p = clean(body.proposal)
  if (!p) return NextResponse.json({ error: 'Solicitud no válida' }, { status: 400, headers: NO_STORE })
  try {
    const buf = await Packer.toBuffer(build(p))
    return new NextResponse(new Uint8Array(buf), { headers: {
      ...NO_STORE,
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${p.fileName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w.-]+/g, '_')}.docx"`,
    } })
  } catch (e) {
    console.error('Error generando el Word de la propuesta:', e instanceof Error ? e.message : String(e))
    return NextResponse.json({ error: 'No se pudo generar el documento' }, { status: 500, headers: NO_STORE })
  }
}
