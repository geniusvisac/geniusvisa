import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/constants'
import { headers } from 'next/headers'

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
  description: 'Más de 15 años ayudando a obtener visas americanas B1/B2, F1, H1B y más. Evaluación gratuita con IA. Servicio en 25+ países. Tegucigalpa, Honduras.',
  keywords: 'visa americana Honduras, consultoría de visas, visa turismo, visa estudiante, visa trabajo, Tegucigalpa, Genius Visa Consultants, Genius VC Travel',
  authors: [{ name: 'Genius Visa Consultants' }],
  creator: 'Genius Visa Consultants',
  publisher: 'Genius Visa Consultants',
  generator: 'Next.js',
  verification: {
    google: 'qAyVuv7_SOws1gUzRbiJAgwah3jpbGI751Tjt0BrEHg',
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Genius Visa Consultants · Tu Movilidad Global',
    description: 'Más de 15 años ayudando a obtener visas americanas. Evaluación gratuita con IA disponible ahora. Servicio en 25+ países desde Honduras.',
    url: SITE_URL,
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/viajero-genius-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Genius Visa Consultants - Tu Movilidad Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genius Visa Consultants | Expertos en Visas Americanas',
    description: 'Más de 15 años ayudando a obtener visas americanas. Evaluación gratuita con IA.',
    images: [`${SITE_URL}/images/viajero-genius-v2.webp`],
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

// Datos estructurados (schema.org): la organización, el negocio local y el sitio, enlazados por @id.
// Ahrefs y los buscadores con IA piden un nodo de tipo Organization en la portada; LocalBusiness solo no lo cubre.
function structuredData(lang: 'es' | 'en') {
  const orgId = `${SITE_URL}/#organization`
  const address = { '@type': 'PostalAddress', addressLocality: 'Tegucigalpa', addressCountry: 'HN' }
  const sameAs = [
    'https://instagram.com/geniusvisac',
    'https://www.facebook.com/share/1BfV3v4agj/?mibextid=wwXIfr',
    'https://wa.me/50497410936',
  ]
  const description = lang === 'en'
    ? 'Specialized U.S. visa consulting with over 15 years of experience'
    : 'Consultoría especializada en visas americanas con más de 15 años de experiencia'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'Genius Visa Consultants',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-visa.png`, width: 1062, height: 1112 },
        image: `${SITE_URL}/images/viajero-genius-v2.png`,
        description,
        email: 'geniusvisac@gmail.com',
        telephone: '+50497410936',
        address,
        contactPoint: [{
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+50497410936',
          email: 'geniusvisac@gmail.com',
          availableLanguage: ['es', 'en'],
        }],
        sameAs,
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Genius Visa Consultants',
        url: SITE_URL,
        image: `${SITE_URL}/images/viajero-genius-v2.png`,
        description,
        email: 'geniusvisac@gmail.com',
        telephone: '+50497410936',
        address,
        openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
        sameAs,
        parentOrganization: { '@id': orgId },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Genius Visa Consultants',
        inLanguage: lang === 'en' ? 'en' : 'es',
        publisher: { '@id': orgId },
      },
    ],
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = (await headers()).get('x-site-lang') === 'en' ? 'en' : 'es'
  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang)).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = 'manual'; window.scrollTo(0, 0);` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJL74VYDX9" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DJL74VYDX9');` }} />
        {process.env.NODE_ENV === 'production' && (
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xbuz9naw07");` }} />
        )}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
