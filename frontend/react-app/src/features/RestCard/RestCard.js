import React from "react";
import styled from "styled-components";
import { API_URL, Color, Media } from "../../lib";
import { Row } from "../../features/styled-components-layout";
import { Link } from "react-router-dom";

export const RestCard = (props) => {
  const { restaurant, address } = props;
  console.log('reastcard props', props);
  const restAddress = JSON.parse(restaurant.address_json)
  return (
    <RestCardWrapper>
      <Link to={{ pathname: `/restaurant/${restaurant.id}`, restaurant }}>
        <RestCardImageWrapper {...props} />
        <RestCardContentWrapper>
          <h2>{restaurant?.name}</h2>
          <AddressRest>{restAddress.value}</AddressRest>
          <Row
            align="center"
            justify="space-between"
            marginTop="15px !important"
          >
            {restaurant?.min_price && (
              <RestBadge>
                <span>Заказ от: </span>&nbsp;
                <span>{restaurant?.min_price} руб.</span>
              </RestBadge>
            )}
            {restaurant?.delivery_time && (
              <RestBadge>
                <span>Доставка: </span>&nbsp;
                <span>{restaurant?.delivery_time}</span>
              </RestBadge>
            )}
          </Row>
        </RestCardContentWrapper>
      </Link>
    </RestCardWrapper>
  );
};
const AddressRest = styled.p`
font size: 8px;
margin: 5px 0;
color: #9F9F9F;
`;
const RestCardWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  margin: 0 10px;
  margin-bottom: 20px;
  ${Media.tablet} {
    max-width: calc(50% - 20px);
  }
  @media screen and (max-width: 760px) {
    max-width: 100%;
  }
  // padding: 15px;
`;
const RestCardImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 15px;
  ${(props) => {
    const { restaurant } = props;
    return `
    background: url(${`${API_URL}${restaurant?.image}`}) center center no-repeat;
    `;
  }}
  background-size: 90% auto;
`;
const RestCardContentWrapper = styled.div`
  padding: 20px;
  & h2 {
    margin: 0;
    color: ${Color.titleColor};
  }
`;

const RestBadge = styled.div`
  border-radius: 5px;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  font-weight: bold;
  font-size: 13px;
  & span {
    color: #9f9f9f;
  }
  & span:nth-child(1) {
    color: #656565;
  }
`;
