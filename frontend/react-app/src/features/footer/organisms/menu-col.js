import React from "react";
import styled from "styled-components";
import { ColTitle } from "../atoms";
// import { LinkStyled } from "../../homepage-about/atoms";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
import { Link } from "react-router-dom";
export const MenuCol = () => (
  <MenuColStyled>
    {/* <ColTitle>Меню</ColTitle> */}
    <Contacts>
      <ListLink>
        <Link to={"/contacts"}>Контакты</Link>
      </ListLink>
      <ListLink>
        <Link to={"/partners"}>Стать партнером</Link>
      </ListLink>
      <ListLink>
        <Link to={"/orders"}>Мои заказы</Link>
      </ListLink>
    </Contacts>
  </MenuColStyled>
);
const Contacts = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: inherit;
  margin-right: 5px;
`;
const ListLink = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  list-style: none;
  font-size: 14px;
  &:hover {
    color: #10b93d;
  }
`;
const MenuColStyled = styled.div`
  // flex: 1 1 100%;
  flex: 0;
  ${Media.tablet} {
    // flex: 1 1 50%;
    display: none;
  }
  ${Media.mobile} {
    // flex: 1 1 100%;
  }
`;
