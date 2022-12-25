/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["wp.topsillas.info","secure.gravatar.com"],
    // loader: 'akamai',
    // path: '',
  },
};

module.exports = nextConfig;
