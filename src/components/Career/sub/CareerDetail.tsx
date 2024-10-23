/*
    작성일 : 2024.10.21
    파일명 : CareerDetail.tsx
    설명 : 나의 커리어 > 경력 상세
*/
import React, { forwardRef } from "react";
import styled from "styled-components";
import { CareerDetailType } from "../../../common/type";
import { getGenerateKey } from "../../../common/common";
import { StyledSlide } from "../../Common/Contents/PortfolioKeyValInfo";
import HashTagSwiper from "../../Common/Swiper/HashTagSwiper";

export const CareerDetail = forwardRef<
  HTMLDivElement,
  { detailObj: CareerDetailType }
>(({ detailObj }, ref) => {
  return (
    <Wrap ref={ref}>
      <Title>{detailObj.title}</Title>
      <Period>{detailObj.period}</Period>
      <Discription>{detailObj.discription}</Discription>
      <Line />
      <P>고객사명 : {detailObj.client}</P>
      <P>
        <Name> 플랫폼 :</Name>
        <HashTagSwiper>
          {detailObj.platform.map((elem) => (
            <StyledSlide key={getGenerateKey()}>
              <Span key={getGenerateKey()}>{elem}</Span>
            </StyledSlide>
          ))}
        </HashTagSwiper>
      </P>
      <P>개발 인원 : {detailObj.members}명</P>
      <P>
        <Name>사용 기술 :</Name>

        <HashTagSwiper>
          {detailObj.skills.map((skill) => (
            <StyledSlide key={getGenerateKey()}>
              <Span key={getGenerateKey()}>{skill}</Span>
            </StyledSlide>
          ))}
        </HashTagSwiper>
      </P>
      <Line />
      <SubTitle>역할</SubTitle>
      <HashTagSwiper>
        {detailObj.rolls.map((roll) => (
          <StyledSlide key={getGenerateKey()}>
            <P>{roll}</P>
          </StyledSlide>
        ))}
      </HashTagSwiper>
      <Line />
      <SubTitle>성과</SubTitle>

      {detailObj.results.map((result, index) => (
        <P $color="black" key={getGenerateKey()}>
          {index + 1}. {result}
        </P>
      ))}
    </Wrap>
  );
});
const Name = styled.div`
  white-space: nowrap;
`;
const Span = styled.div`
  background: #f1f1f1;
  padding-right: 9px;
  padding-left: 9px;
  border-radius: 13%;
  margin-right: 20px;
`;

const Wrap = styled.div`
  /* Rectangle 4 */
  margin-top: 60px;
  margin-bottom: 60px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;

  width: auto;

  background: #f8f8f8;
  height: max-content;
  border-radius: 20px;
`;

const Title = styled.div`
  /* 통합 복지 플랫폼 구축 */

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;

  color: #000000;
  @media (max-width: 650px) {
    font-size: 20px;
    text-align: left;
  }
`;

const Period = styled.div`
  margin-top: 10px;
  /* 2023.08 ~ 2023.12 (4개월) */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #2fbcc9;
`;

const Discription = styled.div`
  text-align: left;
  /* 방문없이 교통부터 유통까지 하나로 이동하는 전국 최초 통합 복지 플랫폼 */
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #7b7b7b;
`;

const Line = styled.div`
  /* Line 5 */

  margin-top: 40px;
  margin-bottom: 35px;

  border: 0.5px solid #2fbcc9;
`;

const P = styled.div<{ $color?: string }>`
  color: ${({ $color }) => $color || "#7b7b7b"};

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  /* or 156% */
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  width: 100%;
  margin-top: 5px;
  text-align: left;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

const SubTitle = styled.div`
  /* 역할 백오피스 기획 : 기여도 3% 백오피스 풀스택 : 기여도 20% 모바일 앱 백엔드 : 기여도 10% */

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  /* or 125% */
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #000000;
`;
