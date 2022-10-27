/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["strapi-personaluse-bsmp.herokuapp.com"],
  },
}

module.exports = nextConfig
