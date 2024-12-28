import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cf.bstatic.com",
        protocol: "https",
      },
      {
        hostname: "images.halldis.com",
        protocol: "https",
      },
      {
        hostname: "static.suedtirol.com",
        protocol: "https",
      },
      {
        hostname: "content.jdmagicbox.com",
        protocol: "https",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
