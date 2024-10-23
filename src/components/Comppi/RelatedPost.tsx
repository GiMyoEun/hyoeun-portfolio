/*
    작성일 : 2024.10.22
    파일명 : RelatedPost.tsx
    설명 : 토이 프로젝트 > 상세 페이지 게시글 컴포넌트
    
*/

import styled from "styled-components";
import { PostType } from "../../common/type";
import ProfileTitle from "../Common/ProfileTitle";
import BasicSwiper from "../Common/Swiper/BasicSwiper";
import { SwiperSlide } from "swiper/react";
import { SlArrowRight } from "react-icons/sl";
import { getGenerateKey } from "../../common/common";
import { COLOR_SELECT } from "../../common/data";

export default function RelatedPost({ postArr }: { postArr: PostType[] }) {
  return (
    <>
      <TitleWrapper>
        <TitleInnerWrapper>
          <IconWrapper>
            <Icon>blog</Icon>
          </IconWrapper>
          <ProfileTitle mt="0px" title="관련 포스트" />
        </TitleInnerWrapper>
      </TitleWrapper>

      <BasicSwiper>
        <>
          {postArr.map((elem, index) => {
            return (
              <StyledSlide key={getGenerateKey()}>
                <Div
                  onClick={() => {
                    window.open(elem.link, "_blank");
                  }}
                  $bg={COLOR_SELECT[index]}
                >
                  <Title>{elem.title}</Title>
                  <GoWrapper>
                    <Go>
                      <SlArrowRight />
                    </Go>
                  </GoWrapper>
                </Div>
              </StyledSlide>
            );
          })}
        </>
      </BasicSwiper>
    </>
  );
}

const TitleWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  place-content: center;
`;
const IconWrapper = styled.div`
  display: flex;
  place-content: center;
`;
const TitleInnerWrapper = styled.div``;
const GoWrapper = styled.div`
  justify-content: right;
  width: 100%;
  display: flex;
`;

const Go = styled.div`
  padding-right: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 9px;
  place-content: center;
  align-items: center;
  display: flex;
  /* text-align: -webkit-center; */
  /* border: 1px solid black; */
  background: none;
  margin-top: 24px;
  margin-right: 31px;
  width: 27px;
  height: 22px;
  border-radius: 50px;
  @media (max-width: 650px) {
    margin-top: 0px;
    margin-right: 21px;
  }
`;
const Title = styled.p`
  margin-right: 45px;
  padding-top: 47px;
  @media (max-width: 650px) {
    margin-right: 25px;
    padding-top: 17px;
  }
`;
const Div = styled.div<{ $bg: string }>`
  /* Rectangle 29 */
  text-align: right;
  width: 92%;
  height: 170px;

  background: #f8f8f8;
  background: ${({ $bg }) => $bg};
  border-radius: 19px;
  @media (max-width: 650px) {
    height: 100px;
  }
`;

const StyledSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 291px;
  height: 328px;

  @media (max-width: 650px) {
    width: 191px;
    font-size: 14px;
  }
`;

const Icon = styled.div`
  /* Rectangle 30 */
  place-content: center;
  margin-bottom: 5px;
  width: 47px;
  height: 20px;

  background: black;
  border-radius: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;

  color: white;
`;
