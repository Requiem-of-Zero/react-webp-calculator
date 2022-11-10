import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 100%;
  list-style: none;
  background: ${({ buttonColor }) => buttonColor};
  border: none;
  color: ${({textColor}) => textColor};
  font-size: 24px;
  cursor: pointer;
  font-family: Black Ops One, cursive;
`;