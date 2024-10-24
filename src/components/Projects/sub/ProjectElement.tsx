import styled from "styled-components";
import { ToyProjectType } from "../../../common/type";
import { getGenerateKey } from "../../../common/common";

/*
    작성일 : 2024.10.22
    파일명 : ProjectElement.tsx
    설명 : 토이 프로젝트 > 프로젝트 목록 > 요소
*/
type ProjectElementProps = {
  onClick: () => void;
  obj: ToyProjectType;
  margin: string;
};
export default function ProjectElement({
  onClick,
  obj,
  margin,
}: ProjectElementProps) {
  return (
    <Wrapper onClick={onClick} $margin={margin}>
      <UpperDiv>
        <TagWrapper>
          {obj.skills.map((skill) => {
            return <Tag key={getGenerateKey()}>{skill}</Tag>;
          })}
        </TagWrapper>
        <Img
          src={require(`/src/assets/images/${obj.img}`)}
          alt="Description of my image"
        />
      </UpperDiv>
      <Div>
        <Title>{obj.title}</Title>
        <Period>{obj.period}</Period>
        <Info>개발 인원 : {obj.members}명</Info>
        <Discription>{obj.discription}</Discription>
      </Div>
    </Wrapper>
  );
}

const Img = styled.img`
  width: 200px;
`;
const TagWrapper = styled.div`
  display: flex;
`;
const Tag = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 5px;
  background: #00c36341;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
const UpperDiv = styled.div`
  height: 50%;
  border-bottom: 1px solid black;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background: #e0f7f1;
`;

const Div = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;
const Title = styled.p`
  /* 반려 식물 키우기 모바일 웹 */

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  margin: 0px;
  color: #000000;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

const Period = styled.p`
  /* 2024.03 ~ 2024.09 */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #000000;
  margin: 0px;
  margin-top: 5px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

const Wrapper = styled.div<{ $margin: string }>`
  max-width: 388px;
  width: 100%;
  height: 487px;
  margin: ${({ $margin }) => $margin};
  background: #f8f8f8;
  border: solid #dedede;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 650px) {
    margin: 0px;
    margin-bottom: 20px;
  }
`;

const Info = styled.p`
  /* 개발인원 : 6명 */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #7b7b7b;
  margin: 0px;
  margin-top: 5px;
  @media (max-width: 650px) {
    font-size: 13px;
  }
`;

const Discription = styled.div`
  /* 반려식물을 재미있게 키우기 위한 웹앱 서비스. */
  margin-top: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #000000;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
