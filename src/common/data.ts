/*
    작성일 : 2024.10.21
    파일명 : data.ts
    설명 : 사용되는 데이터 
*/
import { disconnect } from "process";
import {
  CareerDetailType,
  CareerElementType,
  CompanyType,
  EducationType,
  ProfileType,
  ProjectDetailType,
  ToyProjectType,
} from "./type";

export const CAREER_IMG_LIST = ["happy.png", "udok.png", "guide.png"];

export const CAREER_LIST: CareerElementType[] = [
  {
    title: "통합 복지 플랫폼 구축, Ezl",
    period: "2023.08 ~ 2023.12 (5개월)",
    skills: ["프론트엔드", "백엔드"],
  },
  {
    title: "상담사 가이드 2.0 구축, LG U+",
    period: "2023.01 ~ 2023.06 (6개월)",
    skills: ["프론트엔드", "백엔드"],
  },
  {
    title: "유료 구독 플랫폼 구축, LG U+",
    period: "2023.09 ~ 2023.12 (4개월)",
    skills: ["프론트엔드", "백엔드"],
  },
];

export const CAREER_DETAIL_LIST: CareerDetailType[] = [
  {
    title: "통합 복지 플랫폼 구축, Ezl",
    period: "2023.08 ~ 2023.12 (5개월)",
    client: "이동의 즐거움",
    discription:
      "방문없이 교통부터 유통까지 하나로 이동하는 전국 최초 통합 복지 플랫폼",
    skills: ["Java", "jpa", "Vue.js", "mySql"],
    members: 7,
    platform: ["Web", "Android", "IOS"],
    rolls: [
      "백오피스 기획 : 기여도 3%",
      "백오피스 풀스택 : 기여도 20%",
      "모바일 앱 백엔드 : 기여도 10%",
    ],
    results: [
      "코드 최적화를 통해, 엑셀 다운로드 시간 50% 단축",
      "오류 0 건의 동적 상세 페이지 구현",
      "자주 쓰이는 공통 함수 작성을 통해, 코드 중복 제거 및 팀원들의 업무 효율성 향상 시킴.",
    ],
  },
  {
    title: "상담사 가이드 2.0 구축, LG U+",
    period: "2023.01 ~ 2023.06 (6개월)",
    client: "LG U+",
    discription:
      "LGU+ 상담사들의 편리하고 효율적인 가이드를 위한 백오피스 구축",
    skills: [
      "JavaScript",
      "Java",
      "myBatis",
      "wepsquare",
      "mysql",
      "Spring boot",
    ],
    members: 7,
    platform: ["Web"],
    rolls: ["백오피스(백앤드 프론트엔드) (기여도 25%)"],
    results: [
      "직접 커스텀 달력 컴포넌트 구현 및 달력 일정을 엑셀로 변환 가능하게 하여 사용자 경험 향상 시킴.",
      "업무에 대한 admin 화면을 개발하여 팀원들의 업무 효율성을 향상시킴",
      "폴링 방식에서 웹소켓 방식으로 변경하여, 실시간 알림을 구현.FCP 30% 감소",
    ],
  },
  {
    title: "유료 구독 플랫폼 구축, LG U+",
    period: "2023.09 ~ 2023.12 (4개월)",
    client: "LG U+",
    discription:
      "LGU+ 구독서비스 유료구독 구성원들의단순/루틴을 효율적으로 관리하기 위한 백오피스 개선 및 개발",
    skills: [
      "JavaScript",
      "Java",
      "myBatis",
      "wepsquare",
      "mysql",
      "Spring boot",
    ],
    members: 10,
    platform: ["Web"],
    rolls: ["백오피스(백앤드 프론트엔드) (기여도 5%)"],
    results: [
      "업무에 대한 admin 화면을 개발하여 팀원들의 업무 효율성을 향상시킴",
    ],
  },
];

export const PROFILE: ProfileType = {
  name: "김효은",
  birth: "1995.05.20",
  university: "인천대학교 불어불문학 졸업",
};

export const COMPANY: CompanyType[] = [
  {
    company: "뱅가드랩",
    period: "2022.04 ~ 2024.03",
    discription: "프론트엔드 & 백엔드 개발 업무 수행",
  },
];

export const ACHEIVEMENTS: CompanyType[] = [
  {
    company: "인천대학교",
    period: "2021.08",
    discription: "과 수석 졸업",
  },
];

export const EDUCATION: EducationType[] = [
  {
    company: "그린 아카데미",
    title: "자바 & 스프링 프레임 워크 개발 양성과정",
    period: "2021.09.02 ~ 2022.01.27",
    totalDuation: 800,
    attendanceRate: 100,
  },
  {
    company: "그린 아카데미",
    title: "자바 기초 과정",
    period: "2021.08.14 ~ 2021.10.02",
    totalDuation: 39,
    attendanceRate: 100,
  },
];

