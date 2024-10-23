import styled from "styled-components";
import { getGenerateKey } from "../../common/common";
import { FeaturesType } from "../../common/type";
import ProfileTitle from "../Common/ProfileTitle";
import { useState } from "react";

/*
    작성일 : 2024.10.22
    파일명 : Features.tsx
    설명 : 토이 프로젝트 > 꼼삐 > 기능 도입
*/
export default function Features({ features }: { features: FeaturesType[] }) {
  const [selectedValue, setSelectedValue] = useState<FeaturesType>(features[0]);

  return (
    <>
      <ProfileTitle mt="120px" title="기능 도입 및 최적화" />
      <Wrapper>
        <InnerWrapper>
          {features.map((elem) => {
            return (
              <Feature
                key={getGenerateKey()}
                feature={elem}
                onClick={() => {
                  setSelectedValue(elem);
                }}
                bg={selectedValue.title === elem.title ? "#E0F7F1" : "#f8f8f8"}
              />
            );
          })}
        </InnerWrapper>
      </Wrapper>
      <Wrapper>
        <DiscriptionWrapper>
          <SubTitle>{selectedValue.subTitle}</SubTitle>
          <Discription>{selectedValue.discription}</Discription>
        </DiscriptionWrapper>
      </Wrapper>
    </>
  );
}

function Feature({
  feature,
  onClick,
  bg,
}: {
  feature: FeaturesType;
  onClick: () => void;
  bg: string;
}) {
  return (
    <>
      <Component onClick={onClick} $bg={bg}>
        {feature.title}
      </Component>
    </>
  );
}

const DiscriptionWrapper = styled.div`
  text-align: -webkit-center;
`;

const Discription = styled.div`
  max-width: 500px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const SubTitle = styled.div`
  place-content: center;
  margin-bottom: 45px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const Component = styled.div<{ $bg: string }>`
  /* Rectangle 37 */
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 190px;
  width: 100%;
  height: 49px;

  background: #f8f8f8;
  background: ${({ $bg }) => $bg};
  border-radius: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #000000;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  margin-top: 65px;
  place-content: center;
  display: flex;
`;

const InnerWrapper = styled.div`
  grid-column-gap: 21px;
  grid-row-gap: 19px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
