/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://51.20.136.147:8000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
