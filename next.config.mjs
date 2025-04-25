/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        useCache: true, // Server caching for RSC or fetch, not video
    },
    images: {
        domains: [],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/assets/images/**',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/assets/video/banner.mp4',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
