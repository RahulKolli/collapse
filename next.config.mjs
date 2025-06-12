const nextConfig = {
  output: 'export', // Enables static HTML export (replaces `next export` command)

  images: {
    unoptimized: true, // Disable Image Optimization API for static export compatibility
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
