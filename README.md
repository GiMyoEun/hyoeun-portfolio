# 패키지 구조

my-app/
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── assets/ // 정적 자산 (이미지, 폰트 등)
├── src/
│ ├── components/ // 재사용 가능한 컴포넌트
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ ├── Button.css
│ │ │ └── index.ts // 컴포넌트의 export
│ │ └── ...
│ ├── pages/ // 페이지 컴포넌트
│ │ ├── Home.tsx
│ │ ├── About.tsx
│ │ └── ...
│ ├── hooks/ // 커스텀 훅
│ │ ├── useFetch.ts
│ │ └── ...
│ ├── context/ // Context API 관련 파일
│ │ ├── AuthContext.tsx
│ │ └── ...
│ ├── routes/ // 라우트 설정
│ │ └── AppRoutes.tsx
│ ├── styles/ // 전역 스타일 및 테마 설정
│ │ ├── global.css
│ │ └── theme.ts
│ ├── utils/ // 유틸리티 함수
│ │ ├── api.ts
│ │ └── ...
│ ├── App.tsx
│ ├── index.tsx
│ └── reportWebVitals.ts
├── package.json
└── tsconfig.json // TypeScript 설정 (TypeScript를 사용하는 경우)
