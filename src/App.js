
import React from "react";
import { hot } from 'react-hot-loader/root';
import GlobalStyle from "./globalStyles";
import Calculator from "./components/Calculator/Calculator";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <GlobalStyle />
        <Calculator />
      </>
    );
  }
}

export default hot(App);
