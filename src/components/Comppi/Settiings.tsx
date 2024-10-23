/*
    작성일 : 2024.10.22
    파일명 : Settings.tsx
    설명 : 토이 프로젝트 > 상세 기술 설정
    
*/

import { SettingType } from "../../common/type";
import ProfileTitle from "../Common/ProfileTitle";
import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";

export default function Settings({ settings }: { settings: SettingType[] }) {
  return (
    <>
      <ProfileTitle mt="120px" title="기술 환경" />
      <H />
      {settings.map((elem, index) => {
        return (
          <Setting
            index={index + 1}
            title={elem.title}
            content={elem.discription}
          />
        );
      })}
    </>
  );
}

export function Setting({
  index,
  title,
  content,
}: {
  index: number;
  title: string;
  content: string;
}) {
  return (
    <Div>
      <Index>{index}</Index>
      <InnerDiv>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Line />
      </InnerDiv>
    </Div>
  );
}

const H = styled.div`
  height: 55px;
`;
const Line = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
`;
const InnerDiv = styled.div`
  margin-left: 12px;
  width: 100%;
`;
const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: left;

  color: #000000;
  @media (max-width: 650px) {
    margin-top: 10px;
    line-height: 22px;
  }
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  color: #000000;
  text-align: left;
`;

const Div = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Index = styled.div`
  /* Ellipse 1 */

  width: 26px;
  height: 26px;

  background: #000000;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  display: flex;
  align-items: center;
  border-radius: 50%;

  color: #ffffff;
  justify-content: center;
  @media (max-width: 650px) {
    display: none;
  }
`;
