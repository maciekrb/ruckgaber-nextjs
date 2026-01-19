import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
  turbopack: {
    rules: {
      '*.po': {
        loaders: ['@lingui/loader'],
        as: '*.js',
      },
    },
  },
  images: {
    localPatterns: [{ pathname: '/images/**', search: '' }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
