import React, { useReducer } from "react";
import {
  CalculatorContentContainer,
  CalculatorScreen,
  CalculatorWrapper,
  CurrentOperator,
  NumberPad,
  PreviousOperator,
} from "./Calculator.styles";

import { CALCULATOR_ACTIONS } from "../../../constants/Actions";
import { BTNS } from "../../../constants/Buttons";
import { calculatorReducer } from "../../../utils/calculatorReducer";
import formatOperand from "../../../utils/formatter";
import isNumeric from "../../../utils/isNumeric";
import DigitButton from "../Button/Button";

const Calculator = () => {
  const [{ currentState, previousState, operation }, dispatch] = useReducer(
    calculatorReducer,
    {}
  );

  const numPadValues = BTNS.flat();

  return (
    <CalculatorWrapper>
      <CalculatorContentContainer>
        <CalculatorScreen>
          <PreviousOperator>
            {formatOperand(previousState)} {operation}
          </PreviousOperator>
          <CurrentOperator>{formatOperand(currentState)}</CurrentOperator>
        </CalculatorScreen>
        <NumberPad>
          {numPadValues.map((strVal, i) => {
            let action = "",
              spanTwo = false,
              color = "#808080",
              textColor = "#fff";
            if (strVal === "exp") {
              action = CALCULATOR_ACTIONS.CHOOSE_OPERATION;
              color = "#F2FFA0";
              textColor = "#F1A3AA";
            } else if (isNumeric(strVal) || strVal === ".") {
              action = CALCULATOR_ACTIONS.ADD_DIGIT;
            } else if (strVal === "=") {
              spanTwo = "span-two";
              action = CALCULATOR_ACTIONS.COMPUTATE;
              color = "#F7CE55";
            } else if (strVal === "x") {
              action = CALCULATOR_ACTIONS.CHOOSE_OPERATION;
              color = "#F2FFA0";
              textColor = "black";
            } else if (strVal === "C") {
              spanTwo = "span-two";
              action = CALCULATOR_ACTIONS.CLEAR;
              color = "#F1A3AA";
            } else {
              action = CALCULATOR_ACTIONS.CHOOSE_OPERATION;
              color = "#F2FFA0";
              textColor = "black";
            }

            return (
              <DigitButton
                buttonColor={color}
                textColor={textColor}
                dispatch={dispatch}
                digit={strVal}
                action={action}
                span={spanTwo}
                key={`numpad_item-${i + 1}`}
              />
            );
          })}
        </NumberPad>
      </CalculatorContentContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;
