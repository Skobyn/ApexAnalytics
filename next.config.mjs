/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.same-assets.com",
        pathname: "/**",
      },
    ],
    domains: [
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
  },
  // Fix hydration errors with crossOrigin
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
