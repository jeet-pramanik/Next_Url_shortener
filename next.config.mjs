/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/_next/static/favicon.ico",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
