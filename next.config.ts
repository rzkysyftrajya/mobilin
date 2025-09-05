import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async rewrites() {
    return [
      // biar Google verification file bisa diakses root
      {
        source: "/google6ba3894116871aad.html",
        destination: "/google6ba3894116871aad.html",
      },
      { source: "/site.webmanifest", destination: "/site.webmanifest" },
    ];
  },
};

export default nextConfig;
