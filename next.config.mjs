/** @type {import('next').NextConfig} */
// const nextConfig = {
//     // basePath: '/webportfolio', // Not needed for custom domain
//     output: 'export',
//     // reactStrictMode: false,
// };

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
