import React, { useEffect, useState } from "react";
// import { Row } from "../../styled-components-layout";
// import { Block } from "../organisms/block";
import { CategoryName } from "../organisms/CategoryName";
import { CategoryProducts } from "../organisms/CategoryProducts";
import { API_URL } from "../../../lib";
export const CatalogListTemplate = (props) => {
  // console.log("catalog list props", props);
  const { addToCart, removeFromCart, cart_products, id, restaurant } = props;
  const menu = restaurant?.menu;
  // console.log("restaurant", restaurant);
  if (menu) {
    return (
      <>
        {menu.map((category) => {
          if (category?.menu?.length) {
            return (
              <div key={category.id}>
                <CategoryName name={category.name} />
                <CategoryProducts
                  products={category?.menu}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  cart_products={cart_products}
                />
              </div>
            );
          }
          return null;
        })}
        {/* {isPopular && <CategoryTitle>Популярное</CategoryTitle>}
        <div style={{ margin: "-10px" }}>
        <Row align="flex-start" wrap="wrap">
        {props.data.map((item) => (
          <Block item={item} key={item.id} {...props} />
          ))}
          </Row>
        </div> */}
      </>
    );
  }
  return <CategoryProducts />;
  return null;
};
