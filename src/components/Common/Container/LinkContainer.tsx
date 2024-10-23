import styled from "styled-components";
import { LinkType } from "../../../common/type";
import { getGenerateKey } from "../../../common/common";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaFigma } from "react-icons/lia";

/*
    작성일 : 2024.10.21
    파일명 : LinkContainer.tsx
    설명 : 토이 프로젝트 > 상세 페이지 링크 컨테이너
*/
export default function LinkContainer({ linkArr }: { linkArr: LinkType[] }) {
  const getIcons = (img: string) => {
    if (img === "git") {
      return <FaGithub size="3em" />;
    } else if (img === "figma") {
      return <LiaFigma size="3em" />;
    } else if (img === "doc") {
      return <IoDocumentTextOutline size="3em" />;
    } else {
      return <></>;
    }
  };

  return (
    <Wrap>
      {linkArr.map((elem) => {
        return (
          <Component
            onClick={() => {
              window.open(elem.link, "_blank");
            }}
            key={getGenerateKey()}
          >
            {getIcons(elem.img)}
            {/* <Go>바로가기</Go> */}
          </Component>
        );
      })}
    </Wrap>
  );
}

const Go = styled.div`
  /* Rectangle 28 */
  margin-top: 30px;
  width: 107px;
  align-content: center;
  text-align: -webkit-center;
  height: 34px;

  background: #ffffff;
  border-radius: 50px;
  @media (max-width: 650px) {
    width: 50px;
    height: 20px;
    margin-top: 5px;
    font-size: 8px;
  }
`;

const Wrap = styled.div`
  margin-top: 50px;

  display: flex;
  padding: 15px;
  text-align: -webkit-center;
  justify-content: space-between;
  place-content: center;
  column-gap: 20px;
`;

const Component = styled.div`
  /* Rectangle 25 */

  width: 25%;

  aspect-ratio: 1; /* 1:1 비율 */
  align-content: center;

  background: #f2f2f2;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;
