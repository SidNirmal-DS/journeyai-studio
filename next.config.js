/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/journeyai-studio/' : '',
  basePath: isProd ? '/journeyai-studio' : '',
};

module.exports = nextConfig; 