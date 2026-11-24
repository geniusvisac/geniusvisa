import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { guideList } from '@/lib/guides'
import { GuideHeader, GuideFooter } from '@/components/guide-page'

const PAGE_URL = `${SITE_URL}/guias`
const TITLE = 'Guías de visa americana para hondureños'
const DESCRIPTION =
  'Guías claras sobre la visa americana en Honduras: cómo sacarla, documentos, entrevista, costos, visa F1, H1B, familiares y qué hacer si te niegan la visa.'
const ACCENT = '#C9A84C'

export const metadata: Metadata = {
  title: 'Guías de visa americana | Genius Visa Consultants',
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/viajero-genius-v2.png`],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'website',
    images: [{ url: `${SITE_URL}/images/viajero-genius-v2.png`, width: 1200, height: 630, alt: 'Genius Visa Consultants - Tu Movilidad Global' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${PAGE_URL}#page`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'es',
      url: PAGE_URL,
      publisher: {
        '@type': 'Organization',
        name: 'Genius Visa Consultants',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-visa.png` },
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: guideList.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: g.cardTitle,
          url: `${SITE_URL}/guias/${g.slug}`,
        })),
      },
    },
    {
      '@type': 'Article',
      '@id': `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: 'es',
      datePublished: '2026-11-18',
      dateModified: '2026-11-18',
      mainEntityOfPage: PAGE_URL,
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
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: PAGE_URL },
      ],
    },
  ],
}

export default function GuiasIndex() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <GuideHeader />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Centro de guías</span>
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight mb-6">Guías de visa americana para hondureños</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Respuestas claras a las preguntas que más nos hacen, en lenguaje sencillo y con información verificada en fuentes oficiales.
          </p>
          <p className="text-white/40 text-xs">Actualizado: noviembre de 2026</p>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {guideList.map((g, i) => (
            <a key={g.slug} href={`/guias/${g.slug}`} className="group block rounded-2xl bg-white p-7 shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderColor: ACCENT }}>
              <span className="font-heading text-3xl font-black" style={{ color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-heading text-xl font-bold text-[#1A3A3A] mt-2 mb-3">{g.cardTitle}</h2>
              <p className="text-[#1A3A3A]/65 text-sm leading-relaxed mb-4">{g.summary}</p>
              <span className="text-sm font-semibold text-[#1A3A3A] group-hover:underline">Leer la guía →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">¿Prefieres que revisemos tu caso?</h2>
          <p className="text-[#1A3A3A]/70 mb-8">Nuestra evaluación gratuita te muestra qué puntos de tu perfil conviene fortalecer antes de aplicar.</p>
          <a href="/evaluacion" className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90">Evaluar mi perfil gratis →</a>
        </div>
      </section>

      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">Conoce nuestras visas</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Visa de turista B1/B2', href: '/visas/b1-b2' },
              { label: 'Visa F1 de estudiante', href: '/visas/f1' },
              { label: 'Visa H1B de trabajo', href: '/visas/h1b' },
              { label: 'Visas familiares', href: '/visas/familiares' },
            ].map((l, i) => (
              <a key={l.href} href={l.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: i % 2 === 0 ? '#3DB89E' : ACCENT }} />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <GuideFooter />
    </main>
  )
}
