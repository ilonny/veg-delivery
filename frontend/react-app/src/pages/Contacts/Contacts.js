import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart, CustomButton, CartInput } from "../../features";
import { API_URL } from "../../lib";
import { Form } from "../../features/subscribe-form/organisms/form";

export const ContactsCompany = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    let dataForm = new FormData(form);
    fetch(`${API_URL}api/contact`, {
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
    console.log(dataForm);
    console.log(form);
  };

  return (
    <HomeTemplate>
      <PageTitle>Контакты</PageTitle>
      <FormContacts action="#" method="post" name="form" id="contact-form">
        <CartInput
          name="name"
          type="text"
          placeholder="Ваше имя"
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
          placeholder="Ваша почта"
          width="100%"
        />
        <br />
        <TextContacts
          cols="32"
          name="message"
          rows="5"
          placeholder="Текст сообщения"
          width="100%"
        />
        <br />
        <CustomButton type="submit" text="Отправить" onClick={submitForm} />
      </FormContacts>
    </HomeTemplate>
  );
};

const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 600px;
`;
const InputContacts = styled.input`
  width: 100%;
  background: #fff;
  padding: 15px;
`;
const TextContacts = styled.textarea`
  // border: 2px solid #eee;
  // font-size: 16px;
  width: 100%;
  background: #fff;
  padding: 15px;
`;
