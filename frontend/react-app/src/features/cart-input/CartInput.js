/* eslint-disable */

import React, { useState, useRef } from "react";
import styled from "styled-components";

export const CartInput = (props) => {
  const {
    isText = false,
    value,
    onFocus,
    placeholder,
    width = "initial",
    onChange = () => {},
  } = props;
  const inputRef = useRef(null);
  return (
    <div style={{ position: "relative", width }}>
      <CartInputStyled
        type="text"
        value={value}
        ref={inputRef}
        onChange={onChange}
        onFocus={() => {
          if (onFocus) {
            onFocus();
            inputRef?.current?.blur();
          }
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

const CartInputStyled = styled.input`
  width: 100%;
  background: #fff;
  padding: 15px;
`;
