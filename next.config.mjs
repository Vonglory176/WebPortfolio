/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'out', // 'dist'
    images: {
        unoptimized: true // Disable default image optimization
    },

    env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,

        // NEXT_PUBLIC_SKYLER_PHONE: process.env.NEXT_PUBLIC_SKYLER_PHONE,
        // NEXT_PUBLIC_SKYLER_PHONE_FORMATTED: process.env.NEXT_PUBLIC_SKYLER_PHONE_FORMATTED,
        NEXT_PUBLIC_SKYLER_EMAIL: "SkylerGConley@gmail.com", // process.env.NEXT_PUBLIC_SKYLER_EMAIL,

        NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,


        // MY_SECRET: process.env.MY_SECRET, // Server-side secret
        // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Client-side accessible
    },



    // reactStrictMode: true,
    // assetPrefix: isProd ? '/your-repository-name/' : '',
    // basePath: isProd ? '/your-repository-name' : '',
}

export default nextConfig;
