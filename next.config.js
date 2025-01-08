/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '', // Leave empty for default port
                pathname: '/**', // Match all image paths
            },
            {
                protocol: 'https',
                hostname: 'www.pexels.com',
                port: '', // Leave empty for default port
                pathname: '/**', // Match all image paths
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '', // Leave empty for default port
                pathname: '/**', // Match all image paths
            },
            // randomuser.me
        ],
    },
};

module.exports = nextConfig;
