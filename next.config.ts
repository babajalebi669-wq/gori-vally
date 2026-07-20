import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // `next lint` is still available for local development; we don't want
    // stylistic ESLint findings to fail production builds unexpectedly.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