export const CERTIFICATION: CompanyType[] = [
  {
    company: "대한상공회의소",
    period: "2021.04",
    discription: "컴퓨터 활용 능력 2급",
  },
  {
    company: "식품의약품안전처",
    period: "2021.03",
    discription: "맞춤형화장품조제관리사",
  },
  {
    company: "France Éducation International",
    period: "2020.12",
    discription: "프랑스어 Delf b2",
  },
];

export const TOY_PROJECTS: ToyProjectType[] = [
  {
    id: "comppi",
    img: "comppi.png",
    skills: ["React", "Typescript"],
    title: "반려 식물 키우기 모바일 웹",
    period: "2024.03 ~ 2024.09",
    members: 6,
    discription: "반려 식물을 재미있게 키우기 위한 웹앱 서비스",
  },
  {
    id: "portfolio",
    img: "portfolio.png",
    skills: ["React", "Typescript"],
    title: "포트폴리오 모바일 웹",
    period: "2024.10.21 ~ 2024.10.23",
    members: 1,
    discription: "나만의 포트폴리오 서비스",
  },
];

export const COMPPI: ProjectDetailType = {
  name: "COMPPI",
  period: "2024.03 ~ 2024.09",
  img: "logo.png",
  discription:
    "COMPPI는 '반려'를 의미하는 companion과 '식물'을 의미하는 plant를 결합한 단어로, 편안함을 상징하는 comfi의 의미를 더하여 편안하게 반려 식물을 키울 수 있는 서비스를 제공하는 웹앱 플랫폼입니다.이 플랫폼은 사용자에게 식물을 키우는 즐거움을 선사하기 위해 내 식물 관리, 식물 자랑 일지 관리, 식물 도감 관리 등 다양한 기능을 제공합니다.",
  link: [
    {
      img: "git",
      link: "https://gitfront.io/r/hyoeun/aD2uUgh6ogYY/comppi/",
    },
    {
      img: "doc",
      link: "https://docs.google.com/spreadsheets/d/1Lp2XPUWYgnMd21dZTY_jzxkJfuvCtVcX5FMxhZyhvjM/edit?usp=sharing",
    },
    {
      img: "figma",
      link: "https://www.figma.com/design/ab7G2ayYlOc3xYoMSQxreb/%EA%BC%BC%EC%82%90-%ED%8F%AC%ED%8F%B4-%EA%B3%B5%EC%9C%A0%EC%9A%A9?m=auto&t=3tr1RFT9wOL14Xhl-6",
    },
  ],
  platformInfo: [
    { title: "플랫폼", content: ["Web"] },
    {
      title: "총 인원",
      content: ["디자인 1", "프론트 1", "백엔드 2", "기획 1", "총 5명"],
    },
    {
      title: "역할",
      content: [
        "팀장",
        "서비스 기획 (기여도 50%)",
        "사용자 페이지 - 프론트엔드 (기여도 100%)",
      ],
    },
  ],
  skills: [
    { title: "언어", content: ["React", "Typescript", "Java"] },
    { title: "프레임워크", content: ["Spring Framework"] },
    { title: "IDE", content: ["Vs code"] },
    { title: "API", content: ["Swagger", "RESTful API"] },
    { title: "협업툴", content: ["Notion", "Slack", "Figma"] },
    { title: "빌드 도구", content: ["Gradle"] },
    { title: "배포", content: ["Vercel"] },
  ],
  post: [
    {
      link: "https://toltolhamtol.tistory.com/38",
      title: "로그인 로직 설정",
    },
    {
      link: "https://toltolhamtol.tistory.com/33",
      title: "무한 스크롤 도입기",
    },
    {
      link: "https://toltolhamtol.tistory.com/30",
      title: "redux-toolkit 도입기",
    },
    {
      link: "https://toltolhamtol.tistory.com/32",
      title: "코드 리팩토링 과정",
    },
    {
      link: "https://toltolhamtol.tistory.com/40",
      title: "코드 리팩토링 과정2",
    },
  ],
  settings: [
    {
      title: "프레임워크 - React",
      discription:
        "오락적 요소가 포함된 서비스 특성상 활동적인 이미지를 주기 위해 UI에 모션을 추가하고, Drawer, Swipe, Transition animation 등 다양한 특성을 가진 컴포넌트를 구현해야 했습니다. 이러한 요구를 충족하기 위해 다양한 라이브러리와 도구를 지원하는 React가 가장 적합하다고 판단하였습니다.",
    },
    {
      title: "스타일링 - styled-components, Material-UI",
      discription:
        "사용자의 행동에 따라 UI의 스타일이나 색상이 변하는 컴포넌트가 많기 때문에, 동적 스타일링을 쉽게 구현할 수 있는 styled-components가 적합하다고 판단했습니다. 또한, Material-UI는 Toggle Button, Modal, Drawer 등 다양한 컴포넌트를 제공하여 효율적으로 활용할 수 있어 선택하였습니다.",
    },
    {
      title: "라우팅 -  React-Router",
      discription:
        "React Router는 동적 라우팅을 지원하기에 화면 전환 라이브러리인 React Transition Group과 함께 사용하는 것이 효과적이라고 판단하였습니다.",
    },
    {
      title: "api 통신- axios, React-Query",
      discription:
        "Axios는 일관된 요청을 보내기 위한 작업, 혹은 캐싱이 필요 없는 요청을 할 때 사용하였고, React Query는 조회한 데이터를 자동으로 캐싱하고자 할 때 주로 활용을 하였습니다. ",
    },
    {
      title: "빌드 도구 -  webpack",
      discription:
        "프로젝트를 점차적으로 고도화 시킨다는 점을 고려했을 때, 다양한 파일 형식을 모듈로 취급하여 자산을 쉽게 관리할 수 있다는 점에서 효율적이라고 판단하였습니다.",
    },
    {
      title: "상태관리 -  Recoil",
      discription:
        "다른 상태관리에 비해 코드가 간결하고, 원자와 선택자로 나누어 상태를 모듈화 시킬 수 있다는 점, 그리고 마지막으로 Context APIi와 비교했을 때 필요한 컴포넌트만 렌더링을 시켜 성능 적인 측면에서도 효율적이라고 판단하였습니다.",
    },
    {
      title: "버전 관리 -  단일 브랜치 워크플로우",
      discription:
        "혼자서 작업을 하기 때문에 브랜치 관리가 필요하지 않다고 판단하였습니다.",
    },
  ],
  features: [
    {
      title: "react-transition-group​",
      subTitle: "화면 전환 애니메이션 도입",
      discription:
        "react-transition-group을 통해 TransitionGroup를 Routes 태그에 감싸 화면이 부드럽게 전환 되는 효과를 추가하였습니다.",
    },
    {
      title: "react-intersection-observer​",
      subTitle: "무한 스크롤 컴포넌트 구현",
      discription:
        "react-intersection-observer를 활용하여 무한 스크롤이 필요한 모든 화면에서 재 사용 할 수 있는 컴포넌트를 구현했습니다. 무한 스크롤 컴포넌트가 화면에 100% 보여지면 props를 통해 상위 컴포넌트에게 다음 페이지 조회 API를 요청할 수 있도록 구현하였습니다. 결과적으로 7개의 화면에서 재사용 되어 중복 코드를 줄여 유지 보수성을 향상시킬 수 있었습니다.",
    },
    {
      title: "Kakao​",
      subTitle: "카카오 공유하기, 카카오 Map 도입",
      discription:
        "카카오 api를 활용하여 게시글 내용을 카카오톡 친구에게 공유하기 기능과 프로필 정보 등록에서 위치 정보 설정 시 카카오 Map을 통해 주소 정보를 입력할 수 있는 기능을 도입하였습니다.",
    },
    {
      title: "openWeatheMap Api​",
      subTitle: "날씨 api 도입",
      discription:
        "프로필 정보의 위치정보에 기반하여 날씨, 최고기온, 최저기온, 현재 날씨를 알 수 있도록 openWeatherMap의 무료 api를 활용하였습니다. 프로필 위치정보가 없을 시엔 현재 위치를 기준으로 날씨 정보를 가져오도록 구현하였습니다.",
    },
    {
      title: "react-swiper​",
      subTitle: "터치 스와이프 컴포넌트 도입",
      discription:
        "react-swiper를 활용하여 재사용 가능한 swipe 컴포넌트를 만들어 터치로 하나씩 넘기는 스와이프 컴포넌트, 터치로 overflow 된 컴포넌트를 확인 할 수 있는 컴포넌트를 구현하였습니다. 라이브러리를 도입한 덕분에 4가지 종류의 재사용 가능한 스와이프 컴포넌트를 하루만에 구현할 수 있었습니다.",
    },
    {
      title: "Mui, framer-motion​",
      subTitle: "화면 전환 애니메이션 도입",
      discription:
        "Mui의 Drawer컴포넌트와 framer-motion을 이용하여 이중 Drawer 컴포넌트를 구현하였습니다. 특정 게시글의 댓글 모양 아이콘을 클릭하면 그 게시글에 대한 댓글 Drawer가 나오는데, 이 첫번 째 Drawer은 framer-motion을 이용하여 아래서 위로 컴포넌트가 올라오도록 motion을 추가하였습니다. 그리고 이 Drawer에서 댓글 input 태그를 클릭하면 framer-motion으로 만든 컴포넌트보다 zindex가 높은 Mui Drawer가 올라 올 수 있도록 만들었습니다. 이를 통해, 댓글 수정.등록 요청 api와 댓글 조회 api가 분리되어 사용될 수 있도록 컴포넌트를 구현하였습니다. 결과적으로 기능이 분리된 후, 각 기능별 모듈화가 이루어져 코드 가독성과 유지 보수성을 향상 시킬 수 있었습니다. ",
    },
    {
      title: "LCP 개선​",
      subTitle: "확장자 png > webP 변경, img 태그에 lazy loading 속성 추가",
      discription:
        "LCP 개선을 위해 ​브라우저 호환성과 이미지 품질을 유지하면서 크기를 줄이기 위해​ 용량이 큰 고화질의 캐릭터 이미지의 확장자를 webP로 변경하였습니다. ​또 메인 Swipe 컴포넌트 내에 있는 캐릭터 이미지 태그에 lazy loading 속성을 추가하여 컴포넌트가 뷰포트에 보여질 때 로딩이 되게 하였습니다. ​결과적으로 LCP가 35.2s 에서 19.8s로 개선되었습니다.",
    },
    {
      title: "Speed Index 개선​",
      subTitle:
        "Suspense, React.lazy() 추가​, 렌더링 비용이 큰 컴포넌트에 React memo추가",
      discription:
        "Suspense와 React.lazy를 활용하여 처음 화면에 로드 시 필요하지 않는 컴포넌트는 비동기적으로 로드될 수 있도록 하였습니다.​ 또 렌더링 하는데 많은 시간이 드는 하위 컴포넌트에는 React memo를 적용하여 불필요한 렌더링을 방지하도록 하였습니다. ​결과적으로 Speed Index 가 8.6s에서 3.9s로 개선되었습니다.",
    },
  ],
  imgs: [
    "frame1.png",
    "frame2.png",
    "frame3.png",
    "frame4.png",
    "frame5.png",
    "frame6.png",
    "frame7.png",
    "frame8.png",
    "frame9.png",
    "frame10.png",
    "frame11.png",
    "frame12.png",
    "frame13.png",
    "frame14.png",
    "frame15.png",
    "frame16.png",
  ],
};

