import React, { useState } from "react";
import {
  CalculatorWrapper,
  CalculatorContentContainer,
  CalculatorScreen,
  NumberPad,
  NumberInput,
  ClearInput,
  OperationInput,
  EqualInput
} from "./Calculator.styles";

const Calculator = () => {
  const [currNum, setCurrNum] = useState(0);

  return (
    <CalculatorWrapper>
      <CalculatorContentContainer>
        <CalculatorScreen>
          <h1>{currNum}</h1>
        </CalculatorScreen>
        <NumberPad>
          <NumberInput>1</NumberInput>
          <NumberInput>2</NumberInput>
          <NumberInput>3</NumberInput>
          <OperationInput>+</OperationInput>
          <NumberInput>4</NumberInput>
          <NumberInput>5</NumberInput>
          <NumberInput>6</NumberInput>
          <OperationInput>-</OperationInput>
          <NumberInput>7</NumberInput>
          <NumberInput>8</NumberInput>
          <NumberInput>9</NumberInput>
          <OperationInput>*</OperationInput>
          <ClearInput>C</ClearInput>
          <NumberInput>0</NumberInput>
          <EqualInput>=</EqualInput>
          <OperationInput>/</OperationInput>
        </NumberPad>
      </CalculatorContentContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;
