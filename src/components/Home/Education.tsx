import styled from "styled-components";
import { getGenerateKey } from "../../common/common";
import { EDUCATION } from "../../common/data";
import ProfileContainer from "../Common/Container/ProfileContainer";
import ProfilePTag from "../Common/Contents/ProfilePTag";
import ProfileTitle from "../Common/ProfileTitle";
import { MdCastForEducation } from "react-icons/md";

/*
    작성일 : 2024.10.22
    파일명 : Education.tsx
    설명 : 소개 > 교육
*/
export default function Education() {
  return (
    <>
      <ProfileTitle mt="120px" title="교육" />
      {EDUCATION.map((elem) => {
        return (
          <ProfileContainer
            padding="30px 0px 30px 0px"
            key={getGenerateKey()}
            mt="30px"
          >
            <>
              <ProfilePTag margin="0px 0px 10px 0px" discription={elem.title} />
              <MdCastForEducation size="3em" />
              <ProfilePTag
                margin="10px 0px 5px 0px"
                discription={elem.company}
              />
              <ProfilePTag margin="0px 0px 0px 0px" discription={elem.period} />
              <ContainerInnerWrap>
                <Div>{elem.totalDuation}시간</Div>
                <Div>{elem.attendanceRate}% 출석</Div>
              </ContainerInnerWrap>
            </>
          </ProfileContainer>
        );
      })}
    </>
  );
}

const ContainerInnerWrap = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Div = styled.div`
  /* 800 시간 */

  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  place-self: center;
  color: #7b7b7b;
  @media (max-width: 650px) {
    font-size: 32px;
  }
`;
