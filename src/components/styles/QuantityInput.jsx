import styled from "styled-components";

export const StyledQuantityInput = styled.input`
  flex: 1 1 0;
  max-width: 100px;
  background: inherit;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.btnGold};
  -moz-appearance: textfield;
  appearance: textfield;
  margin: 0;
  border-radius: 10px;
  text-align: center;
  padding: 5px;

  &:disabled {
    opacity: 0.5;
  }
`;
