import { Link } from "react-router-dom";
import styled from "styled-components";

/*
    작성일 : 2024.10.21
    파일명 : PcNav.tsx
    설명 : PC 의 네비게이션
*/

export default function PcNav() {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/">소개</StyledLink>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <StyledLink to="/career">커리어</StyledLink>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <StyledLink to="/projects">토이 프로젝트</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  align-self: center;
  padding: 0 20px;
  @media (max-width: 650px) {
    display: none;
  }
`;

const Ul = styled.ul`
  height: 100%;
  align-self: center;
`;
const Li = styled.li`
  list-style-type: none;
  margin-right: 40px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: black;

  letter-spacing: 0.0096em;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  &:hover {
    color: gray;
  }
`;
