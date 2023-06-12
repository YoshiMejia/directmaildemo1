/** @type {import('next').NextConfig} */
const nextConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
