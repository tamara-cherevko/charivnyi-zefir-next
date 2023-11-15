/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/all',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
