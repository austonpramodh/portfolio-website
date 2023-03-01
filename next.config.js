/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "https://resume.auston.dev",
        destination: "/resume",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ["ipv6-test.com"],
  },
};

module.exports = nextConfig;
