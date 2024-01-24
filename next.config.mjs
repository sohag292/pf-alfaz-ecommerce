/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      port: '',
      hostname: 'picsum.photos'
    }]
  }
};

export default nextConfig;
