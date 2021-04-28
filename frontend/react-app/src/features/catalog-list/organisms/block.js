import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import styled from "styled-components";
import {
  BlockWrapper,
  ImageWrapper,
  Image,
  Title,
  CartButton,
  Price,
  DescriptionWrapper,
} from "../atoms";
import { API_URL, Media } from "../../../lib";
import { Row } from "../../styled-components-layout";
import ImgNotFound from "../../../assets/icons/image_not_found.png";
export const Block = ({ item, addToCart, removeFromCart, cart_products }) => {
  // console.log('block remove??', removeFromCart)
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let active = false;
  try {
    active = !!cart_products.find((product) => product.id === item.id);
  } catch (e) {}
  const onClickHandler = (product) => {
    // console.log("onClick", product_id);
    if (active) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
    forceUpdate();
  };
  return (
    <BlockWrapper>
      {/* <Link to={`/product/${item.id}`}> */}
      <ImageWrapper>
        <>
          {item.image ? (
            <>
              <img
                src={item.image_hover}
                style={{ opacity: 0, maxWidth: "100%", maxHeight: "420px" }}
                alt={item.title}
              />
              <Image src={`${API_URL}${item.image}`} />
              {/* <Image hover_hide="true" src={item.image} /> */}
            </>
          ) : (
            <img
              src={ImgNotFound}
              alt="Изображение отсутствует"
              style={{ maxWidth: "100%", maxHeight: "420px" }}
            />
          )}
          <DescriptionWrapper translate="true">
            {item.description}
          </DescriptionWrapper>
        </>
      </ImageWrapper>
      <Title>{item.name}</Title>
      {/* </Link> */}
      <PriceWrapper>
        <Row align="flex-start" flexDirection='column'>
          <CartButton
            item={item}
            removeFromCart={() => removeFromCart(item)}
            addToCart={() => addToCart(item)}
            active={active}
            cart_products={cart_products}
          />
          <Price isBold={true}>{item.price} руб.</Price>
          {!!item.new_price && <Price isBold>{item.new_price} руб.</Price>}
        </Row>
      </PriceWrapper>
    </BlockWrapper>
  );
};

const PriceWrapper = styled.div`
position: absolute;
bottom: 25px;
left: 20px;
${Media.tablet}{
  bottom: 15px;
  left: 10px;
}
`;