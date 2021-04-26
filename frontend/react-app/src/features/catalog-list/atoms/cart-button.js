import React from "react";
import styled from "styled-components";
import { ReactComponent as CartSvg } from "../../../assets/icons/cart.svg";
import AddToCartIcon from "../../../assets/icons/add_to_cart.png";
import RemoveFromCartIcon from "../../../assets/icons/remove_from_cart.png";
import { Row } from "../../../features/styled-components-layout";
import { Color, Media } from "../../../lib";
import { ToastsContainer, ToastsStore } from "react-toasts";
export const CartButton = (props) => {
  const { active, removeFromCart, addToCart, item, cart_products } = props;
  // console.log('CartButton', props)
  let count = 1;
  try {
    count = cart_products?.find((el) => el.id == item.id)?.count;
  } catch (e) {}
  if (!active) {
    return (
      <>
        <AddBtn
          onClick={() => {
            addToCart();
            // ToastsStore.success("Товар добавлен в корзину");
          }}
        >
          <img src={AddToCartIcon} alt="Add" />
        </AddBtn>
        <ToastsContainer store={ToastsStore} />
      </>
    );
  }
  return (
    <Row align="center">
      <AddBtn onClick={() => removeFromCart()}>
        <img src={RemoveFromCartIcon} alt="Remove" />
      </AddBtn>
      <span style={{ paddingRight: 10, paddingLeft: 10 }}>{count}</span>
      <AddBtn
        onClick={() => {
          ToastsStore.success("Товар добавлен в корзину");
          addToCart();
        }}
      >
        <img src={AddToCartIcon} alt="Add" />
      </AddBtn>
      <ToastsContainer store={ToastsStore} />
    </Row>
  );
};

const AddBtn = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  & img {
    width: 100%;
    height: 100%:
  }
`;
const activeStyles = `
    background: ${Color.red};
    color: #fff;
`;
const ButtonStyled = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease;
  background: ${Color.light_gray};
  width: 140px;
  height: 35px;
  cursor: pointer;
  margin-right: 20px;
  & svg,
  & path {
    fill: ${Color.black};
    color: ${Color.black};
    margin-right: 5px;
  }
  &:hover {
    ${activeStyles}
    & svg, & path {
      fill: #fff;
      color: #fff;
    }
  }
  ${Media.tablet} {
    width: 120px;
    margin-right: 10px;
  }
  ${Media.mobile} {
    width: 100%;
    flex: 1 1 100%;
    order: 2;
    margin: 0;
  }
`;
