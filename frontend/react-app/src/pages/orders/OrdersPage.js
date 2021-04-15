import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { HomeTemplate } from "../../features/common";
import {
  PageTitle,
  OrderList,
  CustomButton,
  // CatalogList
} from "../../features";
import { API_URL } from "../../lib";
import { Link } from "react-router-dom";
import { Row } from "../";
import { useSelector } from "react-redux";

export const OrdersPage = (props) => {
  // console.log("OrdersPage", props);
  const orders = useSelector((state) => state?.main?.orders) || [];
  return (
    <HomeTemplate>
      <PageTitle>Список заказов</PageTitle>
      {orders?.length === 0 ? (
        <OrderRow>
          <OrderWrapper>Заказы отсутствуют!</OrderWrapper>
          <Link to={"/"}>
            <CustomButton text="Перейти к выбору еды" />
          </Link>
        </OrderRow>
      ) : (
        <OrderList />
      )}
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
