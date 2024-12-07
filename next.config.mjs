/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'out', // 'dist'
    images: {
        unoptimized: true // Disable default image optimization
    },


    // reactStrictMode: true,
    // assetPrefix: isProd ? '/your-repository-name/' : '',
    // basePath: isProd ? '/your-repository-name' : '',
}

export default nextConfig;
