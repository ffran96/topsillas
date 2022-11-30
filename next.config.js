/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["wp.topsillas.info"],
    // loader: 'akamai',
    // path: '',
  },
};

module.exports = nextConfig;
