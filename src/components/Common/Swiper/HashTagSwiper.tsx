import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import styled from "styled-components";

export default function HashTagSwiper({
  children,
  onClick,
  spaceBetween = 0.2,
  ml = "0px",
}: {
  spaceBetween?: number;
  children: React.ReactNode;
  ml?: string;
  onClick?: () => void;
}) {
  return (
    <SwiperContainer
      onClick={() => {
        onClick?.();
      }}
      $ml={ml}
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className="mySwiper"
      spaceBetween={spaceBetween}
      slidesPerView="auto"
    >
      {children}
    </SwiperContainer>
  );
}

const SwiperContainer = styled(Swiper)<{ $ml: string }>`
  margin-left: ${({ $ml }) => $ml};
  width: 100%; // 전체 너비 사용
  .swiper-wrapper {
    width: 100%;
  }
`;
