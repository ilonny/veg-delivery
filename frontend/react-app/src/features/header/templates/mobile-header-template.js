import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Icon } from "../../common/atoms";
// import { HeaderDelivery } from "../atoms/headerDelivery";
import { Media, Color } from "../../../lib";
// import { MenuTree } from "./menu-tree";
import { Address } from "../../../features";
import "./desktop-header-template.css";
import Logo from "../../../assets/icons/logo.png";
// import RubIcon from "../../../assets/icons/basket.svg";
import RubIconGreen from "../../../assets/icons/basket_green.svg";
import MenuButtonIcon from "../../../assets/icons/menu.svg";
import { Link as LinkRouter } from "react-router-dom";
import "./mobile-header-template.css";
export const HeaderTemplateMobile = (props) => {
  // const { cart, menu } = props;
  // console.log("HeaderTemplateDektop props", props);
  const { address, cart_count } = props;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <MenuButton onClick={() => setMenuOpened(!menuOpened)}>
          <img src={MenuButtonIcon} alt="Menu Button" />
        </MenuButton>
        <LinkRouter to={"/"}>
          <Link>
            <Logotype src={Logo} alt="VegDelivery" />
          </Link>
        </LinkRouter>
        <LinkRouter to="/cart">
          <div style={{ position: "relative" }}>
            <RubImg src={RubIconGreen} alt="location" />
            <CartCount>{cart_count}</CartCount>
          </div>
        </LinkRouter>
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
          <LinkRouter className="linkto" to={"/contacts"}>
            <ListButton>Контакты</ListButton>
          </LinkRouter>
          <LinkRouter className="linkto" to={"/partners"}>
            <ListButton>Стать партнером</ListButton>
          </LinkRouter>
          <LinkRouter className="linkto" to={"/orders"}>
            <ListButton>Мои заказы</ListButton>
          </LinkRouter>
        </MenuContent>
      )}
    </HeaderContainer>
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
  background: #fff; 
`;
// const LeftSide = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const RightSide = styled.div`
//   display: flex;
//   justify-content: center;
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
const HeaderContainer = styled.div`
// position: fixed;
// width: 100%; 
// z-index: 3
`;
const ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-family: Exo2Regular;
  font-size: 16px;
  background: transparent;
  line-height: 17px;
  width: 100%;
  color: #9f9f9f;
  outline: none;
  &:hover {
    background: #fafafa;
  }
`;

const Link = styled.div`
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
  outline: none;
  // padding: 20px;
  width: 160px;
  // border-right: 1px solid #f0f0f0;
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const MenuContent = styled.div`
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 20%);
  justify-content: center;
  align-items: center;
`;

const CartCount = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: ${Color.buttonColor};
  border-radius: 100%;
  padding: 1px 4px;
  font-size: 10px;
`;
