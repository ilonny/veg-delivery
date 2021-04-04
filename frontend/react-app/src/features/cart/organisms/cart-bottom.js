import React from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { HoverButton } from "../../common";
import { Color, Media } from "../../../lib";
export const CartBottom = (props) => {
  const { cart, setCartState, total_price, delivery_price } = props;
  return (
    <Wrapper>
      <Row
        justify="space-between"
        align="center"
        tablet_wrap="true"
        className="cart-bottom"
      >
        <div className="delivery">
          <p className="first">
            Доставка: <span>+{delivery_price} руб.</span>
          </p>
        </div>
        <div className="total-wrapper">
          <p>
            Итого: <span>{`${+total_price + +delivery_price} руб`}</span>
          </p>
        </div>
        <div>
          <HoverButton
            onClick={() => {
              setCartState("form");
            }}
            maxWidth={"372px"}
            color={"white"}
            backgroundColor={"#5ac17d"}
            hoverBackgroundColor={"#4ca96c"}
            fontSize="18px"
            hoverColor={"white"}
          >
            {"Оформить заказ"}
          </HoverButton>
        </div>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .cart-bottom {
    margin-top: 15px;
    text-align: left;
  }
  & .total-wrapper {
    font-weight: 500;
    font-size: 18px;
    & span {
      color: ${Color.titleColor};
    }
  }
  & .delivery {
    font-size: 18px;
    & .first {
      span {
        color: ${Color.titleColor};
      }
    }
    & .second {
      color: #717171;
    }
  }
  ${Media.mobile} {
    & .cart-bottom > div {
      flex: 1 1 100%;
      margin-bottom: 15px;
    }
  }
`;
