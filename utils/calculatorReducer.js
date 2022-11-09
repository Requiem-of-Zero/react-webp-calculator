import { CALCULATOR_ACTIONS } from "../constants/Actions";
import computate from "./computate";

export const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    case CALCULATOR_ACTIONS.ADD_DIGIT:
      console.log(state)
      if(state.overwrite){
        return {
          ...state,
          currentState: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentState === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentState.includes("."))
        return state;

      if(state.operation === null && state.previousState){
        return state.previousState;
      }
      return {
        ...state,
        currentState: `${state.currentState || ""}${payload.digit}`,
      };
    case CALCULATOR_ACTIONS.CHOOSE_OPERATION:
      if (state.currentState == null && state.previousState == null) {
        return state;
      }

      if (state.currentState == null) {
        return {
          ...state,
          operation: payload.digit,
        };
      }

      if (state.previousState == null) {
        return {
          ...state,
          operation: payload.digit,
          previousState: state.currentState,
          currentState: null,
        };
      }
      return {
        ...state,
        previousState: computate(state),
        operation: payload.digit,
        currentState: null,
      };
    case CALCULATOR_ACTIONS.CLEAR:
      return {};
    case CALCULATOR_ACTIONS.COMPUTATE:
      if (
        state.operation === null ||
        state.currentState === null ||
        state.previousState === null
      ) {
        return state;
      }

      return{
        ...state,
        previousState: null,
        operation: null,
        overwrite: true,
        currentState: computate(state)
      }
  }
};
