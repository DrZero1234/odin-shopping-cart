import styled from "styled-components";

export const StyledCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnGold};
  color: black;
  height: 35px;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  cursor: pointer;
`;
