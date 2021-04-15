import React, { useState, useEffect } from "react";
import {
  HomeTemplate,
  // CategoryTitle,
  // Spacer,
  // HoverButton,
} from "../../features/common";
import {
  PageTitle,
  Cart,
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
// import { Link } from "react-router-dom";
export const CartPage = (props) => {
  // console.log("CartPage", props);
  return (
    <HomeTemplate>
      <PageTitle>Корзина</PageTitle>
      <Cart />
    </HomeTemplate>
  );
};
