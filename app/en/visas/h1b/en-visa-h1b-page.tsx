import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'H1B, H2B and J1 Work Visas | Genius Visa Consultants',
  description: 'Get your H1B, H2B or J1 work visa to work in the United States. Expert advisory. Free AI evaluation. Honduras and Latin America.',
  keywords: 'H1B visa, H2B visa, J1 visa, US work visa, work in USA',
  alternates: { canonical: `${SITE_URL}/en/visas/h1b` },
  openGraph: { url: `${SITE_URL}/en/visas/h1b` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#C9A84C'

const visas = [
  { code: 'H1B', title: 'H1B Visa — Specialty Occupation Worker', desc: 'The H1B visa allows professionals in specialty occupations to temporarily work in the United States for a specific sponsoring employer. It is aimed at professionals with a university degree in technology, engineering, medicine, architecture, and accounting. It has an annual cap of 85,000 new visas allocated through a lottery system.' },
  { code: 'H2B', title: 'H2B Visa — Temporary Non-Agricultural Worker', desc: 'The H2B visa allows US employers to hire foreign workers for temporary non-agricultural jobs when local workers are not available. Common in hospitality, restaurants, construction, landscaping, and cleaning services. It has a cap of 66,000 visas annually divided into two semi-annual periods.' },
  { code: 'J1', title: 'J1 Visa — Cultural and Professional Exchange', desc: 'The J1 visa allows foreigners to participate in approved educational and cultural programs in the United States. Available for au pairs, students, professors, researchers, doctors, summer camp workers, trainees, and interns. Many J1 programs have a two-year home residency requirement.' },
]

const faqs = [
  { q: 'What is the H1B lottery and when does it happen?', a: 'The H1B lottery occurs every year in April. Companies register their candidates in March, and USCIS randomly selects 85,000 applications (65,000 from the general cap + 20,000 for people with a master\'s degree from US universities). If not selected, you can try again the following year.' },
  { q: 'Can I change employers with H1B?', a: 'Yes. The H1B visa is tied to your employer, but you can transfer it to a new employer as long as they file a new H1B petition with USCIS. The process is called an "H1B Transfer" and you can start working for the new employer as soon as the petition is received by USCIS.' },
  { q: 'Can my family come with me?', a: 'Yes. Your spouse and children under 21 can apply for the H4 visa. In some cases, H4 holders can apply for employment authorization (EAD) if their H1B spouse has an approved advanced-stage permanent residency petition.' },
  { q: 'What if I lose my job?', a: 'If your employer cancels your H1B or lets you go, you have a 60-day grace period to find a new employer to transfer your visa, change to another valid immigration status, or leave the country. It is essential to act quickly — our advisors can guide you through this process.' },
]

const crossLinks = [
  { label: 'Bring your family — See Family Visas (H4)', href: '/en/visas/familiares', color: '#5A9E6F' },
  { label: 'Visa approved? Plan your trip with Genius VC Travel', href: '/viajes', color: '#3DB89E' },
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
          <a href="/en" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">← Back to home</a>
        </nav>
      </header>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 mx-auto" style={{ backgroundColor: `${ACCENT}20`, border: `1px solid ${ACCENT}40` }}><span className="text-4xl">💼</span></div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Work Visa</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Work Visas<br/>H1B · H2B · J1</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Working legally in the United States requires the right visa and proper preparation. We guide you through every stage of the process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-[#1A3A3A] hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Talk to an advisor</a>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">Available work visas</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10">The type of work visa you need depends on your professional profile, type of job, and contract duration. We help you identify the best option for your specific case.</p>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border bg-white p-8 hover:shadow-md transition-shadow" style={{ borderColor: `${ACCENT}30` }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl font-heading font-black text-lg text-[#1A3A3A]" style={{ backgroundColor: ACCENT }}>{visa.code}</span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">General requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Job offer or contract from approved employer or program','Valid passport with at least 6 months of validity','DS-160 form completed correctly','Petition approved by USCIS (depending on visa type)','Proof of academic qualifications and experience','Program eligibility certificate (for J1)','Evidence of temporary nature of employment (for H2B)','Job offer letter detailing position, duration, and salary'].map((req) => (
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
              { num: '01', title: 'Visa identification', desc: 'We analyze your professional profile and type of employment to determine which visa best fits your situation.' },
              { num: '02', title: 'Document preparation', desc: 'We coordinate with your employer or sponsoring program and prepare all required documentation.' },
              { num: '03', title: 'Consular preparation', desc: 'We prepare you for the consular interview focusing on demonstrating your qualifications and the legitimacy of the employment.' },
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
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Frequently asked questions — Work Visas</h2>
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
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">Ready to work in the United States?</h2>
          <p className="text-[#1A3A3A]/70 mb-8">Contact us and an expert advisor will review your case personally and for free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free →</a>
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
