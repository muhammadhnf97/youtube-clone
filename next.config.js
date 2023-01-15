/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        port: ''
      }
    ],
  },
}

require('dotenv').config();
module.exports = nextConfig
