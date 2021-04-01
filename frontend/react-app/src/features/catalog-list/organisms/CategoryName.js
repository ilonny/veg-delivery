import React from "react";
import styled from "styled-components";
import { Row } from "../../../features/styled-components-layout";
export const CategoryName = ({ name }) => {
  return (
    <Row align="center" margin="0px 0px 20px 0px;" marginTop="0px !important">
      <Title>{name}</Title>
      <Line />
    </Row>
  );
};
const Title = styled.h5`
  color: #9f9f9f;
  font-size: 18px;
`;
const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #f0f0f0;
  margin-left: 20px;
`;
