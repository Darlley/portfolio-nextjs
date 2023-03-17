/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.darlley.dev/:path*',
      },
    ]
  },
  
}

module.exports = nextConfig