import React from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Block } from "./block";
export const CategoryProducts = ({
  products = [],
  addToCart,
  removeFromCart,
  cart_products,
}) => {
  // console.log("CategoryProducts", products);
  return (
    <Row
      align="center"
      margin="0px 0px 20px 0px;"
      marginTop="0px !important"
      wrap="wrap"
    >
      {products?.map((product) => {
        return (
          <Block
            key={product?.id}
            item={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart_products={cart_products}
          />
        );
      })}
    </Row>
  );
};
