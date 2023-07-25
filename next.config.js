/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['image.paysys.kr']
  }
}

module.exports = nextConfig
