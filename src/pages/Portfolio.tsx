import styled from "styled-components";
import { PORTFOLIO } from "../common/data";
import Line from "../components/Common/Line/Line";
import ProfileTitle from "../components/Common/ProfileTitle";
import Features from "../components/Comppi/Features";
import RelatedDoc from "../components/Comppi/RelatedDoc";
import Settings from "../components/Comppi/Settiings";
import Summary from "../components/Comppi/Summary";
import { Birth } from "../components/Home/Profile";

export default function Portfolio() {
  return (
    <>
      <Summary obj={PORTFOLIO} />

      <RelatedDoc linkArr={PORTFOLIO.link} />
      {PORTFOLIO.settings && <Settings settings={PORTFOLIO.settings} />}
      <Features features={PORTFOLIO.features} />
      <H />
    </>
  );
}

const H = styled.div`
  height: 65px;
`;