export const PORTFOLIO: ProjectDetailType = {
  name: "PORTFOLIO",
  period: "2024.10.21 ~ 2024.10.23",
  img: "logo3.png",
  discription: "나만의 포트폴리오 반응형 웹사이트 입니다.",

  platformInfo: [
    { title: "플랫폼", content: ["Web"] },
    { title: "총 인원", content: ["개인​"] },
    { title: "역할", content: ["프론트", "기획", "퍼블리싱", "디자인"] },
  ],
  skills: [
    { title: "언어", content: ["React", "Typescript"] },
    { title: "IDE", content: ["Vs code"] },
    { title: "배포", content: ["Vercel"] },
  ],
  settings: [
    {
      title: "프레임워크 - React",
      discription:
        "다양한 라이브러리를 활용하여 UI를 만들기 위해 React를 선택하였습니다.",
    },
    {
      title: "스타일링 - styled-components, Material-UI",
      discription:
        "동적 스타일링을 쉽게 구현할 수 있는 styled-components와 다양한 컴포넌트를 가진 Material-UI를 활용하였습니다.",
    },

    {
      title: "빌드 도구 -  webpack",
      discription:
        "따로 서버 없이 진행하는 프로젝트이기에 cSS, 이미지, 폰트 파일와 같은 자산을 자동으로 관리할 수 있는 webpack을 선택하였습니다.",
    },

    {
      title: "버전 관리 -  단일 브랜치 워크플로우",
      discription:
        "혼자서 작업을 하기 때문에 브랜치 관리가 필요하지 않다고 판단하였습니다.",
    },
  ],

  link: [
    {
      img: "git",
      link: "",
    },
  ],

  features: [
    {
      title: "react-swiper​",
      subTitle: "터치 스와이프 컴포넌트 도입",
      discription:
        "react-swiper를 활용하여 재사용 가능한 swipe 컴포넌트를 만들어 터치로 하나씩 넘기는 스와이프 컴포넌트, 터치로 overflow 된 컴포넌트를 확인 할 수 있는 컴포넌트를 구현하였습니다. 라이브러리를 도입한 덕분에 2가지 종류의 재사용 가능한 스와이프 컴포넌트를 하루만에 구현할 수 있었습니다.",
    },
    {
      title: "Mui​",
      subTitle: "앱 네비게이션 바",
      discription:
        "모바일로 사이트를 이용하는 경우, Mui를 활용한 Navigation 컴포넌트를 통해 메뉴를 선택할 수 있도록 구현하였습니다.",
    },
  ],
};
export const COLOR_SELECT = [
  "#FFA4A4",
  "#FFF3B7",
  "#B2EBDA",
  "#00C398",
  "#E1F5FE",
  "#79C9ED",
  "#DFC0ED",
  "#C26CC3",
];
