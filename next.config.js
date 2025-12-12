/** @type {import('next').NextConfig} */
const repo = "space-portfolio2025";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",                 // Next.js 정적 산출물(out) 생성
    basePath: isProd ? `/${repo}` : "",// 라우팅 경로에 /space-portfolio2025 접두
    assetPrefix: isProd ? `/${repo}/` : "", // 정적 자산 경로에 접두
    trailingSlash: true,              // Pages 환경에서 라우트 정적 파일 매칭 안정화
    images: {
        unoptimized: true,              // GitHub Pages는 Next Image 최적화 API 제공 X
    },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
//
//     basePath: "/space-portfolio2025",
//     assetPrefix: "/space-portfolio2025/",
//
//     images: {
//         unoptimized: true,
//     },
//     trailingSlash: true,
// };
//
// module.exports = nextConfig;
