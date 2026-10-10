import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'H1B Work Visa | Genius Visa Consultants',
  description: 'Get expert advice for your H1B work visa to the United States. Work visa experts. Free evaluation. Tegucigalpa, Honduras.',
  keywords: 'H1B visa, US work visa, professional visa USA, work in america',
  alternates: {
    canonical: `${SITE_URL}/en/visas/h1b`,
    languages: {
      'en': `${SITE_URL}/en/visas/h1b`,
      'es-HN': `${SITE_URL}/visas/h1b`,
      'x-default': `${SITE_URL}/visas/h1b`,
    },
  },
  openGraph: {
    title: 'H1B Work Visa | Genius Visa Consultants',
    description: 'Get expert advice for your H1B work visa to the United States. Work visa experts. Free evaluation. Tegucigalpa, Honduras.',
    url: `${SITE_URL}/en/visas/h1b`,
    siteName: 'Genius Visa Consultants',
    locale: 'en_US',
    type: 'website',
  },
}

const EVAL_URL = '/evaluacion'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#E8833A'

const faqs = [
  { q: `What is the H1B lottery?`, a: `USCIS conducts a random selection since it receives more petitions than the 65,000 available (plus 20,000 for master's degree holders).` },
  { q: `How long does the H1B visa last?`, a: `It is initially granted for 3 years and can be extended for another 3 years.` },
  { q: `Can I change employers?`, a: `Yes, but the new employer must file an H1B transfer petition before you start working with them.` },
  { q: `Can my family come?`, a: `Yes. Your spouse and children under 21 qualify for an H4 visa.` },
]

const crossLinks = [
  { label: 'Visa approved? Plan your relocation with Genius VC Travel', href: '/viajes', color: '#3DB89E' },
  { label: 'Your family coming? See H4 Family Visas', href: '/en/visas/familiares', color: '#C9A84C' },
]

export default function VisaH1BEN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/en" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
            <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/visas/h1b" className="text-xs text-white/40 hover:text-white/70 transition-colors">🇭🇳 Español</a>
            <a href="/en" className="text-sm text-white/70 hover:text-white transition-colors">← Home</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 mx-auto" style={{ backgroundColor: ACCENT + '20', border: '1px solid ' + ACCENT + '40' }}>
            <span className="text-4xl">💼</span>
          </div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Work Visa</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">H1B Visa<br/>Specialized Work</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">The visa for professionals with a university degree who have received a job offer from a US company.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-[#1A3A3A] hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Talk to an advisor</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Main requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[`Job offer from US sponsoring employer`, `University degree in related field`, `I-129 petition approved by USCIS`, `Valid passport with at least 6 months of validity`, `DS-160 form`, `Proof of academic and professional credentials`, `Employment contract or offer letter`, `Detailed work history`].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">The Genius process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { num: '01', title: 'Eligibility assessment', desc: 'We review your professional profile and the chances of success in the process.' },
            { num: '02', title: 'Employer coordination', desc: 'We guide you on the requirements your sponsoring employer must meet for the petition.' },
            { num: '03', title: 'Consular preparation', desc: 'Once the petition is approved, we prepare you for the interview and all required documents.' },
          ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: ACCENT }}>
                <span className="font-heading text-4xl font-black" style={{ color: ACCENT }}>{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Frequently asked questions — H1B Visa</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors">
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: ACCENT }}>{faq.q}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">Do you have a job offer in the US?</h2>
          <p className="text-[#1A3A3A]/70 mb-8">Evaluate your profile and start the process with expert guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90">Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#1A3A3A] text-[#1A3A3A] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#1A3A3A] hover:text-white transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">You might also be interested in</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {crossLinks.map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: link.color }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
        <a href="/en" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Back to home</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
