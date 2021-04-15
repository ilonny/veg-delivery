import React, { useState, useEffect } from "react";
import {
  HomeTemplate,
  // CategoryTitle,
  // Spacer,
  // HoverButton,
} from "../../features/common";
import { PageTitle, CatalogList } from "../../features";
import { API_URL } from "../../lib";
// import { Banner } from "../../features/banner";
// import { Row } from "../../features/styled-components-layout";
// import { HomePageAdvantage } from "../../features/homepage-advantage";
// import { CatalogList } from "../../features/catalog-list";
// import { HomePageAbout } from "../../features/homepage-about";
// import { SubscribeForm } from "../../features/subscribe-form";
// import { pageData } from "./data";
// import { Link } from "react-router-dom";
export const RestaurantPage = (props) => {
  // console.log("RestaurantPage", props);
  const { id } = props?.match?.params;
  const [restaurant, setRestaurant] = useState(props?.location?.restaurant);
  useEffect(() => {
    if (!restaurant) {
      let rest = null;
      fetch(`${API_URL}restaurant/get-data?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          rest = res;
          setRestaurant(rest);
        });
    }
  }, []);
  // console.log("RestaurantPage rest", restaurant);

  return (
    <HomeTemplate>
      <PageTitle backButton={true}>{restaurant?.name}</PageTitle>
      <CatalogList restaurant={restaurant} id={id} />
    </HomeTemplate>
  );
};
