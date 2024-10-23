/*
    작성일 : 2024.10.21
    파일명 : Profile.tsx
    설명 : 소개 > 프로필
*/
import styled from "styled-components";
import ProfileTitle from "../Common/ProfileTitle";
import { PROFILE } from "../../common/data";
import { IoSchool } from "react-icons/io5";
import ProfileContainer from "../Common/Container/ProfileContainer";
import ProfilePTag from "../Common/Contents/ProfilePTag";
import Line from "../Common/Line/Line";

export default function Profile() {
  return (
    <>
      <ProfileTitle title={PROFILE.name} />
      <Birth>{PROFILE.birth}</Birth>
      <Line />
      <ProfileContainer padding="30px 0px 30px 0px">
        <>
          <IoSchool size="3em" />
          <ProfilePTag
            discription={PROFILE.university}
            margin="5px 0px 0px 0px"
          />
        </>
      </ProfileContainer>
    </>
  );
}

export const Birth = styled.div`
  /* 1995.05.20 */
  margin-top: 5px;
  place-content: center;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #7b7b7b;
`;
