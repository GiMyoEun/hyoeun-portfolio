import React, { useRef } from "react";
import styled from "styled-components";
import { getGenerateKey } from "../../common/common";
import { CAREER_DETAIL_LIST, CAREER_LIST } from "../../common/data";
import CareerElement from "./sub/CareerElement";
import { CareerDetail } from "./sub/CareerDetail";

/*
    작성일 : 2024.10.21
    파일명 : CareerList.tsx
    설명 : 나의 커리어 > 리스트
*/
export default function CareerList() {
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]); // CareerDetail 요소를 참조하기 위한 배열

  const onClickElement = (index: number) => {
    // 해당 인덱스의 CareerDetail로 스크롤 이동
    detailRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {CAREER_LIST.map((obj, index) => {
        return (
          <CareerElement
            onClick={() => {
              onClickElement(index);
            }}
            key={getGenerateKey()}
            careerObj={{
              period: obj.period,
              title: obj.title,
              skills: obj.skills,
            }}
            mt={index === 0 ? "70px" : "60px"}
          />
        );
      })}
      <Title>경력 상세</Title>
      {CAREER_DETAIL_LIST.map((obj, idx) => {
        return (
          <CareerDetail
            key={getGenerateKey()}
            detailObj={obj}
            ref={(el: HTMLDivElement | null) => (detailRefs.current[idx] = el)} // 각 CareerDetail 요소를 ref 배열에 저장
          />
        );
      })}
    </>
  );
}

const Title = styled.span`
  margin-top: 120px;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (max-width: 650px) {
    font-size: 36px;
  }
`;
