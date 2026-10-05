import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'H4, F2, J2 Family Visas | Genius Visa Consultants',
  description: 'Reunite with your family in the United States. Expert advisory for H4, F2 and J2 family visas. Free AI evaluation. Honduras and Latin America.',
  keywords: 'family visa USA, H4 visa, F2 visa, J2 visa, family reunification USA, dependent visa',
  alternates: { canonical: `${SITE_URL}/en/visas/familiares` },
  openGraph: { url: `${SITE_URL}/en/visas/familiares` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#5A9E6F'

const visas = [
  { code: 'H4', title: 'H4 Visa — H1B Dependent', desc: 'The H4 visa is designed for spouses and children under 21 of H1B visa holders working in the United States. In some cases, H4 holders can apply for employment authorization (EAD) if their H1B spouse has an approved advanced-stage permanent residency petition.' },
  { code: 'F2', title: 'F2 Visa — F1 Student Dependent', desc: 'The F2 visa allows spouses and children under 21 of F1 visa holders to accompany or join the student during their academic program. F2 holders can live in the country as long as the principal student maintains active F1 status. F2 holders are not authorized to work or study full-time.' },
  { code: 'J2', title: 'J2 Visa — J1 Exchange Dependent', desc: 'The J2 visa is intended for spouses and children under 21 of J1 visa holders. Unlike other dependent visas, J2 holders can apply for employment authorization independent of the J1 holder, making it one of the most flexible dependent visas available.' },
]

const faqs = [
  { q: 'Can I work with an H4 visa?', a: 'In some cases yes. H4 holders can apply for an Employment Authorization (EAD) if their H1B spouse has an approved I-140 permanent residency petition. However, this benefit has been subject to regulatory changes — our advisors can give you up-to-date information on the current status of this policy.' },
  { q: 'Can my children study?', a: 'Yes. Children with H4, F2 or J2 visas can attend elementary and secondary schools in the United States. For full-time university studies they would need to change to an F1 visa. Minor children can attend school without additional restrictions.' },
  { q: 'What happens if the principal holder loses their visa?', a: 'If the principal holder loses their immigration status, the dependents also lose theirs. It is essential to act quickly — options include changing status, leaving the country, or finding a new sponsor. Our advisors can guide you through this process if needed.' },
  { q: 'How long does the process take?', a: 'The dependent visa process is usually handled in parallel with the principal holder\'s visa. If the principal holder already has their visa approved, the process for dependents can take between 4 and 12 weeks depending on the consulate and workload. Applying early is key.' },
]

const crossLinks = [
  { label: 'See H1B Visa — for the principal holder', href: '/en/visas/h1b', color: '#C9A84C' },
  { label: 'See F1 Visa — international students', href: '/en/visas/f1', color: '#4A7FC1' },
  { label: 'See B1/B2 Visa — tourism and business', href: '/en/visas/b1-b2', color: '#3DB89E' },
]

export default function VisasFamiliaresEN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/en" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
            <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
          </a>
          <a href="/en" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">← Back to home</a>
        </nav>
      </header>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 mx-auto" style={{ backgroundColor: `${ACCENT}20`, border: `1px solid ${ACCENT}40` }}><span className="text-4xl">👨‍👩‍👧‍👦</span></div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Dependent Visas</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Family Visas<br/>H4 · F2 · J2</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Reuniting with family should not be complicated. We accompany you every step of the way so your loved ones can be with you in the United States.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Talk to an advisor</a>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">What are dependent visas?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">Dependent visas allow direct family members of work, study, or exchange visa holders to accompany or reunite with them in the United States. They are specifically designed for spouses and children under 21 who are not US citizens or permanent residents.</p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">The application process is linked to the principal holder's status. That is why it is essential to have expert advisory ensuring all documentation is correctly prepared and the process is completed in the right timeframe.</p>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Types of family visa</h2>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border p-8 hover:shadow-md transition-shadow" style={{ borderColor: `${ACCENT}30` }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl font-heading font-black text-lg text-white" style={{ backgroundColor: ACCENT }}>{visa.code}</span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">General requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Valid passport with at least 6 months of validity for the applicant','Valid visa or status of the principal holder (H1B, F1 or J1)','DS-160 form completed for each applicant','Apostilled marriage certificate (for spouses)','Apostilled birth certificate (for children)','Evidence of the principal holder\'s immigration status','Proof of family relationship with the principal holder','Payment of MRV consular fee per applicant'].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">The Genius process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Case evaluation', desc: 'We review the principal holder\'s status and determine the correct visa and the best time to apply.' },
              { num: '02', title: 'Document preparation', desc: 'We organize all required family documentation, including apostilled certificates and official forms.' },
              { num: '03', title: 'Consular support', desc: 'We prepare each family member for the consular interview and accompany them throughout the entire process.' },
            ].map((step) => (
              <div key={step.num} className="bg-[#F8F6F1] rounded-2xl p-6 border-t-4" style={{ borderColor: ACCENT }}>
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
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Frequently asked questions — Family Visas</h2>
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
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to reunite your family?</h2>
          <p className="text-white/80 mb-8">Contact us now and an expert advisor will review your case personally and for free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white hover:text-[#1A3A3A] transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>
      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">You might also be interested in</p>
          <div className="grid sm:grid-cols-3 gap-4">
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
