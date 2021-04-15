import React from "react";
import { FooterWrapper } from "../atoms";
import { Container } from "../../common/templates";
import { Row } from "../../styled-components-layout";
import { LogoMenuCol } from "../organisms/LogoMenuCol";
// import { ContactsCol } from "../organisms/contacts-col";
import { DownloadApp } from "../organisms/DownloadApp";
import { SocialMedia } from "../organisms/SocialMedia";

import { OtherInfo } from "../organisms/OtherInfo";
export const Footer = () => (
  <FooterWrapper>
    <Container  isGray={false}>
      <Row
        align="flex-start"
        tablet_wrap="true"
        justify="space-between"
        margin="10px 0"
        mobile_direction="column"
        tablet_justify="space-between"
      >
        <LogoMenuCol />
        {/* <ContactsCol /> */}
        <SocialMedia />
        <DownloadApp />
      </Row>
      <OtherInfo />
    </Container>
  </FooterWrapper>
);
