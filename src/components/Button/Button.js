import React from "react";
import { ButtonWrapper } from "./Button.styles";

const DigitButton = ({
  dispatch,
  digit,
  action,
  span,
  buttonColor,
  textColor,
}) => {
  return (
    <ButtonWrapper
      textColor={textColor}
      buttonColor={buttonColor}
      className={span}
      onClick={() => dispatch({ type: action, payload: { digit } })}
    >
      {digit}
    </ButtonWrapper>
  );
};

export default DigitButton;
