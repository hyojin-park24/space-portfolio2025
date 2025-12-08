/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    basePath: "/space-portfolio2025",
    assetPrefix: "/space-portfolio2025", // 슬래시 제거

    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;