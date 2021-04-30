/* eslint-disable */
import React, { useEffect, useState } from "react";
import { PageTitle, RestCard } from "../../features";
import { history, Color, Media } from "../../lib";
import { Row } from "../../features/styled-components-layout";
import styled from "styled-components";
import Loupe from "../../assets/icons/loupe.svg";
import Preloader from "../../assets/icons/preloader.gif";
import {Address} from '../address/connect'
export const RestList = (props) => {
  console.log("RestList props", props);
  const { getRestList, restaurants, address } = props;
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setLoading(true);
    getRestList({
      callback: () =>
        setTimeout(() => {
          setLoading(false);
        }, 1000),
    });
  }, [getRestList, address]);
  useEffect(() => {
    if (inputValue) {
      let searchData = [];
      restaurants.forEach((rest) => {
        searchData.push({
          value: rest.name,
          restaurant_id: rest.id,
          type: "Ресторан",
        });
        console.log("rest??", rest?.menu);
        let address = "";
        try {
          address = JSON.parse(rest?.address_json);
        } catch (e) {}
        rest?.menu?.forEach((category) => {
          category?.menu?.forEach((item) => {
            searchData.push({
              ...item,
              value: item.name,
              rest_name: rest.name,
              type: "Блюдо",
              restaurant_id: item.restaurant_id,
              id: item.id,
              address_name: address?.value,
            });
          });
        });
      });
      searchData = searchData.filter((el) => {
        return (
          el?.value?.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) !==
          -1
        );
      });
      setSearchResults(searchData);
      console.log("searchData", searchData);
    } else {
      setSearchResults([]);
    }
  }, [inputValue]);
  const search = (val) => {};
  return (
    <div>
      <PageTitle>Рестораны</PageTitle>
      <ChooseAddressInputWrapper>
        <ChooseAddressInput
          placeholder="Начните вводить название блюда или ресторана"
          value={inputValue}
          onChange={(event) => {
            const val = event.target.value;
            setInputValue(val);
          }}
        />
        {inputValue && (
          <CleanInput
            onClick={() => {
              setInputValue("");
            }}
          >
            <span>Очистить</span>
          </CleanInput>
        )}
        {!!searchResults?.length && (
          <SearchResultsWrapper>
            {searchResults.map((result) => {
              console.log("result", result);
              return (
                <div
                  style={{ padding: 10, cursor: "pointer" }}
                  onClick={() => {
                    if (result?.restaurant_id)
                      history.push(`/restaurant/${result?.restaurant_id}`);
                  }}
                >
                  {result.value} ({result.type}) ({result.rest_name} -{" "}
                  {result.address_name})
                </div>
              );
            })}
          </SearchResultsWrapper>
        )}
      </ChooseAddressInputWrapper>
      {loading && (
        <div
          style={{
            flex: 1,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <img src={Preloader} alt="loading" />{" "}
        </div>
      )}
      {!loading &&
        !restaurants?.length && ( //.length
          
          <PageTitleClone><PageTitleCloneWrapper>
            Извините, по вашему адресу отсутствуют рестораны :( <br/>
            Пожалуйста, выберите другой адрес</PageTitleCloneWrapper>
            <Address><SomeButton>{'Выбрать адрес'}</SomeButton></Address>
          </PageTitleClone>

        )}
      {!loading &&
        !!restaurants && ( //.length
          <>
            <Row justify="flex-start" wrap="wrap" margin="0px -10px;">
              {restaurants.map((restaurant) => {
                return <RestCard restaurant={restaurant} key={restaurant.id} />;
              })}
            </Row>
          </>
        )}
    </div>
  );
};
const PageTitleCloneWrapper = styled.h3`
margin: 30px auto;
color: ${Color.pageTitle};
font-weight: 900;
font-size: 34px;
text-align: center;
${Media.tablet}{
  font-size: 28px;
};
${Media.mobile}{
  font-size: 22px;
}
`;
const PageTitleClone = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;
const SomeButton = styled.button`
  padding: 15px 30px;
  max-height: 49px;
  color: #fff;
  border-radius: 10px;
  outline: none;
  transition: all 250ms ease;
  background: ${Color.buttonColor};
  &:hover {
    text-decoration: underline;
  }
  ${Media.mobile} {
    width: 100%;
    padding: 10px 30px;
    max-height: 40px;
    font-size: 14px;
  }
`;
const ChooseAddressInput = styled.input`
  background: #fff;
  height: 50px;
  padding-left: 50px;
  width: 100%;
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
  }
`;
const CloseButton = styled.button`
  background: transparent;
  outline: none;
`;
const CleanInput = styled.button`
  position: absolute;
  top: 10px;
  right: 9px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  font-weight: bold;
  font-size: 13px;
  & span {
    color: #9f9f9f;
  }
  & span:nth-child(1) {
    color: #656565;
  }
`;

const SearchResultsWrapper = styled.div`
  position: absolute;
  padding: 20px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
  z-index: 10;
  background: #fff;
`;
