import React from "react";
import styled from "styled-components";
import { ColTitle } from "../atoms";
// import { LinkStyled } from "../../homepage-about/atoms";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
import { Link } from "react-router-dom";
export const MenuCol = () => (
  <MenuColStyled>
    <ColTitle>Меню</ColTitle>
    <div>
      <Row>
        <FirstCol>
          <Link to="/">
            <LinkStyled>О компании</LinkStyled>
          </Link>
          <Link to="/">
            <LinkStyled>Контакты</LinkStyled>
          </Link>
          <Link to="/orders">
            <LinkStyled>Мои заказы</LinkStyled>
          </Link>
        </FirstCol>
        {/* <div>
          <Link to="/delivery">
            <LinkStyled>Чем мы можем помочь</LinkStyled>
          </Link>
          <Link to="/about">
            <LinkStyled>О нас</LinkStyled>
          </Link>
          <Link to="/faq">
            <LinkStyled>FAQ</LinkStyled>
          </Link>
        </div> */}
      </Row>
    </div>
  </MenuColStyled>
);

const MenuColStyled = styled.div`
  flex: 1 1 100%;
  ${Media.tablet} {
    flex: 1 1 50%;
  }
  ${Media.mobile} {
    flex: 1 1 100%;
  }
`;
const LinkStyled = styled.span`
  font-size: 18px;
  line-height: 23px;
  display: block;
  margin-bottom: 10px;
`;

const FirstCol = styled.div`
  margin-right: 50px;
`;
