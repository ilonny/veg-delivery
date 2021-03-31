import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PinSvg from "../../assets/icons/mapCheck.svg";
import CloseModal from "../../assets/icons/closeModal.svg";
import Loupe from "../../assets/icons/loupe.svg";
import { Row } from "../styled-components-layout";
import Modal from "react-modal";
import { Color, DADATA_API_KEY, MAP_API_KEY } from "../../lib";
import { CustomButton } from "../../features";

import { AddressSuggestions } from "react-dadata";
import GoogleMapReact from "google-map-react";
// import "react-dadata/dist/react-dadata.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)",
    minWidth: "610px",
    minHeight: 600,
  },
};

export const Address = (props) => {
  console.log("Address props", props);
  const { changeAddress } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [savedSugg, setSavedSugg] = useState(null);
  console.log("savedSugg", savedSugg);
  const getSuggestions = (val) => {
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = DADATA_API_KEY;
    let query = val;
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setSuggestions(result.suggestions);
        console.log(result.suggestions);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <AddressWrapper
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <img src={PinSvg} alt="location" />
        <p>Бакунинская д 123</p>
      </AddressWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}
        // onAfterOpen={afterOpenModal}
        // contentLabel="Example Modal"
      >
        <Row justify="space-between" align="flex-start">
          <AddressName>Выберите адрес доставки</AddressName>
          <CloseButton onClick={() => setModalIsOpen(false)}>
            <img src={CloseModal} alt="close" />
          </CloseButton>
        </Row>
        <Row
          justify="space-between"
          align="center"
          marginTop="40px !important"
          position="relative"
        >
          <ChooseAddressInputWrapper>
            <ChooseAddressInput
              placeholder="Введите ваш адрес"
              value={inputValue}
              onChange={(event) => {
                const val = event.target.value;
                setInputValue(val);
                getSuggestions(val);
              }}
            />
            <CleanInput
              onClick={() => {
                setInputValue("");
                setSuggestions([]);
              }}
            >
              <img src={CloseModal} width="12px" height="12px" alt="Clean" />
            </CleanInput>
          </ChooseAddressInputWrapper>
          <CustomButton
            text="Подтвердить"
            disabled={!savedSugg}
            onClick={() => changeAddress(savedSugg)}
          />
        </Row>
        <SpecialRow>
          <SugContainer>
            {suggestions.map((sugg) => {
              return (
                <SugWrapper
                  onClick={() => {
                    setInputValue(sugg.value);
                    setSavedSugg(sugg);
                    setSuggestions([]);
                  }}
                >
                  {sugg.value}
                </SugWrapper>
              );
            })}
          </SugContainer>
        </SpecialRow>
        <div style={{ height: 300, width: 300 }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: MAP_API_KEY }}
            //defaultCenter={{lat: 55.75396, lng: 37.620393}}
            center={
              savedSugg
                ? Object.assign(
                    {},
                    {
                      lat: Number(savedSugg.data.geo_lat),
                      lng: Number(savedSugg.data.geo_lon),
                    }
                  )
                : { lat: 55.75396, lng: 37.620393 }
            }
            defaultZoom={11}
          ></GoogleMapReact>
        </div>
      </Modal>
    </>
  );
};
const SpecialRow = styled.div`
  position: relative;
`;
const SugContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #fafafa;
  z-index: 10;

  & :hover {
    background: rgba(150, 147, 147, 0.2);
  }
`;
const SugWrapper = styled.div`
  font-size: 15px;
  padding: 17px 50px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  display: block;
  background: none;
  text-align: left;
  width: 398px;
`;
const AddressWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Exo2Regular;
  font-size: 18px;
  margin-left: 49px;
  line-height: 22px;
  color: #9f9f9f;
  background: transparent;
  outline: none;
  cursor: pointer;
  & img {
    margin-right: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const CloseButton = styled.button`
  background: transparent;
  outline: none;
`;
const CleanInput = styled.button`
  background: transparent;
  position: absolute;
  top: 10px;
  right: 9px;
  width: 30px;
  height: 30px;
  outline: none;
`;
const AddressName = styled.h2`
  font-family: "Exo 2";
  font-weight: 900;
  font-style: normal;
  font-size: 28px;
  color: ${Color.titleColor};
`;

const ChooseAddressInputBox = React.forwardRef((props, ref) => {
  return <AddressSuggestions {...props} ref={ref} />;
});

const ChooseAddressInput = styled.input`
  background: #fafafa;
  height: 50px;
  padding-left: 50px;
  width: 403px;
  border-radius: 10px;
  outline: none;
  padding-right: 32px;
`;
const ChooseAddressInputWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    background: url(${Loupe}) 0 50% no-repeat;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 13px;
    top: 13px;
    background-color: #fff;
    z-index: 1;
  }
`;
