'use client'
import { useEffect, useState } from 'react'
import { LOGO_PNG_B64 } from '@/lib/logo-b64'
import type { ProposalData } from '@/lib/proposal'

const LOGO = `data:image/png;base64,${LOGO_PNG_B64}`
const TEAL = '#1A3A3A'
const GOLD = '#C9A84C'

function H({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3 pb-2" style={{ borderBottom: `2px solid ${TEAL}`, breakAfter: 'avoid' }}>
      <div className="w-1 h-4 rounded-full" style={{ background: GOLD }} />
      <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: TEAL }}>{children}</h3>
    </div>
  )
}

function Bullets({ items, mark = '•' }: { items: string[]; mark?: string }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed" style={{ breakInside: 'avoid' }}>
          <span className="font-bold" style={{ color: GOLD }}>{mark}</span><span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PropuestaPage() {
  const [p, setP] = useState<ProposalData | null>(null)

  useEffect(() => {
    let raw: string | null = null
    try { raw = sessionStorage.getItem('genius_proposal') } catch {}
    if (!raw) return
    try {
      const parsed: ProposalData = JSON.parse(raw)
      setP(parsed)
      // El nombre del archivo PDF sale del título de la página; se fija otra vez justo antes de imprimir
      const fileTitle = parsed.fileName || 'Propuesta_Servicios'
      document.title = fileTitle
      window.addEventListener('beforeprint', () => { document.title = fileTitle })
      if (new URLSearchParams(window.location.search).get('print') === '1') {
        setTimeout(() => { document.title = fileTitle; window.print() }, 900)
      }
    } catch {}
  }, [])

  if (!p) return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-gray-400 text-sm text-center">No hay datos de propuesta. Genérala desde el Panel, en el detalle de una evaluación.</p>
    </main>
  )

  const Row = ({ r, strong, muted }: { r: { label: string; detail: string; total: string }; strong?: boolean; muted?: boolean }) => (
    <tr style={{ background: strong ? `${TEAL}0D` : undefined, breakInside: 'avoid' }}>
      <td className={`py-2.5 px-3 text-sm ${strong ? 'font-bold' : ''}`} style={{ color: muted ? '#6b7280' : TEAL }}>{r.label}</td>
      <td className="py-2.5 px-3 text-sm text-gray-500 whitespace-nowrap">{r.detail}</td>
      <td className={`py-2.5 px-3 text-sm text-right whitespace-nowrap ${strong ? 'font-black' : 'font-semibold'}`} style={{ color: strong ? TEAL : '#374151' }}>{r.total}</td>
    </tr>
  )

  return (
    <main className="bg-white min-h-screen">
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          thead { display: table-header-group; }
          tfoot { display: table-footer-group; }
        }
        /* Margen 0 en la hoja: así el navegador no imprime su propio encabezado y pie (fecha, título, dirección web).
           El espacio superior e inferior lo dan el encabezado y el pie del propio documento. */
        @page { size: letter; margin: 0; }
        @media print {
          .pwrap { padding: 0 1.6cm !important; max-width: none !important; }
          .sheet > thead > tr > td { padding-top: 1.3cm; }
          .sheet > tfoot > tr > td { padding-bottom: 1.1cm; }
        }
        .sheet { width: 100%; border-collapse: collapse; }
        .sheet > thead > tr > td, .sheet > tfoot > tr > td, .sheet > tbody > tr > td { padding: 0; }
      `}</style>

      <div className="no-print fixed top-4 right-4 flex gap-2 z-50">
        <button onClick={() => window.print()} className="bg-[#C9A84C] text-[#1A3A3A] px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:opacity-90">Imprimir / Guardar PDF</button>
        <button onClick={() => window.close()} className="bg-gray-200 text-gray-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-300">× Cerrar</button>
      </div>

      <div className="pwrap max-w-3xl mx-auto px-8 py-8">
        <table className="sheet">
          {/* Encabezado en cada página */}
          <thead>
            <tr><td>
              <div className="flex items-center gap-4 pb-3 mb-5" style={{ borderBottom: `3px solid ${TEAL}` }}>
                <img src={LOGO} alt="Genius" className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-lg font-black uppercase tracking-wide" style={{ color: TEAL }}>Genius Visa Consultants</p>
                  <p className="uppercase tracking-wider font-semibold" style={{ color: GOLD, fontSize: 10 }}>Asesoría Migratoria Profesional · Más de 15 años de experiencia</p>
                </div>
                <div className="text-right text-xs text-gray-400 leading-relaxed">
                  <p>+504 9741-0936</p><p>geniusvisac@gmail.com</p><p>geniusvctravel.com</p>
                </div>
              </div>
            </td></tr>
          </thead>

          {/* Pie en cada página */}
          <tfoot>
            <tr><td>
              <div className="flex items-center gap-3 pt-3 mt-6 text-xs text-gray-400" style={{ borderTop: '1px solid #e5e7eb' }}>
                <img src={LOGO} alt="" className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-500">Genius Visa Consultants | {p.validity}</p>
                  <p>+504 9741-0936 | geniusvisac@gmail.com | @geniusvisac | geniusvctravel.com</p>
                  <p>{p.hours}</p>
                </div>
              </div>
            </td></tr>
          </tfoot>

          <tbody>
            <tr><td>
              {/* Título */}
              <div className="text-center mb-7">
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: GOLD }}>Propuesta de servicios</p>
                <h1 className="text-2xl font-black mt-1" style={{ color: TEAL }}>{p.title}</h1>
                <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>
                <p className="text-xs text-gray-400 mt-1">{p.placeDate}</p>
              </div>

              <section className="mb-6">
                <H>Descripción del servicio</H>
                <p className="text-sm text-gray-700 leading-relaxed">{p.description}</p>
              </section>

              {p.evaluation && (
                <section className="mb-6 rounded-xl p-4" style={{ background: '#f8f8f8', borderLeft: `4px solid ${GOLD}`, breakInside: 'avoid' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TEAL }}>Resumen de su evaluación</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{p.evaluation.intro}</p>
                  {p.evaluation.points.length > 0 && (
                    <>
                      <p className="text-xs font-semibold text-gray-500 mt-3 mb-1.5">Aspectos en los que trabajaremos juntos:</p>
                      <Bullets items={p.evaluation.points} />
                    </>
                  )}
                </section>
              )}

              <section className="mb-6">
                <H>¿Qué incluye nuestro servicio?</H>
                <Bullets items={p.includes} mark="✓" />
              </section>

              <section className="mb-6" style={{ breakInside: 'avoid' }}>
                <H>Detalle de inversión</H>
                <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
                  <thead>
                    <tr style={{ background: TEAL }}>
                      <th className="py-2 px-3 text-left text-xs font-bold uppercase tracking-wider text-white">Concepto</th>
                      <th className="py-2 px-3 text-left text-xs font-bold uppercase tracking-wider text-white">Detalle</th>
                      <th className="py-2 px-3 text-right text-xs font-bold uppercase tracking-wider text-white">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Row r={p.consular} />
                    <tr><td colSpan={3} className="px-3 pb-2.5 text-xs italic text-gray-400 leading-relaxed" style={{ borderBottom: '1px solid #e5e7eb' }}>{p.consular.note}</td></tr>
                    <Row r={p.fees} />
                    {p.discount && <Row r={p.discount} muted />}
                    <Row r={p.final} strong />
                  </tbody>
                </table>
                {p.investmentNotes.map((n, i) => <p key={i} className="text-xs text-gray-400 italic mt-2 leading-relaxed">{n}</p>)}
              </section>

              <section className="mb-6" style={{ breakInside: 'avoid' }}>
                <H>Forma de pago de honorarios</H>
                <Bullets items={p.payment} />
              </section>

              <section className="mb-6" style={{ breakInside: 'avoid' }}>
                <H>Documentos requeridos por persona</H>
                <div className="rounded-xl p-4" style={{ background: '#f8f8f8' }}>
                  <ul className="space-y-1.5">
                    {p.documents.map((t, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                        <span className="mt-1 inline-block w-3 h-3 flex-shrink-0 rounded-sm" style={{ border: `1.5px solid ${TEAL}` }} /><span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 italic mt-3">{p.documentsNote}</p>
                </div>
              </section>

              <section className="mb-2" style={{ breakInside: 'avoid' }}>
                <H>¿Por qué elegir Genius Visa Consultants?</H>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {p.why.map((t, i) => (
                    <p key={i} className="flex gap-2 text-sm text-gray-700"><span className="font-bold" style={{ color: GOLD }}>✓</span>{t}</p>
                  ))}
                </div>
              </section>

              {/* Términos y aceptación: página propia */}
              <section style={{ marginTop: 28 }}>
                <H>Términos y condiciones</H>
                <p className="text-xs text-gray-400 mb-3">Última actualización: junio 2026</p>
                <ol className="space-y-1.5">
                  {p.terms.map((t, i) => {
                    const k = t.indexOf(':')
                    return (
                      <li key={i} className="text-gray-600 leading-snug" style={{ breakInside: 'avoid', fontSize: 11 }}>
                        <strong className="text-gray-800">{i + 1}. {t.slice(0, k + 1)}</strong>{t.slice(k + 1)}
                      </li>
                    )
                  })}
                </ol>

                <div className="mt-4 rounded-xl p-4" style={{ border: `1px solid ${TEAL}40`, breakInside: 'avoid' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TEAL }}>Aceptación del cliente y compromiso de pago</p>
                  <p className="text-gray-600 leading-snug mb-4" style={{ fontSize: 11 }}>{p.acceptance}</p>
                  {['Nombre del cliente (en letra de molde)', 'Firma del cliente', 'Fecha de aceptación'].map(l => (
                    <div key={l} className="flex items-end gap-3 mb-3.5">
                      <span className="text-xs text-gray-600 whitespace-nowrap">{l}:</span>
                      <span className="flex-1 border-b border-gray-400" style={{ height: 14 }} />
                    </div>
                  ))}
                </div>
              </section>
            </td></tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
