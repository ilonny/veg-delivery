import React from "react";
import { Header } from "../../header";
// import { SideBar } from "../../sidebar";
import { Footer } from "../../footer";
import { Container } from "../templates/container";
export const HomeTemplate = ({ children }) => (
  <>
    <Header />
    <div style={{ background: "#fafafa", minHeight: "calc(100vh - 400px)" }}>
      <Container isGray={true}>{children}</Container>
    </div>
    <Footer />
  </>
);
