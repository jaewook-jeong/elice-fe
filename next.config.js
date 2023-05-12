/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'img.icons8.com', 'cdn-api.elice.io'],
  },
};

module.exports = nextConfig;
