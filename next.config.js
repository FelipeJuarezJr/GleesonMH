/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gleesonmhservice.com',
        pathname: '/assets/images/**',
      },
    ],
  },
}

module.exports = nextConfig 