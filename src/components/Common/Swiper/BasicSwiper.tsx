/*
    작성일 : 2024.10.22
    파일명 : BasicSwiper.tsx
    설명 : 공통 기본 스와이퍼
    
*/
import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import styled from "styled-components";
import React from "react";

export default function BasicSwiper({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Wrapper>
      <StyledSwiper
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[FreeMode]}
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
  // width: 100%;
  // height: 100%;
  .swiper-wrapper {
    display: inline-flex;
  }
`;
