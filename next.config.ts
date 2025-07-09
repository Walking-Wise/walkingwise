import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    domains: ["walking-wise-assets.s3.amazonaws.com", "walking-wise-animated-video-assets.s3.us-east-1.amazonaws.com", "via.placeholder.com", "www.walkingwise.com", "walking-wise-assets.s3.us-east-1.amazonaws.com"],
  },
};

export default nextConfig;
