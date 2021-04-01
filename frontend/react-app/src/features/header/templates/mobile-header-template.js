import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Icon } from "../../common/atoms";
// import { HeaderDelivery } from "../atoms/headerDelivery";
// import { Media, Color } from "../../../lib";
// import { MenuTree } from "./menu-tree";
import { Address } from "../../../features";
import "./desktop-header-template.css";
import Logo from "../../../assets/icons/logo.png";
// import RubIcon from "../../../assets/icons/basket.svg";
import RubIconGreen from "../../../assets/icons/basket_green.svg";
import MenuButtonIcon from "../../../assets/icons/menu.svg";

export const HeaderTemplateMobile = (props) => {
  // const { cart, menu } = props;
  // console.log("HeaderTemplateDektop props", props);
  const { address } = props;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <MenuButton onClick={() => setMenuOpened(!menuOpened)}>
          <img src={MenuButtonIcon} alt="Menu Button" />
        </MenuButton>
        <Link href="#">
          <Logotype src={Logo} alt="VegDelivery" />
        </Link>
        <RubImg src={RubIconGreen} alt="location" />
        {/* <LeftSide>
        <Link href="#">
          <Logotype src={Logo} alt="VegDelivery" />
        </Link>
        <Address>{address?.value ? address.value : "Не указано"}</Address>
      </LeftSide>
      <RightSide>
        <Contacts>
          <ListButton>О компании</ListButton>
          <ListButton>Для ресторанов</ListButton>
          <ListButton>Контакты</ListButton>
        </Contacts>
        
      </RightSide> */}
      </HeaderWrapper>
      {menuOpened && (
        <MenuContent>
          <Address>{address?.value ? address.value : "Не указано"}</Address>
          <ListButton>О компании</ListButton>
          <ListButton>Для ресторанов</ListButton>
          <ListButton>Контакты</ListButton>
        </MenuContent>
      )}
    </>
  );
};
const RubImg = styled.img`
  background: 5ac17d;
  margin-right: 8px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;
// const LeftSide = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const RightSide = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// const Contacts = styled.ul`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   width: inherit;
//   margin-right: 39px;
// `;
// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #5ac17d;
//   color: #ffffff;
//   padding: 18px 57px 18px 86px;
//   height: 53px;
//   outline: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;
const ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-family: Exo2Regular;
  font-size: 14px;
  background: transparent;
  line-height: 17px;
  width: inherit;
  color: #9f9f9f;
  &:hover {
    background: #fafafa;
  }
`;

const Link = styled.a`
  font-family: Exo2Regular;
  font-size: 14px;
  line-height: 17px;
  color: #9f9f9f;
  pointer: cursor;
  &:hover {
    text-decoration: underline;
  }
`;

const Logotype = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 20px;
  width: 160px;
  border-right: 1px solid #f0f0f0;
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const MenuContent = styled.div`
  padding: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;
