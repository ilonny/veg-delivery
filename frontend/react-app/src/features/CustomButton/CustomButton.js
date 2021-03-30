import React from "react";
import styled from "styled-components";
import { Color } from "../../lib";
export const CustomButton = (props) => {
  const { text } = props;
  return <Button {...props}>{text}</Button>;
};

const Button = styled.button`
  //background: ${Color.buttonColor};
  padding: 15px 30px;
  max-height: 49px;
  color: #fff;
  border-radius: 10px;
  outline: none;
  ${(props) =>
    props.disabled
      ? `
          background: gray;
        `
      : `
          background: ${Color.buttonColor};
        `};
`;
