import React from "react";
import { Header } from "../../header";
// import { SideBar } from "../../sidebar";
import { Footer } from "../../footer";
import { Container } from "../templates/container";
export const HomeTemplate = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);
