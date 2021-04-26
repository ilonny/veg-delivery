import React from "react";
import styled from "styled-components";
import { ColTitle } from "../atoms";
import { SocialLinks } from "../../common/organisms";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
import { WithTag } from "../../styled-components-layout";
import { Link } from "react-router-dom";
export const SocialMedia = (props) => (
  <div></div>
  // <MenuColStyled>
  //   <ColText>Присоединяйтесь к нам в соцсетях</ColText>
  //   <div>
  //     <Row>
  //       <FirstCol>
  //         <LinkStyled>
  //           <div style={{ marginLeft: -6, marginTop: "8px" }}>
  //             <SocialLinks />
  //           </div>
  //         </LinkStyled>
  //       </FirstCol>
  //     </Row>
  //   </div>
  // </MenuColStyled>
);
const ColText = styled.p`
  color: #919399;
  font-size: 12px;
  line-height: 16px;
`;
const MenuColStyled = styled(WithTag)`
  // flex: 1 1 100%;
  //   ${Media.tablet} {
  //     flex: 1 1 50%;
  //   }
  //   ${Media.mobile} {
  //     flex: 1 1 100%;
  //   }
`;
const LinkStyled = styled.div`
  font-size: 14px;
  line-height: 23px;
  display: block;
  margin-bottom: 10px;
  & strong {
    font-weight: 500;
  }
  & a {
    text-decoration: underline;
    font-weight: 500;
    &:hover {
      text-decoration: none;
    }
  }
  & .wa {
    color: #65bb57;
  }
  & .vb {
    color: #9445c5;
  }
`;

const FirstCol = styled.div`
  margin-right: 50px;
`;
