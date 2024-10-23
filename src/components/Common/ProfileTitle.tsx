/*
    작성일 : 2024.10.21
    파일명 : ProfileTitle.tsx
    설명 : 소개 > 페이지 내 제목
*/
import styled from "styled-components";

export default function ProfileTitle({
  title,
  mt = "0px",
  icon,
}: {
  title: string;
  mt?: string;
  icon?: React.ReactElement;
}) {
  return (
    <>
      {icon}
      <Title $mt={mt}>{title}</Title>
    </>
  );
}

const Title = styled.h2<{ $mt: string }>`
  /* 김효은 */

  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  place-content: center;
  margin: 0px;
  margin-top: ${({ $mt }) => $mt};
  color: #000000;
  @media (max-width: 650px) {
    font-size: 36px;
  }
`;
