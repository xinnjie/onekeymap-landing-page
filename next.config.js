const nextra = require("nextra");

const withNextra = (nextra.default || nextra)({
  contentDirBasePath: "/docs",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better performance
  compress: true,

  // Trailing slash for consistent URLs
  trailingSlash: true,

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/download",
        destination: "https://apps.apple.com/app/onekeymap/id6752988933?mt=12",
        permanent: false,
      },
    ];
  },

  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Environment variables for SEO
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://onekeymap.com",
  },
};

module.exports = withNextra(nextConfig);
