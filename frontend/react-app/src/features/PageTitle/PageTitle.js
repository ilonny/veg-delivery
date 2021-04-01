import React from "react";
import styled from "styled-components";
import {
  Color,
  // Media,
  history,
} from "../../lib";
import { Row } from "../../features/styled-components-layout";
import BackButton from "../../assets/icons/backButton.png";
export const PageTitle = ({ children, backButton = false }) => {
  return (
    <Row align="center">
      {backButton && (
        <BackButtonStyled onClick={() => history.goBack()}>
          <img src={BackButton} alt="Back" />
        </BackButtonStyled>
      )}
      <PageTitleStyled>{children}</PageTitleStyled>
    </Row>
  );
};

const PageTitleStyled = styled.h3`
  color: ${Color.pageTitle};
  font-weight: 900;
  font-size: 38px;
  margin: 30px 0;
`;

const BackButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 10px;
`;
