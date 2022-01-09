import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    background: ${colors.GrayBcg};
  }
`;

export default GlobalStyle;
