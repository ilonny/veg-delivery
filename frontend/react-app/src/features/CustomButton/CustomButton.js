import React from "react";
import styled from "styled-components";
import { Color, Media } from "../../lib";
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
  transition: all 250ms ease;
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.disabled
      ? `
          background: gray;
        `
      : `
          background: ${Color.buttonColor};
        `};
  ${Media.mobile} {
    width: 100%;
    padding: 10px 30px;
    max-height: 40px;
    font-size: 14px;
  }
`;
