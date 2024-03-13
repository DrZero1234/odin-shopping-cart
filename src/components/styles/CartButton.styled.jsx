import styled from "styled-components";

import cartIcon from "../../assets/CartIcon.svg";

export const StyledCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnGold};
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  color: black;
  height: 35px;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  cursor: pointer;

  .cart-btn-total-price {
    font-weight: 300;
    font-family: "OswaldRegular", sans-serif;
  }

  img {
    height: 30px;
    width: 25px;
  }
`;
