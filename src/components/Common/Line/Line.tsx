import styled from "styled-components";

/*
    작성일 : 2024.10.22
    파일명 : Line.tsx
    설명 : 공통 선 컴포넌트
*/
export default function Line() {
  return (
    <>
      <LineWrap>
        <LineDiv />
      </LineWrap>
    </>
  );
}

const LineWrap = styled.div`
  width: 100%;
  display: flex;
  place-content: center;
`;
const LineDiv = styled.div`
  /* Line 8 */

  margin-top: 30px;
  margin-bottom: 30px;
  width: 50px;

  place-contents: center;

  border: 1px solid #000000;
`;
