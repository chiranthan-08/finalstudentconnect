import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable reactStrictMode in development to avoid double-rendering and double-invoking effects
  reactStrictMode: false,
  poweredByHeader: false,
  // Optimize heavy barrel icon imports (lucide-react) for instant compilation
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
