import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
export const metadata: Metadata = {
  title: 'Privacy Policy | Genius Visa Consultants',
  description: 'Privacy policy of Genius Visa Consultants and Genius VC Travel. Tegucigalpa, Honduras.',
  alternates: { canonical: `${SITE_URL}/en/privacy` },
}
export default function Privacy() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>
        {[
          { title: "1. Data controller", body: "Genius Visa Consultants, domiciled in Tegucigalpa, Honduras. Contact: geniusvisac@gmail.com · +504 9741-0936." },
          { title: "2. Data we collect", body: "Full name, nationality, date of birth, email address, phone/WhatsApp number, immigration-related information relevant to profile assessment, and browsing data." },
          { title: "3. Purpose of processing", body: "Provision of immigration consulting services, profile assessment through an AI-based tool (ISAVISA), commercial communication, and case follow-up." },
          { title: "4. Legal basis", body: "Processing is based on the data subject's consent and on the performance of the service contract." },
          { title: "5. Data retention", body: "Data is retained for the duration of the contractual relationship and up to 5 years after its termination, in accordance with applicable Honduran law." },
          { title: "6. Your rights", body: "You may exercise your rights of access, rectification, cancellation, and objection by writing to geniusvisac@gmail.com." },
          { title: "7. Security", body: "We apply technical and organizational measures to protect your information against unauthorized access, loss, or alteration." },
          { title: "8. Cookies", body: "We use necessary technical cookies for the site to function and analytical cookies to improve the experience. You may disable them through your browser settings." },
          { title: "9. Changes to this policy", body: "We reserve the right to update this policy. The current version will always be available on our website." },
        ].map((item) => (
          <div key={item.title} className="mb-10 border-t border-white/10 pt-8">
            <h2 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">{item.title}</h2>
            <p className="text-white/70 leading-relaxed text-sm">{item.body}</p>
          </div>
        ))}
        <div className="mt-16 text-center">
          <a href="/en" className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-full text-sm hover:bg-[#C9A84C] hover:text-[#1A3A3A] transition-colors">Back to home</a>
        </div>
      </div>
    </main>
  )
}
