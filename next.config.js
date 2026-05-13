/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ellada-sumy.vercel.app',
          },
        ],
        destination: 'https://ellada-sumy.com.ua/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;