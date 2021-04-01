import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PinSvg from "../../assets/icons/mapCheck.svg";
import CloseModal from "../../assets/icons/closeModal.svg";
import Loupe from "../../assets/icons/loupe.svg";
import { Row } from "../styled-components-layout";
import Modal from "react-modal";
import { Color, DADATA_API_KEY, MAP_API_KEY, Media } from "../../lib";
import { CustomButton } from "../../features";

import MediaQuery from "react-responsive";

import { AddressSuggestions } from "react-dadata";
import GoogleMapReact from "google-map-react";
import MapMarkerIcon from "../../assets/icons/mapCheck.svg";
// import "react-dadata/dist/react-dadata.css";

Modal.setAppElement("#root");

export const Address = (props) => {
  // console.log("Address props", props);
  const { changeAddress, children, address } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(
    address?.value ? address.value : ""
  );

  const [coordinates, setCoordinates] = useState("");

  const [savedSugg, setSavedSugg] = useState(address?.value ? address : null);
  // console.log("savedSugg", savedSugg);
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
        // console.log(result.suggestions);
      })
      .catch((error) => console.log("error", error));
  };
  const getAddress = (coordinates) => {
    const urlAddress =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    let queryAddress = coordinates;
    const token = DADATA_API_KEY;
    const optionsAddress = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify(queryAddress),
    };
    fetch(urlAddress, optionsAddress)
      .then((response) => response.json())
      .then((result) => {
        setInputValue(result.suggestions[0].value);
      })
      .catch((error) => console.log("error", error));
  };
  const mapCenter = savedSugg
    ? {
        lat: Number(savedSugg.data.geo_lat),
        lng: Number(savedSugg.data.geo_lon),
      }
    : { lat: 55.75396, lng: 37.620393 };
  return (
    <>
      <AddressWrapper
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <img src={PinSvg} alt="location" />
        <AddressLalbel>{children}</AddressLalbel>
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
                setSavedSugg(null);
                changeAddress(null); //ВОТ ЗДЕСЬ, ЕСЛИ ВДРУГ ЮЗЕР ЗАХОЧЕТ СТЕРЕТЬ ВЫБРАННЫЙ АДРЕС, ТО ЧТОБ В ИНПУТЕ ОН ТОЖЕ СТИРАЛСЯ (ЕСЛИ НАПРИМЕР ОН ВВЕЛ НЕПРАВИЛЬНЫЙ АДРЕС, ЧТОБ БЫЛА ВОЗМОЖНОСТЬ ЗАНОВО ВПИСАТЬ )
              }}
            >
              <img src={CloseModal} width="12px" height="12px" alt="Clean" />
            </CleanInput>
          </ChooseAddressInputWrapper>
          <CustomButton
            text="Подтвердить"
            disabled={!savedSugg}
            onClick={() => {
              changeAddress(savedSugg);
              setModalIsOpen(false);
            }}
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
        <MapWrapper>
          <GoogleMapReact
            bootstrapURLKeys={{ key: MAP_API_KEY }}
            //defaultCenter={{lat: 55.75396, lng: 37.620393}}
            center={mapCenter}
            defaultZoom={12}
            zoom={savedSugg ? 15 : 12}
            onClick={(map) => {
              setCoordinates({
                lat: map.lat,
                lon: map.lng,
              });
              console.log(coordinates);
              getAddress(coordinates);
            }}
          >
            <div
              lat={mapCenter.lat}
              lng={mapCenter.lng}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={MapMarkerIcon}
                alt="map marker"
                style={{ width: 20, height: 22 }}
              />
            </div>
          </GoogleMapReact>
        </MapWrapper>
      </Modal>
      <MediaQuery maxWidth={500}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={mobileStyle}
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
                  setSavedSugg(null);
                  changeAddress(null);
                }}
              >
                <img src={CloseModal} width="12px" height="12px" alt="Clean" />
              </CleanInput>
            </ChooseAddressInputWrapper>
            <CustomButton
              text="Подтвердить"
              disabled={!savedSugg}
              onClick={() => {
                changeAddress(savedSugg);
                setModalIsOpen(false);
              }}
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
          <MapWrapper>
            <GoogleMapReact
              bootstrapURLKeys={{ key: MAP_API_KEY }}
              //defaultCenter={{lat: 55.75396, lng: 37.620393}}
              center={mapCenter}
              defaultZoom={12}
              zoom={savedSugg ? 15 : 12}
              onClick={(map) => {
                setCoordinates({
                  lat: map.lat,
                  lon: map.lng,
                });
                console.log(coordinates);
                getAddress(coordinates);
              }}
            >
              <div
                lat={mapCenter.lat}
                lng={mapCenter.lng}
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={MapMarkerIcon}
                  alt="map marker"
                  style={{ width: 20, height: 22 }}
                />
              </div>
            </GoogleMapReact>
          </MapWrapper>
        </Modal>
      </MediaQuery>
    </>
  );
};

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)",
    minWidth: "610px",
    minHeight: "600px",
  },
};
const mobileStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)",
    width: "100%",
    height: "100%",
  },
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
    // background-color: #fff;
    z-index: 1;
  }
`;

const MapWrapper = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 30px;
`;

const AddressLalbel = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
`;
