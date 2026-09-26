/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const backendApiUrl = process.env.BACKEND_API_URL;

    if (!backendApiUrl) {
      return [];
    }

    return [
      {
        source: "/backend/:path*",
        destination: `${backendApiUrl.replace(/\/$/, "")}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
