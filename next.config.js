/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/functions/v1/zap-scan',
        destination: 'https://jjdzrxfriezvfxjacche.supabase.co/functions/v1/zap-scan',
      },
    ];
  },
};

module.exports = nextConfig; 