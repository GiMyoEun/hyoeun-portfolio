import styled from "styled-components";
import { getGenerateKey } from "../../common/common";
import { CERTIFICATION } from "../../common/data";
import ProfileContainer from "../Common/Container/ProfileContainer";
import ProfileTitle from "../Common/ProfileTitle";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

/*
    작성일 : 2024.10.22
    파일명 : Certification.tsx
    설명 : 소개 > 프로필 > 자격증
*/
export default function Certification() {
  return (
    <>
      <ProfileTitle mt="120px" title="자격증" />
      <ProfileContainer
        jc="unset"
        padding="30px 0px 30px 40px"
        key={getGenerateKey()}
        mt="30px"
      >
        <>
          {CERTIFICATION.map((elem) => {
            return (
              <InnerDiv key={getGenerateKey()}>
                <LeftDiv>
                  <AiOutlineSafetyCertificate size="3em" />
                </LeftDiv>
                <RightDiv>
                  <Title>{elem.discription}</Title>
                  <Discription>{`${elem.discription} ${elem.period}`}</Discription>
                  <Line />
                </RightDiv>
              </InnerDiv>
            );
          })}
        </>
      </ProfileContainer>
    </>
  );
}
const Line = styled.div`
  /* Line 9 */

  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;

  border-top: 1px solid #000000;
`;

const InnerDiv = styled.div`
  display: flex;
`;
const LeftDiv = styled.div`
  align-content: center;
  margin-right: 30px;
`;
const RightDiv = styled.div`
  width: 100%;
`;

const Title = styled.p`
  /* 컴퓨터 활용 능력 2급 */
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin: 0px;
  display: flex;
  align-items: center;

  color: #000000;
  @media (max-width: 650px) {
    font-size: 20px;
    text-align: left;
  }
`;
const Discription = styled.p`
  /* 대한 상공 회의소 2021.04 */
  margin: 0px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  display: flex;
  align-items: center;

  color: black;
  @media (max-width: 650px) {
    font-size: 12px;
    text-align: left;
  }
`;
