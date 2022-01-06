import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

export default GlobalStyle;
