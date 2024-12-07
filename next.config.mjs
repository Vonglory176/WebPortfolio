/** @type {import('next').NextConfig} */
// const nextConfig = {
//     // basePath: '/webportfolio', // Not needed for custom domain
//     output: 'export',
//     // reactStrictMode: false,
// };

const nextConfig = {
    // reactStrictMode: true,
    // images: {
    //     unoptimized: true // Disable default image optimization
    // },
    assetPrefix: '', // isProd ? '/your-repository-name/' : '',
    basePath: '', // isProd ? '/your-repository-name' : '',
    output: 'export'
}

export default nextConfig;
