/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/journeyai-studio',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 