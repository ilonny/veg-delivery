/* eslint-disable */
import React, { useEffect, useState } from "react";
import { PageTitle, RestCard } from "../../features";
import { Row } from "../../features/styled-components-layout";
import styled from "styled-components";
import Loupe from "../../assets/icons/loupe.svg";

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
        rest?.menu?.forEach((category) => {
          category?.menu?.forEach((item) => {
            searchData.push({
              ...item,
              value: item.name,
              rest_name: rest.name,
              type: "Блюдо",
              restaurant_id: item.restaurant_id,
              id: item.id,
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
          placeholder="Введите ваш адрес"
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
              return (
                <div style={{ padding: 10, cursor: "pointer" }}>
                  {result.value} ({result.type})
                </div>
              );
            })}
          </SearchResultsWrapper>
        )}
      </ChooseAddressInputWrapper>
      {loading && <div>Загрузка ... </div>}
      {!loading && !restaurants.length && (
        <div>Извините, по вашему адресу отсутствуют рестораны :( </div>
      )}
      {!loading && !!restaurants.length && (
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
