/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 31536000,
    disableStaticImages: true,
    domains: ['owvix.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'owvix.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

module.exports = withImages(nextConfig);
