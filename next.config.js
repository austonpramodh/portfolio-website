/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [];
    },
    reactStrictMode: true,
    images: {
        domains: ["ipv6-test.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
