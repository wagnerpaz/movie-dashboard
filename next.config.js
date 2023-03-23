/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: { domains: ["image.tmdb.org", "source.unsplash.com"] },
  redirects() {
    return [
      { source: "/", destination: "/home", permanent: true },
      { source: "/home", destination: "/home/tv-shows", permanent: true },
    ];
  },
};

module.exports = nextConfig;
