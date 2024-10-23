/*
    작성일 : 2024.10.22
    파일명 : Summary.tsx
    설명 : 토이 프로젝트 > 프로젝트 목록
*/

import Line from "../Common/Line/Line";
import ProfileTitle from "../Common/ProfileTitle";
import ProjectList from "./ProjectList";

export default function Summary() {
  return (
    <>
      <ProfileTitle title="토이 프로젝트 목록" />
      <Line />
      <ProjectList />
    </>
  );
}
