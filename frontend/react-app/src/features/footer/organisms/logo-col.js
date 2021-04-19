import React from "react";
import styled from "styled-components";
import { ImageView } from "../../common";
import { Media, API_URL } from "../../../lib";
import { Link } from "react-router-dom";

export const LogoCol = () => (
  <LogoColStyled>
    <Link to={"/"}>
      <ImageView
        src={require("../../../assets/icons/logo.png")}
        className="logo"
      />
    </Link>
    {/* <TitleText>
      Доставка
      здорового питания
    </TitleText> */}
    {/* <p className="copy gray-text">© VegDelivery 2021 </p>
    <a className="copy link gray-text" href="/">
      Политика конфиденциальности 
    </a> */}
  </LogoColStyled>
);

const LogoColStyled = styled.div`
  flex: 1 1 100%;
  margin-bottom: 20px;
  flex: 0;
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
    align-items: flex-start;
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
