/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
