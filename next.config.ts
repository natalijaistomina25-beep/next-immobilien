import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.iconscout.com/icon/free/**")],
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// images: {
//     remotePatterns: [new URL("https://cdn.iconscout.com/icon/free/**")],
//   },
