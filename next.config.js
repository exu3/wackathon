/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cloud-f2l2q375z-hack-club-bot.vercel.app",
      "cloud-fvcuidd4c-hack-club-bot.vercel.app",
    ],
  },
};

module.exports = nextConfig;
