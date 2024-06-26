/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'tailus.io',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'cdn-icons-png.flaticon.com',
              port: '',
              pathname: '/**',
            },
          ],
      },
};

export default nextConfig;
