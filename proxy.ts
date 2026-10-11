import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Marca cada petición con el idioma según la ruta:
// /en y /en/... → 'en'; todo lo demás → 'es'.
// app/layout.tsx lee este valor para poner <html lang="..."> correcto.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-site-lang', lang)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  // No se ejecuta en APIs, archivos internos de Next ni archivos estáticos (imágenes, sitemap.xml, etc.)
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
}
