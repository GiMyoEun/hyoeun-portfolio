/*
    작성일 : 2024.10.21
    파일명 : Footer.tsx
    설명 : 푸터
*/
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Wrap>
        <FooterBackground />
        <InnerDiv>created by hyoeun Kim.</InnerDiv>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 800;
  position: fixed;
`;

const FooterBackground = styled.div`
  position: absolute;
  z-index: -1;
  background: white;
  -webkit-backdrop-filter: saturate(150%) blur(32px);
  backdrop-filter: saturate(150%) blur(32px);
  height: 100%;
  width: 100%;
`;

const InnerDiv = styled.div`
  max-width: 1060px;
  padding-left: 12px;
  width: 90%;
  height: 60px;
  width: 1060px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
`;
