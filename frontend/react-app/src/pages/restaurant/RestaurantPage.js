import React from "react";
import {
  HomeTemplate,
  // CategoryTitle,
  // Spacer,
  // HoverButton,
} from "../../features/common";
import { PageTitle, CatalogList } from "../../features";
// import { Banner } from "../../features/banner";
// import { Row } from "../../features/styled-components-layout";
// import { HomePageAdvantage } from "../../features/homepage-advantage";
// import { CatalogList } from "../../features/catalog-list";
// import { HomePageAbout } from "../../features/homepage-about";
// import { SubscribeForm } from "../../features/subscribe-form";
// import { pageData } from "./data";
// import { Link } from "react-router-dom";
export const RestaurantPage = (props) => {
  const { restaurant } = props?.location;
  return (
    <HomeTemplate>
      <PageTitle backButton={true}>{restaurant?.name}</PageTitle>
      <CatalogList restaurant={restaurant} />
    </HomeTemplate>
  );
};
