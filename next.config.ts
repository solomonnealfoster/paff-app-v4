import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default withNextVideo(nextConfig);