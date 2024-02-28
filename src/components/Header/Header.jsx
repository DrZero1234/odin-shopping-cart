import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    list-style-type: none;
  }

  li,
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledHeaderLogo = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0px 40px;
  flex-direction: column;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-family: "OswaldBold";
    font-size: 3rem;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

const StyledHeaderNavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  flex-grow: 2;
  background-color: white;
  color: black;
  height: 50%;

  ul {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  li a:hover {
    text-decoration: underline;
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.colors.btnGold};
    height: 35px;
    border-radius: 10px;
    padding: 0 10px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const testList = [
    { name: "lel" },
    { name: "lil" },
    { name: "lul" },
  ];

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <Link to="/">
          <h1>Getclo</h1>
        </Link>
        <p>Modernwear</p>
      </StyledHeaderLogo>
      <StyledHeaderNavWrapper>
        <ul>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>Categories</li>
        </ul>
        <ul>
          <li>
            <button>Cart</button>
          </li>
          <li>Theme</li>
        </ul>
      </StyledHeaderNavWrapper>
    </StyledHeader>
  );
};
