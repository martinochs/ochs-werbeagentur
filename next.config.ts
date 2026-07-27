import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/beispiele/zahnarztpraxis",
        destination: "/webdesign-zahnarzt",
        permanent: true,
      },
      {
        source: "/beispiele/hautarzt-dr-schmidt",
        destination: "/webdesign-hautarzt",
        permanent: true,
      },
      {
        source: "/beispiele/orthopaedie-am-rhein",
        destination: "/webdesign-orthopaede",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
