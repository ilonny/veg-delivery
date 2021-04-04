import { createGlobalStyle } from "styled-components";
import { Color } from "./lib/theme";
import "./assets/fonts/stylesheet.css";
// eslint-disable-next-line
// ${fontFace("Futura", "FuturaPT-Light", 100, "normal")}
// ${fontFace("Futura", "FuturaPT-Book", 300, "normal")}
// ${fontFace("Futura", "FuturaPT-Book", "normal", "normal")}
// ${fontFace("Futura", "FuturaPT-Bold", 600, "normal")}
// ${fontFace("Futura", "futura_pt_book", "normal", "normal")}
export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Exo 2", "Helvetica", "Open Sans", sans-serif;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    color: ${Color.black};
    background: #fafafa;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  :root {
    // font-size: 10px;
  }
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
  }
  body {
  }

  #root {
  }

  tt,
  code,
  kbd,
  samp,
  listing {
  }

  button{
    cursor: pointer;
  }
`;
