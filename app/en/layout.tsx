import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      'en': `${SITE_URL}/en`,
      'es-HN': SITE_URL,
      'x-default': SITE_URL,
    },
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
