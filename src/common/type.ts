import { SlideProps } from "@mui/material";

/*
    작성일 : 2024.10.21
    파일명 : type.ts
    설명 : 사용되는 타입
*/
export type CareerElementType = {
  title: string;
  period: string;
  skills: string[];
};

export type ProfileType = {
  name: string;
  birth: string;
  university: string;
};

export type CareerDetailType = {
  title: string;
  period: string;
  discription: string;
  client: string;
  platform: string[];
  members: number;
  skills: string[];
  rolls: string[];
  results: string[];
};

export type CompanyType = {
  discription: string;
  company: string;
  period: string;
};

export type EducationType = {
  company: string;
  title: string;
  period: string;
  totalDuation: number;
  attendanceRate: number;
};

export type ToyProjectType = {
  id: string;
  img: string;
  skills: string[];
  title: string;
  period: string;
  members: number;
  discription: string;
};

export type ProjectDetailType = {
  name: string;
  period: string;
  discription: string;
  img: string;

  platformInfo: SkillsType[];
  skills: SkillsType[];
  link: LinkType[];
  post?: PostType[];
  settings?: SettingType[];
  features: FeaturesType[];
  imgs?: string[];
};

export type FeaturesType = {
  title: string;
  subTitle: string;
  discription: string;
};

export type SettingType = {
  title: string;
  discription: string;
};
export type PostType = {
  title: string;
  link: string;
};
export type SkillsType = { title: string; content: string[] };
export type LinkType = {
  img: string;
  link: string;
};
