import React, { useReducer } from "react";
import { hot } from "react-hot-loader/root";
import { calculatorReducer } from "../utils/calculatorReducer";
import Calculator from "./components/Calculator/Calculator";
import GlobalStyle from "./globalStyles";

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
