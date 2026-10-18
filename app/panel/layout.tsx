import type { Metadata } from 'next'

// El panel es privado: que ningún buscador lo indexe
export const metadata: Metadata = {
  title: 'Panel privado | Genius Visa Consultants',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
