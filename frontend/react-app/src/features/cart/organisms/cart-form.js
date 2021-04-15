import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Input, WrapperInput } from "../../subscribe-form/atoms";
import { HoverButton, CategoryTitle } from "../../common";
import { Media, Color, request, history } from "../../../lib";
import { Address, CartInput } from "../../../features";
import serialize from "form-serialize";
import Modal from "react-modal";
import InputMask from "react-input-mask";

export const CartForm = (props) => {
  const {
    setCartState,
    cart,
    address,
    changeAddress,
    userInfo,
    changeStoreByKey,
    createOrder,
    addOrder,
    clearCart,
  } = props;
  // console.log("CartForm props", props);
  const [message, setMessage] = useState("");
  const [paymentLink, setPaymentLink] = useState("");
  const [currentOrder, setCurrentOrder] = useState(null);
  const [paymentState, setPaymentState] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = serialize(e.target, { hash: true });
  };
  useEffect(() => {
    if (paymentState == "success" && currentOrder) {
      addOrder(currentOrder);
      clearCart();
      history.push("/orders");
    }
  }, [paymentState, currentOrder]);
  useEffect(() => {
    const handler = (event) => {
      // console.log("handler fired", event);
      // console.log("handler fired", event.data);
      const { data } = event;
      // const data = JSON.parse(event.data)
      // console.log("Hello World?", data);
      if (data == "success") {
        setPaymentState("success");
        addOrder(currentOrder);
        setModalIsOpen(false);
      }
      if (data == "error") {
        setPaymentState("error");
        setModalIsOpen(false);
        window.alert("Возникла ошибка при оплате.");
      }
    };
    window.addEventListener("message", handler, true);
    // console.log('window.addEventListener("message", handler)');
    // clean up
    return () => window.removeEventListener("message", handler);
  }, []);
  // console.log("check props", props);
  return (
    <Wrapper>
      <CategoryTitle>Оформление заказа</CategoryTitle>
      <SmallLabel>Адрес доставки</SmallLabel>
      <form onSubmit={(e) => onSubmit(e)}>
        <Address isCart={true}>
          {address?.value ? address.value : "Не указано"}
        </Address>
        <Row justify="space-between" align="center">
          <CartInput
            placeholder={"Кв./офис"}
            value={userInfo?.flat}
            onChange={(e) => {
              const { value } = e.target;
              changeStoreByKey({
                key: "userInfo",
                value: {
                  ...userInfo,
                  flat: value,
                },
              });
            }}
          />
          <CartInput
            placeholder={"Подъезд"}
            value={userInfo?.entrace}
            onChange={(e) => {
              const { value } = e.target;
              changeStoreByKey({
                key: "userInfo",
                value: {
                  ...userInfo,
                  entrace: value,
                },
              });
            }}
          />
          <CartInput
            placeholder={"Этаж"}
            value={userInfo?.floor}
            onChange={(e) => {
              const { value } = e.target;
              changeStoreByKey({
                key: "userInfo",
                value: {
                  ...userInfo,
                  floor: value,
                },
              });
            }}
          />
        </Row>
        <Row justify="space-between" align="center">
          <CartInput
            placeholder={"Комментарий"}
            width="100%"
            value={userInfo?.comment}
            onChange={(e) => {
              const { value } = e.target;
              changeStoreByKey({
                key: "userInfo",
                value: {
                  ...userInfo,
                  comment: value,
                },
              });
            }}
          />
        </Row>
        <div style={{ height: 30 }} />
        <SmallLabel>Контактные данные</SmallLabel>
        <Row justify="space-between" align="center">
          <CartInput
            placeholder={"Имя"}
            width="100%"
            value={userInfo?.name}
            onChange={(e) => {
              const { value } = e.target;
              changeStoreByKey({
                key: "userInfo",
                value: {
                  ...userInfo,
                  name: value,
                },
              });
            }}
          />
        </Row>
        <Row justify="space-between" align="center">
          <CartInput
            mask="+7 (999) 999-99-99"
            placeholder={"Телефон"}
            width="100%"
            value={userInfo?.phone}
            onChange={(e) => {
              const { value } = e.target;
              changeStoreByKey({
                key: "userInfo",
                value: {
                  ...userInfo,
                  phone: value,
                },
              });
            }}
          />
        </Row>
        <Row
          className="bottom"
          justify="space-between"
          align="center"
          tablet_wrap="true"
        >
          <BackButton
            onClick={() => {
              setCartState("precheck");
            }}
          >
            Вернуться в корзину
          </BackButton>
          <div className="total">
            Итого: <span>{cart.total_price + +cart.delivery_price}</span> руб
          </div>
          <HoverButton
            onClick={() => {
              // setLoading(true);
              createOrder({
                totalPrice: cart?.total_price,
                deliveryPrice: cart?.delivery_price,
                callback: (data) => {
                  // console.log("callback data: ", data);
                  if (data && data?.paymentLink) {
                    setPaymentLink(data?.paymentLink);
                    setCurrentOrder(data?.order);
                    setModalIsOpen(true);
                  }
                },
              });
            }}
            maxWidth={"253px"}
            color={"white"}
            backgroundColor={"#5ac17d"}
            hoverBackgroundColor={"#4da76b"}
            fontSize="18px"
            hoverColor={"white"}
          >
            {"Оплатить"}
          </HoverButton>
        </Row>
        <div style={{ padding: "10px" }}>{message}</div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        contentStyle={{ inset: 0 }}
        style={{ content: { inset: 0 } }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <HoverButton
            onClick={() => {
              // setLoading(true);
              setModalIsOpen(false);
            }}
            maxWidth={"253px"}
            color={"white"}
            backgroundColor={"#5ac17d"}
            hoverBackgroundColor={"#4da76b"}
            fontSize="18px"
            hoverColor={"white"}
          >
            {"Закрыть"}
          </HoverButton>
        </div>
        <iframe
          name="target"
          src={paymentLink}
          // src="http://localhost:21080/payment/success?order_id=62"
          style={{ width: "100%", height: "100%" }}
        />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  max-width: 700px;
  ${Media.tablet} {
    & input {
      flex: 1 1 100%;
      margin-left: 0 !important;
      margin-bottom: 10px;
    }
  }
  & .bottom {
    & .back {
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
      color: #c4c4c4;
      &:hover {
        text-decoration: underline;
      }
    }
    & .total {
      padding: 10px;
      font-size: 20px;
      & span {
        color: ${Color.titleColor};
      }
    }
  }
`;
const LabelWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  & input {
    width: auto;
    border: none;
    margin-right: 10px;
  }
  ${Media.tablet} {
    margin-left: -20px;
    & input {
      width: 15px;
      height: 15px;
      flex: 1 1 15px;
      max-width: 15px;
      margin-bottom: 0px !important;
    }
  }
  // & span {
  //     position: absolute;
  //     left: 27px;
  //     top: 16px;
  // }
`;
const SmallLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${Color.titleColor};
  margin-bottom: 5px;
`;
const BackButton = styled.button`
  font-size: 14px;
  background: transparent;
`;
