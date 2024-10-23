import { COMPPI } from "../common/data";
import Line from "../components/Common/Line/Line";
import ProfileTitle from "../components/Common/ProfileTitle";
import Features from "../components/Comppi/Features";
import RelatedDoc from "../components/Comppi/RelatedDoc";
import RelatedPost from "../components/Comppi/RelatedPost";
import Screens from "../components/Comppi/Screens";
import Settings from "../components/Comppi/Settiings";
import Summary from "../components/Comppi/Summary";
import { Birth } from "../components/Home/Profile";

/*
    작성일 : 2024.10.22
    파일명 : Comppi.tsx
    설명 : 토이 프로젝트 > 꼼삐
*/
export default function Comppi() {
  return (
    <>
      <Summary obj={COMPPI} />
      {COMPPI.imgs && <Screens imgs={COMPPI.imgs} />}
      <RelatedDoc linkArr={COMPPI.link} />
      {COMPPI.settings && <Settings settings={COMPPI.settings} />}
      <Features features={COMPPI.features} />
      {COMPPI.post && <RelatedPost postArr={COMPPI.post} />}
    </>
  );
}
