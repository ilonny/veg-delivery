import React from "react";
import styled from "styled-components";

export const OtherInfo = () => (
  <Copyright>
    <p>
      Доставка здорового питания
      <br />© VegDelivery 2021{" "}
    </p>
      <Link href="/">Политика конфиденциальности</Link>
  </Copyright>
);

const Copyright = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff;
font-size: 12px;
line-height: 16px;
color: #919399;
padding: 16px 0;
box-shadow: 0 -1px 0 0 #e3e4e6
`;

const Link = styled.a`
color: #000;
&:hover{
    color: #10b93d;
  }
`;
