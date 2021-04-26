import React from "react";
import styled from "styled-components";
import { Media } from "../../../lib";
import { HeaderTemplateMobile } from "./mobile-header-template";
import { HeaderTemplateDektop } from "./desktop-header-template";
export const HeaderTemplate = (props) => {
  return (
    <>
    <HeaderSpacer/>
      <DesktopWrapper >
        <HeaderTemplateDektop {...props} />
      </DesktopWrapper>
      <MobileWrapper>
        <HeaderTemplateMobile {...props} />
      </MobileWrapper>
      </>
  );
};

const HeaderSpacer = styled.div`
height: 53px;
widht: 100%;
`;
const DesktopWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
  ${Media.tablet} {
    display: none;
  }
`;
export const MobileWrapper = styled.div`
  display: none;
  ${Media.tablet} {
    display: block;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
