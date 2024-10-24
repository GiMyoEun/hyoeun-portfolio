/*
    작성일 : 2024.10.22
    파일명 : ProfilePTag.tsx
    설명 : 소개 > 프로필 > 프로필 내 내용
*/

import styled from "styled-components";

export default function ProfilePTag({
  discription,
  margin = "0px 0px 0px 0px",
}: {
  discription: string;
  margin: string;
}) {
  return (
    <>
      <P $margin={margin}>{discription}</P>
    </>
  );
}

const P = styled.p<{ $margin: string }>`
  font-style: normal;
  place-content: center;
  //   margin: 0px;
  //   margin-top: 5px;
  align-self: center;
  height: min-content;
  font-weight: 400;
  font-size: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  margin: ${({ $margin }) => $margin};
  color: black;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
