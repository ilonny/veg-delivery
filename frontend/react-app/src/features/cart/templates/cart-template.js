import React, { useEffect, useState } from "react";
import { Row } from "../../styled-components-layout";
import { CartProduct, CartBottom, CartForm } from "../organisms";
import { CategoryTitle } from "../../common";
import { Link } from "react-router-dom";
import { EmptyCart } from "./empty-cart";
import "./styles.scss";
export const CartTemplate = (props) => {
  // console.log("Cart props", props);
  // const [cartState, setCartState] = useState("form");
  const [cartState, setCartState] = useState("precheck");
  // const { id, getCurrentProduct } = props;
  const { cart } = props;
  const cartProducts = cart?.products || [];
  // console.log("cartProducts", cartProducts);
  // const cartProducts = products.filter(item => cartProductsIds.includes(item.id));
  // console.log('cartProducts', cartProducts);
  if (cartProducts.length) {
    if (cartState === "precheck") {
      return (
        <div>
          {cartProducts.map((product, index) => (
            <Row
              justify="flex-start"
              align="flex-start"
              tablet_wrap="true"
              key={index}
            >
              <CartProduct product={product} {...props} />
            </Row>
          ))}
          <CartBottom {...props} setCartState={setCartState} />
        </div>
      );
    }
    if (cartState === "form") {
      return <CartForm {...props} setCartState={setCartState} />;
    }
  } else {
    return (
      <>
        <EmptyCart />
      </>
    );
  }
};
