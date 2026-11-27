import type { Metadata } from 'next'

// La propuesta de servicios es para un cliente en particular: que ningún buscador la indexe
export const metadata: Metadata = {
  title: 'Propuesta de servicios | Genius Visa Consultants',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function PropuestaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
