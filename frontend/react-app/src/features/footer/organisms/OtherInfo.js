import React from "react";
import styled from "styled-components";

export const OtherInfo = () => (
  <Copyright>
    <p>
      Доставка здорового питания
      <br />© VegDelivery 2021{" "}
    </p>
    <div style={{ textAlign: "right" }}>
      {/* <Link href="/privacy-policy">Политика конфиденциальности</Link> */}
      {/* <br /> */}
      <Link href="/terms-of-use">Пользовательское соглашение</Link>
      <br />
      <Link href="mailto:hello@vegfood.delivery">hello@vegfood.delivery</Link>
    </div>
  </Copyright>
);

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  font-size: 12px;
  line-height: 16px;
  color: #919399;
  padding: 16px 0px;
  box-shadow: 0 -1px 0 0 #e3e4e6;
`;

const Link = styled.a`
  color: #000;
  &:hover {
    color: #10b93d;
  }
`;
