import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  HomeTemplate,
  // CategoryTitle,
  // Spacer,
  // HoverButton,
} from "../../features/common";
import {
  PageTitle,
  OrderList,
  CustomButton
  // CatalogList
} from "../../features";
import { API_URL } from "../../lib";
// import { Banner } from "../../features/banner";
// import { Row } from "../../features/styled-components-layout";
// import { HomePageAdvantage } from "../../features/homepage-advantage";
// import { CatalogList } from "../../features/catalog-list";
// import { HomePageAbout } from "../../features/homepage-about";
// import { SubscribeForm } from "../../features/subscribe-form";
// import { pageData } from "./data";
import { Link } from "react-router-dom";
import { Row } from "../"

//  const OrderCart = connect({
//     products: state.product.products,
//     total_price: state?.cart?.total_price,
//     delivery_price: state?.cart?.delivery_price,
//   }),
//   (dispatch) => ({
//   })(OrdersPage);

// const IsOrder = () =>{
//   props.OrderCart
//   ? 
// }

export const OrdersPage = (props) => {
  console.log("OrdersPage", props);
 
 

  return (
    <HomeTemplate>
      <PageTitle>Список заказов</PageTitle>
      
      
      
      <OrderRow>
        <OrderWrapper>Заказы отсутствуют!</OrderWrapper>
      <Link to={"/"}>
        <CustomButton text="Перейти к выбору еды" />
      </Link>
      </OrderRow>
      <OrderList />
    </HomeTemplate>
  );
};

const OrderRow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const OrderWrapper = styled.h2`
color: #656665;
    font-weight: 900;
    font-size: 38px;
    margin: 30px 0;
`;