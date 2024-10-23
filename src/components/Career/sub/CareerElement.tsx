/*
    작성일 : 2024.10.21
    파일명 : CareerElement.tsx
    설명 : 나의 커리어 > 리스트 > 커리어
*/

import styled from "styled-components";
import { getGenerateKey } from "../../../common/common";
import { CareerElementType } from "../../../common/type";

export default function CareerElement({
  careerObj,
  mt,
  onClick,
}: {
  careerObj: CareerElementType;
  mt: string;
  onClick: () => void;
}) {
  return (
    <Div $mt={mt}>
      <Title onClick={onClick}>{careerObj.title}</Title>
      <Period>{careerObj.period}</Period>
      <Skills>
        {careerObj.skills.map((elem) => {
          return (
            <>
              <Skill key={getGenerateKey()} skill={elem} />
            </>
          );
        })}
      </Skills>
    </Div>
  );
}

const Skill = ({ skill }: { skill: string }) => {
  return (
    <>
      <Element>{skill}</Element>
    </>
  );
};

const Skills = styled.div`
  right: 0px;
  align-self: center;

  display: flex;

  justify-content: flex-end; /* Skills를 오른쪽 정렬 */
  @media (max-width: 650px) {
    justify-content: left;
  }
`;
interface DivProps {
  $mt: string; // margin-top prop의 타입 정의
}

const Div = styled.div<DivProps>`
  margin-top: ${({ $mt }) => $mt}; // prop을 사용하여 margin-top 설정
  justify-content: space-between;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.div`
  /* 통합 복지 플랫폼 구축, Ezl */

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #000000;

  @media (max-width: 650px) {
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    color: #7b7b7b;
  }
`;

const Period = styled.div`
  /* 통합 복지 플랫폼 구축, Ezl */

  /* 2023.08 ~ 2023.12 (4개월) */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 21px;
  display: flex;
  align-items: center;

  color: #7b7b7b;
  place-content: center;
  @media (max-width: 650px) {
    font-size: 12px;
    justify-content: flex-end;
  }
`;
const Element = styled.div`
  padding-right: 9px;
  padding-left: 9px;
  border-radius: 13%;
  background: #f1f1f1;
  margin-right: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: black;
  height: 21px;
`;
