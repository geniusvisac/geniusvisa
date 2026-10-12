import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { VisaEvaluator } from '@/components/visa-evaluator'

export const metadata: Metadata = {
  title: 'Free AI Visa Profile Assessment | Genius Visa Consultants',
  description: 'Assess your U.S. visa profile for free in 2 minutes. Our AI reviews your history, ties and finances and gives you a clear, personalized diagnosis.',
  alternates: {
    canonical: `${SITE_URL}/en/evaluation`,
    languages: {
      'en': `${SITE_URL}/en/evaluation`,
      'es-HN': `${SITE_URL}/evaluacion`,
      'x-default': `${SITE_URL}/evaluacion`,
    },
  },
  openGraph: {
    title: 'Free AI Visa Profile Assessment | Genius Visa Consultants',
    description: 'Assess your U.S. visa profile for free in 2 minutes with artificial intelligence.',
    url: `${SITE_URL}/en/evaluation`,
    siteName: 'Genius Visa Consultants',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/viajero-genius-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Genius Visa Consultants - AI Profile Assessment',
      },
    ],
  },
}

export default function EvaluationPage() {
  return <VisaEvaluator initialLang="en" />
}
