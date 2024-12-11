/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'out', // 'dist'
    images: {
        unoptimized: true // Disable default image optimization
    },

    // env: {
    //     // NEXT_PUBLIC_BASE_URL: "https://www.skylergconley.com", // process.env.NEXT_PUBLIC_BASE_URL,
    //     NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    // },

    // reactStrictMode: true,
    // assetPrefix: isProd ? '/' : '',
    // basePath: isProd ? '' : '',
}

export default nextConfig;