import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 100%;
  transform: translateY(20%);
`;

export const CalculatorContentContainer = styled.div`
  margin: 0 auto;
  width: 25%;
  background: blue;
`;

export const CalculatorScreen = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 48px;
  background: #f3fbec;
  height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NumberPad = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 35px 35px 35px;

  li {
    list-style: none;
    padding: 30px 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
    font-size: 26px;
    text-align: center;
    font-weight: 800;
  }
`;

export const NumberInput = styled.li`
  background: #efefef;
`;

export const ClearInput = styled.li`
  background: #f1a3aa;
`;

export const OperationInput = styled.li`
  background: #f2ffa0;
`;

export const EqualInput = styled.li`
  background: #efefef;
`;
