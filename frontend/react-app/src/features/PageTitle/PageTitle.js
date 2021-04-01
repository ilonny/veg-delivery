import React from "react";
import styled from "styled-components";
import {
  Color,
  // Media
} from "../../lib";
export const PageTitle = ({ children }) => {
  return <PageTitleStyled>{children}</PageTitleStyled>;
};

const PageTitleStyled = styled.h3`
  color: ${Color.pageTitle};
  font-weight: 900;
  font-size: 38px;
  margin: 30px 0;
`;
