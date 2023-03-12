import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --barlow: 'Barlow', sans-serif;
    --fraunces: 'Fraunces', serif;
  }

  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
    background-color: rgb(10, 182, 255);
  }

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
