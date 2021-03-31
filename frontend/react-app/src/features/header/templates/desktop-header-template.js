import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Icon } from "../../common/atoms";
// import { HeaderDelivery } from "../atoms/headerDelivery";
// import { Media, Color } from "../../../lib";
// import { MenuTree } from "./menu-tree";
import { Address } from "../../../features";
import "./desktop-header-template.css";
import Logo from "../../../assets/icons/logo.png";
import RubIcon from "../../../assets/icons/basket.svg";

export const HeaderTemplateDektop = (props) => {
  // const { cart, menu } = props;
  console.log("HeaderTemplateDektop props", props);
  const { address } = props;
  return (
    <HeaderWrapper>
      <LeftSide>
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
        <Button>
          <span>
            <RubImg src={RubIcon} alt="location" />
          </span>
          Корзина(0)
        </Button>
      </RightSide>
    </HeaderWrapper>
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
  height: 53px;
  border-bottom: 1px solid #ccc;
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: center;
`;
const Contacts = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: inherit;
  margin-right: 39px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5ac17d;
  color: #ffffff;
  padding: 18px 57px 18px 86px;
  height: 53px;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
`;
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
  padding: 20px;
  width: 160px;
  height: 52px;
  border-right: 1px solid #f0f0f0;
`;

// const MainWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 14px 40px;
// `;

// const LinksWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const CartLinkSpan = styled.span`
//     color: ${Color.red};
//     text-decoration: none;
//     ${Media.tablet} {
//         display: none;
//     }
// `;
// const CartLinkSpanGray = styled.span`
//     color: ${Color.gray};
//     margin-right: 20px;
//     text-decoration: underline;
//     ${Media.tablet} {
//         display: none;
//     }
// `;

// const CartLink = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     text-decoration: none;
//     &:hover ${CartLinkSpanGray} {
//         text-decoration: none;
//     }
//     ${Media.tablet} {
//         flex-direction: column;
//         align-items: flex-end;
//     }
// `;

// const LinkHover = styled.div`
//     padding: 10px 50px;
//     & a {
//         text-transform: uppercase;
//         font-weight: 600;
//     }
// `

// const LinkHoverContent = styled.div`
//     position: absolute;
//     top: 100%;
//     background: #fff;
//     padding: 30px;
//     max-width: 980px;
//     margin: 0 auto;
//     left: 50%;
//     margin-left: -566px;
//     margin-top: -30px;
//     padding-top: 50px;
// `

// const LinkHoverWrapper = styled.div`
//     position: relative;
//     & ${LinkHoverContent} {
//         display: none;
//     }
//     &:hover {
//         & ${LinkHoverContent} {
//             display: block;
//         }
//     }
// `
