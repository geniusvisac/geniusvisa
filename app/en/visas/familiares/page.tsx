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

const visas = [
  { code: 'H4', title: 'H4 Visa — H1B Dependent', desc: 'The H4 visa is designed for spouses and children under 21 of H1B visa holders working in the United States. It allows them to live in the country during the validity period of the principal H1B visa. In some cases, H4 holders can apply for employment authorization (EAD) if their H1B spouse has an advanced-stage approved permanent residency petition.' },
  { code: 'F2', title: 'F2 Visa — F1 Student Dependent', desc: 'The F2 visa allows spouses and children under 21 of F1 visa holders to accompany or join the student during their academic program in the United States. F2 holders can live in the country as long as the principal student maintains active F1 status. F2 holders are not authorized to work or study full-time.' },
  { code: 'J2', title: 'J2 Visa — J1 Exchange Dependent', desc: 'The J2 visa is intended for spouses and children under 21 of J1 visa holders participating in exchange programs in the United States. Unlike other dependent visas, J2 holders can apply for employment authorization independent of the J1 holder, making it one of the most flexible dependent visas available.' },
]

export default function VisasFamiliaresEN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Dependent Visas</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Family Visas<br/>H4 · F2 · J2</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Reuniting with family should not be complicated. We accompany you every step of the way so your loved ones can be with you in the United States.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Talk to an advisor</a>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">What are dependent visas?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">Dependent visas allow direct family members of work, study, or exchange visa holders to accompany or reunite with them in the United States. They are specifically designed for spouses and children under 21 who are not US citizens or permanent residents.</p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">The application process for these visas is linked to the principal holder's status. That is why it is essential to have expert advisory ensuring all documentation is correctly prepared and the process is completed in the right timeframe.</p>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Types of family visa</h2>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border border-[#1A3A3A]/10 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl bg-[#1A3A3A] text-[#C9A84C] font-heading font-black text-lg">{visa.code}</span>
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
                <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
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
              <div key={step.num} className="bg-[#F8F6F1] rounded-2xl p-6">
                <span className="font-heading text-4xl font-black text-[#C9A84C]">{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to reunite your family?</h2>
          <p className="text-white/60 mb-8">Contact us now and an expert advisor will review your case personally and for free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>
      <div className="bg-[#0D2222] py-6 px-6 text-center">
        <a href="/en" className="text-[#C9A84C] text-sm hover:opacity-80 transition-opacity">Back to home</a>
        <p className="text-white/30 text-xs mt-2">2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
