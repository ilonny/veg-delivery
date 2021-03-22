import React from "react";
import styled from "styled-components";
import {
  // Color,
  Media,
} from "../../../lib";
// import { Container } from "../../common/templates/container";
// import { SocialLinks } from "../../common/organisms";
// import { HeaderDelivery } from "../atoms/headerDelivery";
// import { MenuButton } from "../atoms/menu-button";
// import { Icon } from "../../common/atoms";
// import { Link } from "react-router-dom";
export const HeaderTemplateMobile = ({ toggleSideBar, cart }) => {
  return (
    <>
      <HeaderContent>
        <h1>Header mobile</h1>
      </HeaderContent>
    </>
  );
};

const HeaderContent = styled.div`
  padding: 30px 0px 30px 0px;
  border-bottom: 1px solid rgb(228, 228, 228);
  position: relative;
  ${Media.mobile} {
    padding: 10px 0px 10px 0px;
  }
`;
// const HeaderLeft = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const HeaderSocialLinksMargin = styled.div`
//     margin-left: 100px;
//     @media screen and (max-width: 1025px) {
//         margin-left: 30px;
//     }
//     @media screen and (max-width: 600px) {
//         display: none;
//     }
// `;
// const CartLinkSpan = styled.span`
//     color: ${Color.red};
//     text-decoration: none;
//     ${Media.tablet} {
//         display: none;
//     }
// `;
// const CartLinkSpanGray = styled.span`
//     color: ${Color.gray};
//     margin-right: 20px;
//     text-decoration: underline;
//     ${Media.tablet} {
//         display: none;
//     }
// `;

// const CartLink = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     text-decoration: none;
//     &:hover ${CartLinkSpanGray} {
//         text-decoration: none;
//     }
//     ${Media.tablet} {
//         flex-direction: column;
//         align-items: flex-end;
//     }
// `;

// const LogoWrapper = styled.div`
//     position: absolute;
//     left: 50%;
//     margin-left: -60px;
//     ${Media.mobile} {
//         margin-left: -45px;
//         width: 30px;
//         & img {
//             width: 90px;
//         }
//     }
// `;
