import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "/skills/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "/skills/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "/skills/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "/skills/stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "/skills/node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "/skills/mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "/skills/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "/skills/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "/skills/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "/skills/next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "/skills/node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "/skills/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "/skills/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "/skills/firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "/skills/postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "/skills/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "/skills/prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "/skills/graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "/reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "/tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "/skills/docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "/skills/figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "/skills/go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "교적 웹 서비스 시스템 마이그레이션",
    description:
        '대한민국 대형 교단의 20만명 규모 데이터를 관리하는 기존 레거시 ERP를 현대적인 웹 기반 시스템으로 재구축한 프로젝트입니다. 프론트엔드로 1년간 활동 후 PM 역할을 맡아 도메인 설계, UI/UX 구조 구성, 5개의 화면 아키텍처를 리딩했습니다.',
    image: "/space-portfolio2025/projects/project-1.png",
    link: "",
  },
  {
    title: "실시간 상품관리 AppSheet 개발",
    description:
        'AppSheet 기반의 상품 관리 시스템을 개발하여 바이어의 실시간 상품 조회, 상태 관리, 중복 구매 방지 로직을 구현했습니다. Google Sheet/Drive·Automation을 연동하여 상태 기반 알림, 검수 리마인드, 구매대기 관리 등 주요 프로세스를 자동화했습니다. 그 결과 해외 현장 바잉의 효율성과 정확성을 크게 향상시켰습니다.',
    image: "/space-portfolio2025/projects/project-2.png",
    link: "",
  },
  {
    title: "사르베토 서비스 홈페이지",
    description:
        '기존 블로그 상세페이지의 한계를 개선하기 위해 스토리 중심의 랜딩페이지를 기획·디자인·구축했습니다. 총 12개 섹션으로 구성된 페이지는 아임웹 기반으로 반응형 UI를 구현해 브랜드 메시지를 효과적으로 전달할 수 있도록 설계했습니다. 이후 요청에 따라 신규 섹션 2개를 추가 제작하며 확장 가능한 구조로 완성도를 높였습니다.',
    image: "/space-portfolio2025/projects/project-3.png",
    link: "https://sarbeto.com/",
  },
] as const;

// export const FOOTER_DATA = [
//   {
//     title: "Social",
//     data: [
//       {
//         name: "GitHub",
//         icon: RxGithubLogo,
//         link: "https://github.com/hyojin-park24",
//       },
//       {
//         name: "Instagram",
//         icon: RxInstagramLogo,
//         link: "https://www.instagram.com/dlems12.8/",
//       },
//       {
//         name: "LinkedIn",
//         icon: RxLinkedinLogo,
//         link: "https://linkedin.com",
//       },
//     ],
//   },
//   {
//     title: "Portfolio",
//     data: [
//       {
//         name: "About Me",
//         icon: null,
//         link: "#about-me",
//       },
//       {
//         name: "Skills",
//         icon: null,
//         link: "#skills",
//       },
//       {
//         name: "Projects",
//         icon: null,
//         link: "#projects",
//       },
//     ],
//   },
//   {
//     title: "Contact",
//     data: [
//       {
//         name: "GitHub",
//         icon: RxGithubLogo,
//         link: "https://github.com/hyojin-park24",
//       },
//       {
//         name: "Blog",
//         icon: null,
//         link: "https://your-blog-url.com",
//       },
//       {
//         name: "Email",
//         icon: null,
//         link: "mailto:your@email.com",
//       },
//     ],
//   },
// ] as const;

export const FOOTER_DATA: Array<{
  title: string;
  data: { name: string; link: string; icon?: any }[];
}> = [];

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/hyojin-park24/space-portfolio2025",
};