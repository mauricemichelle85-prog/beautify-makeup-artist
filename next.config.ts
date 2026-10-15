import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify's Next.js runtime doesn't recommend standalone output.
  // We only use standalone for the local Docker-style build flow.
  output: process.env.NETLIFY ? undefined : "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "templatekits.themewarrior.com",
      },
      {
        protocol: "https",
        hostname: "elements-resized.envatousercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
