import React, { useReducer } from "react";
import { hot } from "react-hot-loader/root";
import GlobalStyle from "./globalStyles";
import Calculator from "./components/Calculator/Calculator";
import { calculatorReducer } from "../utils/calculatorReducer";

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Calculator />
      </>
    );
  }
}

export default hot(App);
