/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    // GitHub Pages 경로(저장소 이름)
    basePath: "/space-portfolio2025",
    assetPrefix: "/space-portfolio2025/",

    images: {
        unoptimized: true,
    },

    trailingSlash: true,
};

module.exports = nextConfig;