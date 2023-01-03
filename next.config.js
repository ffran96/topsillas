/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["wp.topsillas.info","secure.gravatar.com","www.topsillas.info/"],
    // loader: 'akamai',
    // path: '',
  },
};

module.exports = nextConfig;
