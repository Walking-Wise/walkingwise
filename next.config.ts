import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    domains: ["walking-wise-assets.s3.amazonaws.com", "via.placeholder.com", "www.walkingwise.com"],
  },
};

export default nextConfig;
