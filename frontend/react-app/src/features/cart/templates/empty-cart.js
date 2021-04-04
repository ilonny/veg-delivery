import React from "react";
import styled from "styled-components";
import { PageTitle, CustomButton } from "../../../features";
import EmptyCartIcon from "../../../assets/icons/empty_cart.svg";
import { Link } from "react-router-dom";
export const EmptyCart = () => {
  return (
    <Wrapper>
      <img src={EmptyCartIcon} alt="empty cart" />
      <div style={{ marginTop: -10 }}>
        <PageTitle>Корзина пуста!</PageTitle>
      </div>
      <Link to={"/"}>
        <CustomButton text="Перейти к выбору еды" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h4`
  font-size: 28px;
  color: #656665;
  text-align: center;
  font-weight: bold;
`;
