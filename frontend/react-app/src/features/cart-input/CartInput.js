/* eslint-disable */

import React, { useState, useRef } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

export const CartInput = (props) => {
  const {
    isText = false,
    value,
    onFocus,
    placeholder,
    width = "initial",
    onChange = () => {},
    mask,
  } = props;
  const inputRef = useRef(null);
  return (
    <div style={{ position: "relative", width }}>
      <InputMask
        mask={mask}
        // type="text"
        disabled={false}
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
      >
        <CartInputStyled type="text" />
      </InputMask>
    </div>
  );
};

const CartInputStyled = styled.input`
  width: 100%;
  background: #fff;
  padding: 15px;
`;
