import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import AutoSwiper from "../Common/Swiper/AutoSwiper";
import { getGenerateKey } from "../../common/common";

/*
    작성일 : 2024.10.24
    파일명 : Screens.tsx
    설명 : 화면 목록
*/
export default function Screens({ imgs }: { imgs: string[] }) {
  return (
    <AutoSwiper>
      <>
        {imgs.map((elem, index) => {
          const bgImage = require(`/src/assets/images/${elem}`);

          return (
            <StyledSlide key={getGenerateKey()}>
              <Div $bgurl={bgImage} />
            </StyledSlide>
          );
        })}
      </>
    </AutoSwiper>
  );
}

const Div = styled.div<{ $bgurl: string }>`
  text-align: right;
  width: 90%;
  height: 100%;
  background: white;
  background-image: url(${({ $bgurl }) => $bgurl}); /* 배경 이미지 설정 */
  background-size: cover; /* 배경 이미지 크기 조정 */
  background-position: center; /* 배경 이미지 위치 조정 */
`;

const StyledSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #e0f7f1;
  width: 300px;
  height: 600px;

  @media (max-width: 650px) {
    width: 100px;
    height: 200px;
  }
`;
