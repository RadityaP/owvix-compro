/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

module.exports = withImages(nextConfig);
