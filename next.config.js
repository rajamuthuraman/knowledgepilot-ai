/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,

  async rewrites() {
    const backendApiUrl = process.env.BACKEND_API_URL;

    if (!backendApiUrl) {
      return [];
    }

    const backendUrl = backendApiUrl.replace(/\/$/, "");

    return [
      {
        source: "/backend/api/projects",
        destination: `${backendUrl}/api/projects/`,
      },
      {
        source: "/backend/api/projects/",
        destination: `${backendUrl}/api/projects/`,
      },
      {
        source: "/backend/:path*",
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;