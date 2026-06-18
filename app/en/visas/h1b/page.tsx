import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'H1B, H2B and J1 Work Visas | Genius Visa Consultants',
  description: 'Get your H1B, H2B or J1 work visa to work in the United States. Expert advisory. Free AI evaluation. Honduras and Latin America.',
  keywords: 'H1B visa, H2B visa, J1 visa, US work visa, work in USA',
  alternates: {
    canonical: 'https://genius-visa-and-travel.vercel.app/en/visas/h1b',
  },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

const visas = [
  {
    code: 'H1B',
    title: 'H1B Visa — Specialty Occupation Worker',
    desc: 'The H1B visa allows professionals in specialty occupations to temporarily work in the United States for a specific sponsoring employer. It is aimed at professionals with a university degree in fields such as technology, engineering, medicine, architecture, and accounting. The H1B visa has an annual cap of 85,000 new visas allocated through a lottery system.',
  },
  {
    code: 'H2B',
    title: 'H2B Visa — Temporary Non-Agricultural Worker',
    desc: 'The H2B visa allows US employers to hire foreign workers for temporary non-agricultural jobs when there are not enough local workers available. Common in hospitality, restaurants, construction, landscaping, transportation, and cleaning services. It has a cap of 66,000 visas annually divided into two semi-annual periods.',
  },
  {
    code: 'J1',
    title: 'J1 Visa — Cultural and Professional Exchange',
    desc: 'The J1 visa is an exchange visa that allows foreigners to participate in approved educational and cultural programs in the United States. Available for au pairs, students, professors, researchers, doctors, summer camp workers, trainees, and interns. Many J1 programs have a two-year home residency requirement.',
  },
]

export default function VisaH1BEN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Work Visa</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Work Visas<br/>H1B · H2B · J1
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Working legally in the United States requires the right visa and proper preparation. We guide you through every stage of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Evaluate my profile for free
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">
              Talk to an advisor
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">Available work visas</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10">
            The type of work visa you need depends on your professional profile, type of job, and contract duration. We help you identify the best option for your specific case.
          </p>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border border-[#1A3A3A]/10 bg-white p-8 hover:shadow-md transition-shadow">
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

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">General requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Job offer or contract from approved employer or program',
              'Valid passport with at least 6 months of validity',
              'DS-160 form completed correctly',
              'Petition approved by USCIS (depending on visa type)',
              'Proof of academic qualifications and experience',
              'Program eligibility certificate (for J1)',
              'Evidence of temporary nature of employment (for H2B)',
              'Job offer letter detailing position, duration, and salary',
            ].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
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
              { num: '03', title: 'Consular preparation', desc: 'We prepare you for the consular interview with a focus on demonstrating your qualifications and the legitimacy of the employment.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm">
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
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to work in the United States?</h2>
          <p className="text-white/60 mb-8">Contact us and an expert advisor will review your case personally and for free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Evaluate my profile for free
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">
              WhatsApp: +504 9741-0936
            </a>
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
