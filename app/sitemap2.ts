import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // --- Español (principal) ---
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/visas/b1-b2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/visas/f1`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/visas/h1b`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/visas/familiares`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/viajes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/privacidad`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terminos`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },

    // --- English ---
    { url: `${SITE_URL}/en`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/en/visas/b1-b2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/en/visas/f1`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/en/visas/h1b`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/en/visas/familiares`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/en/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/en/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
