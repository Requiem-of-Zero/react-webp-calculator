import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, &:before, &:after{
  box-sizing: border-box;
  font-family: Black Ops One, cursive;
}
  body {
    position: relative;
    margin: 0;
    padding: 0;
    background: #808080;
  }

  button {
    background: transparent;
  }
`;

export default GlobalStyle;
