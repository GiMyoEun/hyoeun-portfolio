/*
    작성일 : 2024.10.22
    파일명 : ProjectList.tsx
    설명 : 토이 프로젝트 > 프로젝트 목록
*/
import styled from "styled-components";
import { TOY_PROJECTS } from "../../common/data";
import ProjectElement from "./sub/ProjectElement";
import { getGenerateKey } from "../../common/common";
import { useNavigate } from "react-router-dom";

export default function ProjectList() {
  const navigate = useNavigate();
  return (
    <Wrap>
      {TOY_PROJECTS.map((elem, index) => {
        return (
          <>
            <ProjectElement
              margin={index === 0 ? "0px 0px 0px 0px" : "0px 0px 0px 10px"}
              obj={elem}
              onClick={() => {
                navigate(elem.id);
              }}
              key={getGenerateKey()}
            />
          </>
        );
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  place-items: center;
  grid-template-columns: 1fr 1fr;

  display: grid;
  @media (max-width: 650px) {
    grid-template-columns: 1fr; /* 모바일에서는 1열로 설정 */
  }
`;
