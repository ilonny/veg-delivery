import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart, CustomButton, CartInput } from "../../features";
import { API_URL, Media } from "../../lib";
import { Form } from "../../features/subscribe-form/organisms/form";

export const Partners = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    const form = document.getElementById("partner-form");
    let dataForm = new FormData(form);
    fetch(`${API_URL}api/partner`, {
      method: "POST",
      cors: true,
      body: dataForm,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          window.alert("Успешно отправлено");
        }
      })
      .catch(() => {
        window.alert(
          "Возникла ошибка при отправке сообщения, попробуйте позже"
        );
      });
  };
  return (
    <HomeTemplate>
      <PageTitle>Стать партнером</PageTitle>
      <TextTitle>Для связи с нами, заполните форму</TextTitle>
      <FormContacts action="#" method="post" name="form" id="partner-form">
        <CartInput name="city" type="text" placeholder="Город" width="100%" />
        <br />
        <CartInput
          name="address"
          type="text"
          placeholder="Адрес ресторана"
          width="100%"
        />
        <br />
        <CartInput
          name="name"
          type="text"
          placeholder="Название ресторана"
          width="100%"
        />
        <br />
        <CartInput
          name="phone"
          type="text"
          placeholder="Телефон"
          width="100%"
          mask={"+7 (999) 999-99-99"}
        />
        <br />
        <CartInput
          name="email"
          type="email"
          placeholder="Электронная почта"
          width="100%"
        />
        <br />
        <CustomButton type="submit" text="Отправить" onClick={submitForm} />
      </FormContacts>
    </HomeTemplate>
  );
};
const TextTitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: #9f9f9f;
  ${Media.mobile} {
    font-size: 16px;
  } ;
`;
const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 600px;
`;
