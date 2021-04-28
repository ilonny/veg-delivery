import React from "react";
import styled from "styled-components";
import { Media, Color } from "../../../lib";
export const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

const StyledTitle = styled.p`
  font-size: 20px;
  margin: 20px 0;
  text-align: left;
  color: ${Color.titleColor};
  font-weight: bold;
  ${Media.smallDesktop} {
    font-size: 18px;
  }
  ${Media.mobile} {
    font-size: 14px;
  }
  
`;
