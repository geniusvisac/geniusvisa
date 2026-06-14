import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Genius Visa Consultants | Expertos en Visas Americanas · Honduras',
  description: 'Mas de 15 anos ayudando a obtener visas americanas B1/B2, F1, H1B y mas. Evaluacion gratuita con IA. Servicio en 25+ paises. Tegucigalpa, Honduras.',
  keywords: 'visa americana Honduras, consultoria de visas, visa turismo, visa estudiante, visa trabajo, Tegucigalpa, Genius Visa Consultants, Genius VC Travel',
  authors: [{ name: 'Genius Visa Consultants' }],
  creator: 'Genius Visa Consultants',
  publisher: 'Genius Visa Consultants',
  generator: 'Next.js',
  verification: {
    google: 'qAyVuv7_SOws1gUzRbiJAgwah3jpbGI751Tjt0BrEHg',
  },
  metadataBase: new URL('https://genius-visa-and-travel.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Genius Visa Consultants · Tu Movilidad Global',
    description: 'Expertos en visas americanas con 15+ anos de experiencia. Evaluacion gratuita con IA disponible ahora.',
    url: 'https://genius-visa-and-travel.vercel.app',
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'website',
    images: [
      {
        url: '/images/viajero-genius-v2.png',
        width: 1200,
        height: 630,
        alt: 'Genius Visa Consultants - Tu Movilidad Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genius Visa Consultants',
    description: 'Expertos en visas americanas. Evaluacion gratuita con IA.',
    images: images: ['/images/viajero-genius-v2.webp'],,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1A3A3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Genius Visa Consultants',
              description: 'Consultoria especializada en visas americanas con mas de 15 anos de experiencia',
              url: 'https://genius-visa-and-travel.vercel.app',
              telephone: '+50497410936',
              email: 'geniusvisac@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tegucigalpa',
                addressCountry: 'HN',
              },
              openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
              sameAs: [
  'https://instagram.com/geniusvisac',
  'https://www.facebook.com/share/1BfV3v4agj/?mibextid=wwXIfr',
  'https://wa.me/50497410936',
],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = 'manual'; window.scrollTo(0, 0);` }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
