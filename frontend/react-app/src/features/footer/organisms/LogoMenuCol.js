import React from "react";
import styled from "styled-components";

import { LogoCol } from "./logo-col";
import { MenuCol } from "./menu-col";
import { Media } from '../../../lib'
export const LogoMenuCol = () => (
  <LogoMenuColStyled>
    <LogoCol />
    <MenuCol />
  </LogoMenuColStyled>
);

const LogoMenuColStyled = styled.div`
  display: flex;
  flex-direction: column;
  
`;
