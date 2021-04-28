import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Icon } from "../../common/atoms";
import { Container } from "../../common/templates";
// import { HeaderDelivery } from "../atoms/headerDelivery";
// import { Media, Color } from "../../../lib";
// import { MenuTree } from "./menu-tree";
import { Address } from "../../../features";
import "./desktop-header-template.css";
import Logo from "../../../assets/icons/logo.png";
import PinSvg from "../../../assets/icons/mapCheck.svg";

import RubIcon from "../../../assets/icons/basket.svg";
import { Link as LinkRouter } from "react-router-dom";

export const HeaderTemplateDektop = (props) => {
  // const { cart, menu } = props;
  // console.log("HeaderTemplateDektop props", props);
  const { address, products, cart_count } = props;
  return (
    <HeaderContainer >
      <Container isGray={false}>
        <HeaderWrapper>
          <LeftSide>
            <LinkRouter to={"/"}>
              <Link>
                <Logotype src={Logo} alt="VegDelivery" />
              </Link>
            </LinkRouter>
            <img style={{marginRight: '10px'}} src={PinSvg} alt="location" />
            <Address>{address?.value ? address.value : "Не указано"}</Address>
          </LeftSide>
          <RightSide>
            <Contacts>
              <LinkRouter className="linkto" to={"/contacts"}>
                <ListButton>Контакты</ListButton>
              </LinkRouter>
              <LinkRouter className="linkto" to={"/partners"}>
                <ListButton>Стать партнером</ListButton>
              </LinkRouter>
              <LinkRouter className="linkto" to={"/orders"}>
                <ListButton>Мои заказы</ListButton>
              </LinkRouter>
            </Contacts>
            <LinkRouter to="/cart">
              <Button>
                <span>
                  <RubImg src={RubIcon} alt="location" />
                </span>
                Корзина ({cart_count})
              </Button>
            </LinkRouter>
          </RightSide>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
// position: fixed;
// width: 100%; 
// z-index: 3;
// border-bottom: 1px solid #ccc; 
background: #fff
`;
const RubImg = styled.img`
  background: 5ac17d;
  margin-right: 8px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
`;
const Contacts = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: inherit;
  // margin-right: 39px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5ac17d;
  color: #ffffff;
  padding: 18px 46px 18px 46px;
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
  padding: 11px;
  font-family: Exo2Regular;
  font-size: 16px;
  background: transparent;
  line-height: 17px;
  height: inherit;
  color: #9f9f9f;
  outline: none;
  height: 53px;
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
  width: 160px;
  margin-right: 49px;
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
