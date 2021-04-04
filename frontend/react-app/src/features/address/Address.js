import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PinSvg from "../../assets/icons/mapCheck.svg";
import CloseModal from "../../assets/icons/closeModal.svg";
import Loupe from "../../assets/icons/loupe.svg";
import { Row, RowColumn } from "../styled-components-layout";
import Modal from "react-modal";
import { Color, DADATA_API_KEY, MAP_API_KEY, Media } from "../../lib";
import { CustomButton } from "../../features";
//import { WithTag } from "../../styled-components-layout";

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

  const [dataAddress, setDataAddress] = useState({});
  const [errors, setErrors] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [savedSugg, setSavedSugg] = useState(address?.value ? address : null);
  // console.log("savedSugg", savedSugg);
  useEffect(() => {
    console.log("savedSugg hook", savedSugg);
    console.log("savedSugg hook 2", savedSugg?.data?.house);
    console.log("savedSugg hook 3", !!savedSugg && !savedSugg?.data?.house);
    let errorsLocal = [];
    if (!!savedSugg && savedSugg?.data?.city !== "Москва") {
      errorsLocal.push("В вашем городе рестораны отсутствуют");
    } else if (!!savedSugg && !savedSugg?.data?.street) {
      errorsLocal.push("Укажите название улицы");
    } else if (!!savedSugg && !savedSugg?.data?.house) {
      errorsLocal.push("Укажите номер дома");
    }
    setErrors([...errorsLocal]);
  }, [savedSugg]);
  useEffect(() => {
    if (errors?.length == 0 && savedSugg) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [errors]);
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
        setSuggestions(result.suggestions || []);
        // console.log(result.suggestions);
      })
      .catch((error) => console.log("error", error));
  };
  const getAddress = (dataAddress) => {
    console.log("dataAddress", dataAddress);
    const urlAddress =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    let queryAddress = dataAddress;
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
        const AddressName = result.suggestions[0];
        setInputValue(result.suggestions[0].value);
        setSavedSugg(result.suggestions[0]);
      })

      .catch((error) => console.log("error", error));
  };
  const mapCenter = savedSugg
    ? {
        lat: Number(dataAddress.lat) || Number(savedSugg.data.geo_lat),
        lng: Number(dataAddress.lon) || Number(savedSugg.data.geo_lon),
      }
    : { lat: 55.75396, lng: 37.620393 };
  console.log("suggestions??", suggestions);
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
      <ModalStyled
        {...props}
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}
        // onAfterOpen={afterOpenModal}
        // contentLabel="Example Modal"
      >
        <Row  >
          <AddressName>Выберите адрес доставки</AddressName>
          <CloseButton onClick={() => setModalIsOpen(false)}>
            <img src={CloseModal} alt="close" />
          </CloseButton>
        </Row>
        <RowColumn
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

            <SugContainer>
              {suggestions?.map((sugg) => {
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
              {errors?.map((err) => (
                <ErrorSuggestions>{err}</ErrorSuggestions>
              ))}
            </SugContainer>

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
            disabled={buttonDisabled}
            onClick={() => {
              changeAddress(savedSugg);
              setModalIsOpen(false);
            }}
          />
        </RowColumn>
        <MapWrapper>
          <GoogleMapReact
            bootstrapURLKeys={{ key: MAP_API_KEY }}
            //defaultCenter={{lat: 55.75396, lng: 37.620393}}
            center={mapCenter}
            defaultZoom={12}
            zoom={savedSugg ? 15 : 12}
            onClick={(map) => {
              let newCoords = {
                lat: map.lat,
                lon: map.lng,
              };
              setDataAddress(newCoords);
              getAddress(newCoords);
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
      </ModalStyled>
    </>
  );
};
const ErrorSuggestions = styled.div`
  font-size: 15px;
  padding: 7px 50px;
  cursor: auto;
  box-sizing: border-box;
  width: 100%;
  display: block;
  background: none;
  color: red;
  text-align: left;
  width: 398px;
  pointer-events: none;
`;
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
  ${Media.mobile}{
    font-size: 14px;

  }
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
  ${Media.tablet}{
    font-size: 24px;
  }
  ${Media.mobile}{
    font-size: 20px;
  }
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
  ${Media.mobile}{
    width: 400px;
    font-size: 14px;
  }
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
  ${Media.tablet}{
    height: 60%;
  width: 100%;
  }

  ${Media.mobile}{
    width: 80%;
    
  }
`;

const AddressLalbel = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  ${Media.tablet}{
    max-width: inherit;
    overflow: inherit;
    font-size: 18px;
  }
  ${Media.mobile}{
    overflow: hidden;
    max-width: 200px;
    font-size: 16px;
  }
`;

const ModalStyled = styled(Modal)`
  border: none;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  min-width: 610px;
  min-height: 610px;
  padding: 20px;
  outline: none;
  background: #fff;
  ${Media.tablet} {
    padding-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-width: initial;
    width: 100%;
    height: 100%;
  }
`;
