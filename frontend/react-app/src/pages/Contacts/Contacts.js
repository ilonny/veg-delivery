import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HomeTemplate } from "../../features/common";
import { PageTitle, Cart, CustomButton } from "../../features";
import { API_URL } from "../../lib";
import { Form } from "../../features/subscribe-form/organisms/form";

export const ContactsCompany = (props) => {
  return (
    <HomeTemplate>
      <PageTitle>Контакты</PageTitle>
      <FormContacts action="#" method="post" name="form">
        <InputContacts name="name" type="text" placeholder="Ваше имя" /> <br />
        <InputContacts name="email" type="text" placeholder="Ваша почта" />
        <br />
        <TextContacts cols="32" name="message" rows="5" placeholder="Текст сообщения"/>
        <br />
        <CustomButton type="submit" value="Отправить" />
      </FormContacts>
    </HomeTemplate>
  );
};

const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const InputContacts = styled.input`
  border: 2px solid #eee;
  border-radius: 10px
  padding: 15px;
  font-size: 16px;
`;
const TextContacts = styled.textarea`
  border: 2px solid #eee;
  font-size: 16px;
`;
