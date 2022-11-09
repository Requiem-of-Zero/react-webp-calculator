import React, { useState } from "react";
import {
  CalculatorWrapper,
  CalculatorContentContainer,
  CalculatorScreen,
  NumberPad,
  NumberInput,
  ClearInput,
  OperationInput,
  EqualInput,
} from "./Calculator.styles";
import { FaMinus } from "react-icons/fa";

const Calculator = () => {
  const [currNum, setCurrNum] = useState('');

  return (
    <CalculatorWrapper>
      <CalculatorContentContainer>
        <CalculatorScreen>
          <h1>{currNum}</h1>
        </CalculatorScreen>
        <NumberPad>
          <NumberInput
            value="1"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            1
          </NumberInput>
          <NumberInput
            value="2"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            2
          </NumberInput>
          <NumberInput
            value="3"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            3
          </NumberInput>
          <OperationInput>+</OperationInput>
          <NumberInput
            value="4"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            4
          </NumberInput>
          <NumberInput
            value="5"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            5
          </NumberInput>
          <NumberInput
            value="6"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            6
          </NumberInput>
          <OperationInput>
            <FaMinus />
          </OperationInput>
          <NumberInput
            value="7"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            7
          </NumberInput>
          <NumberInput
            value="8"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            8
          </NumberInput>
          <NumberInput
            value="9"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            9
          </NumberInput>
          <OperationInput>X</OperationInput>
          <ClearInput value="C"
          onClick={(e) => setCurrNum('')}>C</ClearInput>
          <NumberInput
            value="0"
            onClick={(e) => setCurrNum(currNum + e.target.value)}
          >
            0
          </NumberInput>
          <EqualInput>=</EqualInput>
          <OperationInput>/</OperationInput>
        </NumberPad>
      </CalculatorContentContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;
