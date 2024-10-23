import { Swiper } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import styled from "styled-components";
import React from "react";

/*
    작성일 : 2024.10.22
    파일명 : AutoSwiper.tsx
    설명 : 공통 자동으로 움직이는 스와이퍼
*/

export default function AutoSwiper({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Wrapper>
      <StyledSwiper
        style={{
          background: "#e0f7f1",
        }}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        autoplay={{
          // 자동 재생 설정
          delay: 1000, // 슬라이드 간의 시간 (밀리초)
          disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        }}
        modules={[FreeMode, Autoplay]} // Autoplay 모듈 추가
      >
        {children}
      </StyledSwiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    display: inline-flex;
    background: #e0f7f1;
    padding: 24px;
  }
`;
