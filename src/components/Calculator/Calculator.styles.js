import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const CalculatorContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) 1fr;
  justify-content: center;
  width: 500px;
  margin: 20px auto 0 auto;
  padding: 0 30px 20px 0;
  background: #4c4c4c;
  border-radius: 15px;
  z-index: 8;
`;

export const CalculatorScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  width: 420px;
  height: 150px;
  background: #d5e5ae;
  grid-column: 1/-1;
  border-radius: 15px;
  word-wrap: break-word;
  word-break: break-all;
  margin-top: 40px;
  cursor: default;
`;

export const CurrentOperator = styled.div`
  padding-right: 10px;
  color: #4c4c4c;
  font-size: 42px;
`;

export const PreviousOperator = styled.div`
  padding-right: 20px;
  color: rgba(255, 255 255, 0.75);
  font-size: 24px;
`;

export const NumberPad = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(4, 6rem);
  justify-content: center;
  width: 420px;
  padding: 0;
  gap: 10px;

  .span-two {
    grid-column: span 2;
  }
`;
