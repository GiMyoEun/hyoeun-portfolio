import styled from "styled-components";
import { COMPPI } from "../../common/data";
import Line from "../Common/Line/Line";
import ProfileTitle from "../Common/ProfileTitle";
import { Birth } from "../Home/Profile";
import ProfileContainer from "../Common/Container/ProfileContainer";
import PortfolioContainer from "../Common/Container/PortfolioContainer";
import PortfolioKeyValInfo from "../Common/Contents/PortfolioKeyValInfo";
import { getGenerateKey } from "../../common/common";
import { ProjectDetailType } from "../../common/type";

/*
    작성일 : 2024.10.22
    파일명 : Comppi.tsx
    설명 : 토이 프로젝트 > 꼼삐 > 요약
    
*/
export default function Summary({ obj }: { obj: ProjectDetailType }) {
  return (
    <>
      <ProfileTitle title={obj.name} />
      <Birth>{obj.period}</Birth>
      <Line />
      <Wrapper>
        {obj.name === "COMPPI" && (
          <Img src={require(`/src/assets/images/${obj.img}`)} alt="logo" />
        )}
        {obj.name !== "COMPPI" && (
          <Img2 src={require(`/src/assets/images/${obj.img}`)} alt="logo" />
        )}
        <Discription>{obj.discription}</Discription>
      </Wrapper>
      <PortfolioContainer mt="50px" padding="30px 0px 30px 40px">
        <>
          {obj.platformInfo.map((elem) => {
            return (
              <PortfolioKeyValInfo
                background="#F2F2F2"
                key={getGenerateKey()}
                title={elem.title}
                contents={elem.content}
              />
            );
          })}
        </>
      </PortfolioContainer>
      <PortfolioContainer mt="50px" padding="30px 0px 30px 40px">
        <>
          {obj.skills.map((elem) => {
            return (
              <PortfolioKeyValInfo
                background="#F2F2F2"
                key={getGenerateKey()}
                title={elem.title}
                contents={elem.content}
              />
            );
          })}
        </>
      </PortfolioContainer>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 650px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 111px;
  height: 31px;
`;

const Img2 = styled.img`
  width: 111px;
  height: 112px;
`;

const Discription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
  text-align: left;
  margin-left: 75px;
  @media (max-width: 650px) {
    margin: 0px;
    margin-top: 15px;
    padding: 15px;
  }
`;
