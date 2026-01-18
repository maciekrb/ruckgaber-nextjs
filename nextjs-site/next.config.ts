import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
    turbo: {
      rules: {
        '*.po': {
          loaders: ['@lingui/loader'],
          as: '*.js',
        },
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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/i,
      loader: '@lingui/loader',
    })
    return config
  },
}

export default nextConfig
