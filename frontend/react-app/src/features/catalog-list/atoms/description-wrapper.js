import React from "react";
import styled from "styled-components";
import { WithTag } from "../../styled-components-layout";

// export const DescriptionWrapper = ({ children }) => {
//     return <DescriptionWrapperStyled>{children}</DescriptionWrapperStyled>
// }

// export const DescriptionWrapperStyled = styled(WithTag)`
export const DescriptionWrapper = styled(WithTag)`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
