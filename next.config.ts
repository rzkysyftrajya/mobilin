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
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  experimental: {
    optimizeCss: true,
  },
  compress: true,
};

export default nextConfig;
