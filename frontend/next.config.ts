import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: (process.env.NEXT_PUBLIC_API_URL || '').replace(/^https?:\/\/|:\d+\/?$/g, ''),
      port: '8055',
      pathname: '/assets/**',
    }],
  },
};

export default nextConfig;
