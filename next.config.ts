import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  outputFileTracingRoot: '/Users/douglasheliston/.paperclip/instances/default/projects/8b0b06a9-24dd-4c7d-8eca-171b1ab9b1a8/bcd8d622-e282-450b-a5c8-7fc9e4a945e2/_default/casa-landing',
}

export default nextConfig