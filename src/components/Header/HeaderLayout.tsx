import styled from "styled-components";

/*
    작성일 : 2024.10.21
    파일명 : Header.tsx
    설명 : 헤더의 레이아웃
*/
export default function HeaderLayout({
  children,
}: {
  children: React.ReactElement | React.ReactNode;
}) {
  return (
    <>
      <Wrap>
        <HeaderBackground />
        <OuterDiv>{children}</OuterDiv>
      </Wrap>
    </>
  );
}

const Wrap = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 800;
  position: fixed;
`;

const HeaderBackground = styled.div`
  position: absolute;
  z-index: -1;
  background: hsla(0, 0%, 100%, 0.88);
  -webkit-backdrop-filter: saturate(150%) blur(32px);
  backdrop-filter: saturate(150%) blur(32px);
  height: 100%;
  width: 100%;
`;
const OuterDiv = styled.div`
  max-width: 1060px;
  width: 90%;
  height: 60px;
  width: 1060px;
  margin: 0 auto;
  display: flex;
`;
