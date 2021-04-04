import React from "react";
import styled from "styled-components";
import { ImageView } from "../../common";
import { Media, API_URL } from "../../../lib";
import { Link } from "react-router-dom";
export const LogoCol = () => (
  <LogoColStyled>
    <ImageView
      src={require("../../../assets/icons/logo.png")}
      className="logo"
    />
    <p className="title">
      Доставка
      <br />
      здорового питания
    </p>
    <p className="copy gray-text">© VegDelivery 2021 </p>
    <a className="copy link gray-text" href="/">
      Политика конфиденциальности
    </a>
  </LogoColStyled>
);

const LogoColStyled = styled.div`
  flex: 1 1 100%;
  & .logo {
    max-width: 118px;
    max-height: 52px;
  }
  & .title {
    font-size: 18px;
    line-height: 23px;
    margin-top: 20px;
    margin-bottom: 45px;
  }
  & .copy {
    font-size: 18px;
    line-height: 23px;
    margin-top: 20px;
    color: rgb(146, 146, 146);
  }
  ${Media.tablet} {
    order: 3;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    & img {
      flex-shrink: 0;
    }
    & .title {
      margin-bottom: 0px;
    }
  }
`;
