import React from "react";
import styled from "styled-components";
import { Row } from "../../features/styled-components-layout";
export const OrderListTemplate = (props) => {
  const { orders } = props;
  //   console.log("orders??", orders);
  return (
    <div>
      {orders?.map((order) => {
        const addressData = JSON.parse(order.address_data);
        const userInfo = JSON.parse(order.user_info);
        const restAddress = JSON.parse(order?.restaurantInfo?.address_json);
        return (
          <OrderWrapper key={order.id}>
            <Row align="center" justify="space-between">
              <p>{order?.restaurantInfo?.name}</p>
              <p>{order?.date_create}</p>
            </Row>
            <Row align="center" justify="space-between">
              <p>Адрес доставки: </p>
              <p>
                {addressData?.value}
                {` `}
                {userInfo?.flat && `кв. ${userInfo?.flat}`}
                {` `}
                {userInfo?.floor && `этаж ${userInfo?.floor}`}
                {` `}
                {userInfo?.entrace && `подъезд ${userInfo?.entrace}`}
              </p>
            </Row>
            <Row align="center" justify="space-between">
              <p>Адрес ресторана: </p>
              <p>{restAddress?.value}</p>
            </Row>
            <Row align="center" justify="space-between">
              <p>Имя: </p>
              <p>{userInfo?.name}</p>
            </Row>
            <Row align="center" justify="space-between">
              <p>Телефон: </p>
              <p>{userInfo?.phone}</p>
            </Row>
            {order?.cartList?.map((item) => {
              return (
                <Row key={item?.id} align="center" justify="space-between">
                  <p>{item?.name}</p>
                  <p>
                    {item?.count} х {item?.price} руб.
                  </p>
                </Row>
              );
            })}
            <Row align="center" justify="space-between">
              <p>Стоимость заказа: </p>
              <p>{order?.total_price} руб.</p>
            </Row>
            <Row align="center" justify="space-between">
              <p>Стоимость доставки: </p>
              <p>{order?.delivery_price} руб.</p>
            </Row>
          </OrderWrapper>
        );
      })}
    </div>
  );
};

const OrderWrapper = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;
