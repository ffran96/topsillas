/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 1,
    staticGenerationRetryCount: 2,
  },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "topsillas.local",
      },
      {
        protocol: "https",
        hostname: "wp.topsillas.info",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
    // loader: 'akamai',
    // path: '',
  },
};

module.exports = nextConfig;
