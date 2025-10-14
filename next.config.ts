import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "cdn.worldvectorlogo.com",
      "statamic.com",
      "greensock.com",
      "raw.githubusercontent.com",
    ],
  },
};

export default nextConfig;
