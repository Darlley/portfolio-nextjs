/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = { 
  nextConfig,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.darlley.dev/:path*',
      },
    ]
  },
}