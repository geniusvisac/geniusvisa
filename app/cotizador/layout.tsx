import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Cotizador de Viajes Premium | Genius VC Travel · Honduras',
  description: 'Cotiza tu próximo viaje con Genius VC Travel. Boletos aéreos, paquetes de lujo, hoteles y experiencias únicas. Servicio personalizado desde Tegucigalpa, Honduras.',
  alternates: {
    canonical: `${SITE_URL}/cotizador`,
    languages: {
      'es-HN': `${SITE_URL}/cotizador`,
      'x-default': `${SITE_URL}/cotizador`,
    },
  },
  openGraph: {
    title: 'Cotizador de Viajes Premium | Genius VC Travel',
    description: 'Cotiza tu próximo viaje con Genius VC Travel. Boletos aéreos y paquetes de lujo desde Honduras.',
    url: `${SITE_URL}/cotizador`,
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/viajero-genius-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Genius VC Travel - Cotizador de Viajes',
      },
    ],
  },
}

export default function CotizadorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
