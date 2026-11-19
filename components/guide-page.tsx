import { SITE_URL } from '@/lib/constants'
import { guides, guideList, guideUrl, PUBLISHED, UPDATED } from '@/lib/guides'

const EVAL_URL = '/evaluacion'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#C9A84C'

export function GuideHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
          <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
        </a>
        <div className="flex items-center gap-5">
          <a href="/guias" className="text-sm text-white/70 hover:text-white transition-colors">Guías</a>
          <a href="/" className="text-sm text-white/70 hover:text-white transition-colors">← Inicio</a>
        </div>
      </nav>
    </header>
  )
}

export function GuideFooter() {
  return (
    <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
      <a href="/guias" className="text-sm hover:opacity-80 transition-opacity mr-6" style={{ color: ACCENT }}>Todas las guías</a>
      <a href="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Volver al inicio</a>
      <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
    </div>
  )
}

export function ReadMore({ slugs, current }: { slugs: string[]; current: string }) {
  const items = slugs.filter((s) => s !== current).map((s) => guideList.find((g) => g.slug === s)).filter(Boolean)
  return (
    <section className="bg-[#F8F6F1] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl text-[#1A3A3A] font-bold mb-6">Sigue leyendo</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((g) => (
            <a key={g!.slug} href={`/guias/${g!.slug}`} className="block rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderColor: ACCENT }}>
              <h3 className="font-heading text-base font-bold text-[#1A3A3A] mb-2">{g!.cardTitle}</h3>
              <p className="text-[#1A3A3A]/65 text-sm leading-relaxed">{g!.summary}</p>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#1A3A3A]/70">
          <a href="/guias" className="font-semibold underline" style={{ color: '#1A3A3A' }}>Ver todas las guías →</a>
        </p>
      </div>
    </section>
  )
}

export default function GuidePage({ slug }: { slug: string }) {
  const g = guides[slug]
  const url = guideUrl(slug)

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: g.title,
        description: g.description,
        inLanguage: 'es',
        datePublished: PUBLISHED,
        dateModified: UPDATED,
        mainEntityOfPage: url,
        image: `${SITE_URL}/images/viajero-genius-v2.png`,
        author: { '@type': 'Organization', name: 'Genius Visa Consultants', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'Genius Visa Consultants',
          url: SITE_URL,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-visa.png` },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: g.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guías', item: `${SITE_URL}/guias` },
          { '@type': 'ListItem', position: 3, name: g.title, item: url },
        ],
      },
    ],
  }

  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <GuideHeader />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{g.eyebrow}</span>
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight mb-6">{g.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-4">{g.intro}</p>
          <p className="text-white/40 text-xs">Actualizado: noviembre de 2026 · Lectura de {g.readMinutes} minutos</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-7 border-l-4 bg-[#F8F6F1]" style={{ borderColor: ACCENT }}>
            <h2 className="font-heading text-2xl text-[#1A3A3A] font-bold mb-4">Respuesta rápida</h2>
            <ul className="space-y-3 text-[#1A3A3A]/80 leading-relaxed">
              {g.quick.map((q, i) => (
                <li key={q}><strong>{i + 1}.</strong> {q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {g.sections.map((s, idx) => {
        const light = idx % 2 === 0
        return (
          <section key={s.h2} className={`${light ? 'bg-[#F8F6F1]' : 'bg-white'} py-20 px-6`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">{s.h2}</h2>
              {s.lead && <p className="text-[#1A3A3A]/70 leading-relaxed mb-8 max-w-3xl">{s.lead}</p>}
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-[#1A3A3A]/70 leading-relaxed mb-4 max-w-3xl">{p}</p>
              ))}

              {s.cards && (
                <div className="grid md:grid-cols-2 gap-5 mt-2">
                  {s.cards.map((c) => (
                    <div key={c.title} className={`${light ? 'bg-white' : 'bg-[#F8F6F1]'} rounded-2xl p-6 shadow-sm border-t-4`} style={{ borderColor: ACCENT }}>
                      <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mb-2">{c.title}</h3>
                      <p className="text-[#1A3A3A]/65 text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {s.steps && (
                <div className="space-y-5 mt-2">
                  {s.steps.map((st, i) => (
                    <div key={st.title} className={`flex gap-5 ${light ? 'bg-white' : 'bg-[#F8F6F1]'} rounded-2xl p-6 shadow-sm`}>
                      <span className="font-heading text-4xl font-black shrink-0" style={{ color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mb-2">{st.title}</h3>
                        <p className="text-[#1A3A3A]/65 text-sm leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {s.bullets && (
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  {s.bullets.map((b) => (
                    <div key={b} className={`flex items-start gap-3 p-4 ${light ? 'bg-white' : 'bg-[#F8F6F1]'} rounded-xl`}>
                      <span className="font-bold mt-0.5" style={{ color: ACCENT }}>•</span>
                      <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              )}

              {s.note && (
                <p className="mt-8 rounded-xl border-l-4 bg-white px-5 py-4 text-sm text-[#1A3A3A]/80 leading-relaxed shadow-sm" style={{ borderColor: ACCENT }}>
                  {s.note}
                </p>
              )}
            </div>
          </section>
        )
      })}

      <section className={`${g.sections.length % 2 === 0 ? 'bg-[#F8F6F1]' : 'bg-white'} py-20 px-6`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Preguntas frecuentes</h2>
          <div className="space-y-5">
            {g.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-[#F8F6F1] p-7 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mb-3">{faq.q}</h3>
                <p className="text-[#1A3A3A]/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">{g.ctaTitle}</h2>
          <p className="text-[#1A3A3A]/70 mb-8">{g.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#1A3A3A] text-[#1A3A3A] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#1A3A3A] hover:text-white transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      <ReadMore slugs={g.related} current={slug} />

      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">También te puede interesar</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {g.visaLinks.map((link, i) => (
              <a key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: i % 2 === 0 ? '#3DB89E' : ACCENT }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2222] pb-12 px-6">
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-8">
          <p className="text-white/50 text-xs leading-relaxed">
            <strong className="text-white/70">Fuentes oficiales:</strong>{' '}
            {g.sources.map((src, i) => (
              <span key={src.url}>
                {i > 0 && ' · '}
                <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">{src.label}</a>
              </span>
            ))}
            . Los requisitos, tarifas y procedimientos cambian: confirma siempre la información vigente en el sitio oficial del Departamento de Estado y en el de la Embajada de EE. UU. en Honduras.
          </p>
          <p className="text-white/40 text-xs leading-relaxed mt-3">
            Genius Visa Consultants es una empresa de asesoría. No somos el consulado ni una entidad del gobierno de EE. UU., y no garantizamos la aprobación de ninguna visa: la decisión final corresponde siempre a las autoridades consulares. Esta guía es informativa y no sustituye la revisión de tu caso particular ni la asesoría de un abogado de inmigración cuando el trámite lo requiera.
          </p>
        </div>
      </section>

      <GuideFooter />
    </main>
  )
}
