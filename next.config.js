/** @type {import('next').NextConfig} */
const nextConfig = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};
module.exports = nextConfig;
