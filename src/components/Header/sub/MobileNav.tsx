/*
    작성일 : 2024.10.21
    파일명 : MobileNav.tsx
    설명 : Mobile 의 네비게이션
*/

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigate = (navigateTo: string) => {
    setAnchorEl(null);
    if (navigateTo !== "close") {
      navigate(navigateTo);
    }
  };

  return (
    <>
      <Wrap>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          style={menuItemStyle}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClick={() => {
            handleNavigate("close");
          }}
        >
          <MenuItem
            style={menuItemStyle}
            onClick={() => {
              handleNavigate("/");
            }}
          >
            소개
          </MenuItem>
          <MenuItem
            style={menuItemStyle}
            onClick={() => {
              handleNavigate("/career");
            }}
          >
            커리어
          </MenuItem>
          <MenuItem
            style={menuItemStyle}
            onClick={() => {
              handleNavigate("/projects");
            }}
          >
            토이프로젝트
          </MenuItem>
        </Menu>
      </Wrap>
    </>
  );
}

const menuItemStyle = {
  fontFamily: "Pretendard",
  fontSize: "15px",
};

const Wrap = styled.div`
  display: none; /* 기본적으로 보이지 않도록 설정 */

  @media (max-width: 650px) {
    display: block; /* 화면 너비가 650px 이하일 때 보이도록 설정 */
    right: 0px;

    position: absolute;
    display: flex;
    place-items: center;
    align-content: center;

    align-self: center;
  }
`;
