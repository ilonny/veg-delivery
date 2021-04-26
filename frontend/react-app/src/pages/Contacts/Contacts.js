import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart, CustomButton, CartInput } from "../../features";
import { API_URL, Media } from "../../lib";
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

      <ContactsContainer>
        <MailWrap>
          По всем вопросам пишите нам на почту <br />
          <Mail href="mailto:hello@vegfood.delivery">
            hello@vegfood.delivery
          </Mail>
          {/* <br /> или звоните по номеру <br />
          <Phone href="tel:+74959999999">+7 (495) 999-99-99</Phone> */}
        </MailWrap>

        <FormContacts action="#" method="post" name="form" id="contact-form">
          <p
            style={{ fontSize: "18px", color: "#9F9F9F", marginBottom: "40px" }}
          >
            Спросите нас, заполнив форму обратной связи
          </p>
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
        </FormContacts>
      </ContactsContainer>
      <CustomButton type="submit" text="Отправить" onClick={submitForm} />
    </HomeTemplate>
  );
};
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  max-width: 900px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const MailWrap = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  width: 340px;
  color: #9f9f9f;
  line-height: 1.3;
  ${Media.mobile} {
    font-size: 16px;
  }
`;
const Mail = styled.a`
  text-decoration: underline;
`;
const Phone = styled.a`
  text-decoration: underline;
`;
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
  width: 100%;
  background: #fff;
  padding: 15px;
`;
