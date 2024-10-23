import styled from "styled-components";
import { getGenerateKey } from "../../../common/common";
import { SwiperSlide } from "swiper/react";
import BasicSwiper from "../Swiper/BasicSwiper";
import HashTagSwiper from "../Swiper/HashTagSwiper";

type PortfolioKeyValInfoProps = {
  title: string;
  contents: string[];
  background: string;
};
export default function PortfolioKeyValInfo({
  title,
  contents,
  background,
}: PortfolioKeyValInfoProps) {
  return (
    <Wrap>
      <Title>{title}</Title>
      <HashTagSwiper>
        {contents.map((content) => {
          return (
            <>
              <StyledSlide key={getGenerateKey()} style={{ width: "auto" }}>
                <Div $background={background}>{content}</Div>
              </StyledSlide>
            </>
          );
        })}
      </HashTagSwiper>
    </Wrap>
  );
}

const Span = styled.span<{ $background: string }>`
  background: ${({ $background }) =>
    $background}; // prop을 사용하여 margin-top 설정
  margin-right: 5px;
  padding: 0px 7px 0px 7px;
  border-radius: 10px;
  @media (max-width: 650px) {
    padding: 0px 7px 0px 7px;
  }
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  justify-items: start; // 왼쪽 정렬
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #7b7b7b;
  @media (max-width: 650px) {
  }
`;

const Div = styled.div<{ $background: string }>`
  background: ${({ $background }) =>
    $background}; // prop을 사용하여 margin-top 설정
  margin-right: 5px;
  padding: 0px 7px 0px 7px;
  border-radius: 10px;
  @media (max-width: 650px) {
    padding: 0px 7px 0px 7px;
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  width: auto;
  align-content: center;
`;
