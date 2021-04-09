import React from "react";
import { FooterWrapper } from "../atoms";
import { Container } from "../../common/templates";
import { Row } from "../../styled-components-layout";
import { LogoMenuCol } from "../organisms/LogoMenuCol";
import { ContactsCol } from "../organisms/contacts-col";
import { OtherInfo } from "../organisms/OtherInfo"
export const Footer = () => (
  <FooterWrapper>
    <Container isGray={true}>
      <Row align="flex-start" tablet_wrap="true" justify='space-between'>
        <LogoMenuCol/>
        <ContactsCol />
      </Row>
      <OtherInfo/>
    </Container>
  </FooterWrapper>
);
