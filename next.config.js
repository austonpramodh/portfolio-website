/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [];
  },
  reactStrictMode: true,
  images: {
    domains: ["ipv6-test.com"],
  },
};

module.exports = nextConfig;
