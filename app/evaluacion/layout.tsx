import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Evaluación de Perfil de Visa Gratis con IA | Genius Visa Consultants',
  description: 'Evalúa tu perfil para visa americana gratis en 2 minutos. Nuestra IA analiza más de 40 variables consulares y te da un diagnóstico real. Tegucigalpa, Honduras.',
  alternates: {
    canonical: `${SITE_URL}/evaluacion`,
    languages: {
      'es-HN': `${SITE_URL}/evaluacion`,
      'x-default': `${SITE_URL}/evaluacion`,
    },
  },
  openGraph: {
    title: 'Evaluación de Perfil de Visa Gratis con IA | Genius Visa Consultants',
    description: 'Evalúa tu perfil para visa americana gratis en 2 minutos con inteligencia artificial.',
    url: `${SITE_URL}/evaluacion`,
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/viajero-genius-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Genius Visa Consultants - Evaluación de Perfil con IA',
      },
    ],
  },
}

export default function EvaluacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
