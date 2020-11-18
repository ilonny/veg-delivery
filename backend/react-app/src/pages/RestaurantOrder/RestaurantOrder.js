/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  Card,
  // Col,
  // Row,
  // Select,
  Button,
  Input,
  Divider,
  Table,
  // Collapse,
} from "antd";
import { API_HOST } from "../../lib";
import { Link } from "react-router-dom";
// const { Meta } = Card;
// const { Panel } = Collapse;

export const RestaurantOrder = (props) => {
  const [data, setData] = useState([]);
  const { id } = props.location.state;
  const [newModif, setNewModif] = useState({ type: "single" });

  const getData = () => {
    fetch(API_HOST + "/restaurant/get-order-list?restaurant_id=" + id)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  useEffect(() => {
    getData();
    //es
  }, []);

  console.log("data", data);
  let dataSource = data.map((row) => {
    const userInfo = JSON.parse(row.user_info);
    const address = JSON.parse(row.address_data);
    const cartList = JSON.parse(row.cart_list);

    return {
      id: row.id,
      user: `Телефон: ${userInfo.phone}${"\n"} Имя: ${
        userInfo.name
      } Комментарий: ${userInfo.comment} `,
      address: `${address.value} Квартира: ${userInfo?.flat} Подъезд: ${userInfo?.flat_p} Этаж: ${userInfo?.floor}`,
      cartList: cartList?.map((cartItem) => {
        return (
          <p>
            {cartItem.name} - {cartItem.count} шт
            {!!cartItem.selectedModificatorsAll &&
              !!cartItem.selectedModificatorsAll.length &&
              !!Object.keys(cartItem.selectedModificatorsAll[0]).length && (
                <p>
                  <span>Дополнительно:</span>
                  {cartItem.selectedModificatorsAll.map(
                    (modificatorPart, index) => {
                      let modificatorPartKey = Object.keys(modificatorPart)[0];
                      let modificatorPartParent =
                        modificatorPart[modificatorPartKey];
                      if (modificatorPartParent && modificatorPartParent.name) {
                        return (
                          <p
                            style={{
                              paddingLeft: 10,
                            }}
                            key={index}
                          >
                            <span>{modificatorPartParent.name}</span>
                            {modificatorPartParent.chosen_variants.map(
                              (chosenVariant, index) => {
                                return (
                                  <p
                                    key={index}
                                    style={{
                                      paddingLeft: 10,
                                      flexDirection: "row",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <span>{chosenVariant.name}</span>
                                    <span>{chosenVariant.price} руб</span>
                                  </p>
                                );
                              }
                            )}
                          </p>
                        );
                      }
                      return <></>;
                    }
                  )}
                </p>
              )}
            <Divider />
          </p>
        );
      }),
      totalPrice: row.total_price,
      deliveryPrice: row.delivery_price,
      date: row.date_create,
      payment_status: row.payment_status,
    };
  });

  const columns = [
    {
      title: "Номер",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Заказчик",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Корзина",
      dataIndex: "cartList",
      key: "cartList",
    },
    {
      title: "Стоимость заказа",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Стоимость доставки",
      dataIndex: "deliveryPrice",
      key: "deliveryPrice",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Статус оплаты",
      dataIndex: "payment_status",
      key: "payment_status",
    },
  ];
  return (
    <>
      <div>Заказы ресторана</div>
      <Link to={{ pathname: "restaurant", state: { id } }}>
        <Button>Назад в меню</Button>
      </Link>
      <Divider />
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};
