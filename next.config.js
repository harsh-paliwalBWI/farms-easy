/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["firebasestorage.googleapis.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
