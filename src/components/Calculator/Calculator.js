import React, { useReducer } from "react";
import {
  CalculatorWrapper,
  CalculatorContentContainer,
  CalculatorScreenContainer,
  CalculatorScreen,
  CurrentOperator,
  PreviousOperator,
  NumberPad,
  NumberInput,
  ClearInput,
  OperationInput,
  EqualInput,
} from "./Calculator.styles";
import { FaMinus } from "react-icons/fa";
import { calculatorReducer } from "../../../utils/calculatorReducer";
import { BTNS } from "../../../constants/Buttons";
import DigitButton from "../Button/Button";
import isNumeric from "../../../utils/isNumeric";
import formatOperand from "../../../utils/formatter";
import { CALCULATOR_ACTIONS } from "../../../constants/Actions";
const Calculator = () => {
  const [{ currentState, previousState, operation }, dispatch] = useReducer(
    calculatorReducer,
    {}
  );

  const numPadValues = BTNS.flat();

  return (
    <CalculatorWrapper>
      <CalculatorContentContainer>
        <CalculatorScreenContainer>
          <CalculatorScreen>
            <PreviousOperator>
              {formatOperand(previousState)} {operation}
            </PreviousOperator>
            <CurrentOperator>{formatOperand(currentState)}</CurrentOperator>
          </CalculatorScreen>
        </CalculatorScreenContainer>
        <NumberPad>
          {numPadValues.map((strVal, i) => {
            let action = "";

            if (strVal === "=") {
              action = CALCULATOR_ACTIONS.COMPUTATE;
            } else if (isNumeric(strVal) || strVal === ".") {
              action = CALCULATOR_ACTIONS.ADD_DIGIT;
            } else if (strVal === "C") {
              action = CALCULATOR_ACTIONS.CLEAR;
            } else {
              action = CALCULATOR_ACTIONS.CHOOSE_OPERATION;
            }
            return (
              <li key={`numpad_item-${i+1}`}>
                <DigitButton
                  dispatch={dispatch}
                  digit={strVal}
                  action={action}
                />
              </li>
            );
          })}
        </NumberPad>
      </CalculatorContentContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;
