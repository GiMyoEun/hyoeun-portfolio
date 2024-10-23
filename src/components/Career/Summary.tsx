import styled from "styled-components";

/*
    작성일 : 2024.10.21
    파일명 : Summary.tsx
    설명 : 커리어 > 요약
*/
export default function Summary() {
  return (
    <DiscriptionDiv>
      <Title>경력</Title>
      <Discription>
        {`2022.04 월부터 2024.03 월 까지 [ 뱅가드랩 ] 을 근무하면서`}
        <br />
        {`3개의 프로젝트를 성공적으로 수행하였습니다.`}
      </Discription>
      <DiscriptionMobile>
        2022.04 월부터 2024.03 월 까지 [ 뱅가드랩 ] 을 근무하면서, 3개의
        프로젝트를 성공적으로 이수하였습니다.
      </DiscriptionMobile>
    </DiscriptionDiv>
  );
}

const DiscriptionDiv = styled.div`
  display: flex;
  width: 100%;
  place-content: space-between;
  @media (max-width: 650px) {
    display: block;
    width: auto;
  }
`;

const Discription = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #7b7b7b;

  @media (max-width: 650px) {
    display: none;
  }
`;

const DiscriptionMobile = styled.div`
  width: 100%;
  display: none;
  padding-top: 12px;
  padding-right: 12px;

  @media (max-width: 650px) {
    display: block;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #7b7b7b;
  }
`;

const Title = styled.span`
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
