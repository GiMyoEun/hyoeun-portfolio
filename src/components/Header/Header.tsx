/*
    작성일 : 2024.10.21
    파일명 : Header.tsx
    설명 : 헤더
*/

import HeaderLayout from "./HeaderLayout";
import styled from "styled-components";
import PcNav from "./sub/PcNav";
import MobileNav from "./sub/MobileNav";

export default function Header() {
  return (
    <>
      <HeaderLayout>
        <Logo>HYO EUN'S</Logo>
        <PcNav />
        <MobileNav />
      </HeaderLayout>
      <Padding />
    </>
  );
}

const Logo = styled.div`
  /* Hyo Eun’s */
  padding-left: 12px;
  align-content: center;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;

  color: black;
`;
const Padding = styled.div`
  height: 60px;
`;
