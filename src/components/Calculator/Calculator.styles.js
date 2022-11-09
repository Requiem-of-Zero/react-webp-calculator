import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const CalculatorContentContainer = styled.div`
  margin: 0 auto;
  width: 25%;
  background: blue;
`;

export const CalculatorScreen = styled.div``;

export const NumberPad = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 35px;
  
  li {
    list-style: none;
    padding: 30px 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const NumberInput = styled.li`
  background: #EFEFEF;
`;

export const ClearInput = styled.li`
  background: #F1A3AA;
`;

export const OperationInput = styled.li`
  background: #F2FFA0
`;

export const EqualInput = styled.li`
  background: #EFEFEF;
`;