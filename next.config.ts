import type { NextConfig } from 'next'
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.valiancemedia.com',
      },
    ],
  },
}
export default config
