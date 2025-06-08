/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true, // ✅ disables breaking the build
  },
};

export default nextConfig;