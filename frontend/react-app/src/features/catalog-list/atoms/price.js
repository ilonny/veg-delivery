// import React from "react";
import styled from "styled-components";
import { Color, Media } from "../../../lib";
export const Price = styled.p`
margin-top: 10px;
margin-left: 40px;
align-items: flex-start;
  color: ${Color.titleColor};
  font-weight: ${(props) => (props.isBold ? "600" : "500")};
  padding-left: ${(props) => (props.isBold ? "10px" : "0")};
  text-decoration: ${(props) => (props.isNewPrice ? "line-through" : "none")};
  ${Media.mobile} {
    text-align: center;
    flex: 1 1 100%;
    margin-bottom: 10px;
    margin-left: 40px;
    padding-left: ${(props) => (props.isBold ? "0" : "0")};
  }
`;
