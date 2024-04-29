import { useState } from "react";
import { NavLink, Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { StyledDropdown } from "../styles/Dropdown/Dropdown.styles";

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
    flex: 1 1 0;
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
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  gap: 8rem;
  flex-grow: 5;
  background-color: white;
  color: black;
  height: 50%;

  > ul {
    margin: 0 3em;
  }

  .header-nav-list {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  li a:hover {
    text-decoration: underline;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const Header = ({ categories, totalPrice, cart, setCart }) => {
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

          <p>Modernwear</p>
        </Link>
      </StyledHeaderLogo>
      <StyledHeaderNavWrapper>
        <ul className="header-nav-list" data-testid="categoryList">
          <li>
            <StyledDropdown
              childType="span"
              label="Categories"
              list={categories}
            />
          </li>
        </ul>
        <ul className="header-nav-list">
          <StyledDropdown
            childType="btn"
            label="Cart"
            list={cart}
            totalPrice={totalPrice}
            setCart={setCart}
          />
        </ul>
      </StyledHeaderNavWrapper>
    </StyledHeader>
  );
};
