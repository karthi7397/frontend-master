/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<frontend-master>',
    assetPrefix: isDev ? '' : '/<frontend-master>',
};

export default nextConfig;