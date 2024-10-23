/*
    작성일 : 2024.10.21
    파일명 : Home.tsx
    설명 : 소개
*/
import { ACHEIVEMENTS, COMPANY } from "../common/data";
import Company from "../components/Home/Company";
import Education from "../components/Home/Education";
import Profile from "../components/Home/Profile";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { CgAwards } from "react-icons/cg";
import Certification from "../components/Home/Certification";

export default function Home() {
  return (
    <>
      <Profile />
      <Company
        title="이력"
        arr={COMPANY}
        icon={
          <>
            <PiBuildingOfficeThin size="3em" />
          </>
        }
      />

      <Education />
      <Company
        title="수상"
        arr={ACHEIVEMENTS}
        icon={
          <>
            <CgAwards size="3em" />
          </>
        }
      />
      <Certification />
    </>
  );
}
