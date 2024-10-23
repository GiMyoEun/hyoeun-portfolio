/*
    작성일 : 2024.10.21
    파일명 : AppRoutes.tsx
    설명 : 라우터
*/
import { Routes, Route } from "react-router-dom";
import Career from "../pages/Career";
import styled from "styled-components";
import Home from "../pages/Home";
import ToyProject from "../pages/ToyProject";
import Comppi from "../pages/Comppi";
import Portfolio from "../pages/Portfolio";

export default function AppRoutes() {
  return (
    <>
      <Div>
        <OuterDiv>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/projects" element={<ToyProject />} />
            <Route path="/projects/comppi" element={<Comppi />} />
            <Route path="/projects/portfolio" element={<Portfolio />} />
          </Routes>
        </OuterDiv>
      </Div>
    </>
  );
}

const Div = styled.main`
  overflow-x: hidden;
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  -webkit-box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
`;

const OuterDiv = styled.div`
  max-width: 1060px;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
  @media (max-width: 650px) {
    width: 90%;
  }
`;
