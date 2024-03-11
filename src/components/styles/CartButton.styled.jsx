import styled from "styled-components";

import cartIcon from "../../assets/CartIcon.svg";

export const StyledCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnGold};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  color: black;
  height: 35px;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  cursor: pointer;

  img {
    height: 30px;
    width: 25px;
  }
`;
