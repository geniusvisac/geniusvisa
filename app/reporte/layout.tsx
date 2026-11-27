import type { Metadata } from 'next'

// El reporte del cliente se arma en el navegador con sus datos: que ningún buscador lo indexe
export const metadata: Metadata = {
  title: 'Reporte de pre-calificación | Genius Visa Consultants',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function ReporteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
