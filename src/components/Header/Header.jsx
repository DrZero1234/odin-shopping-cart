import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { StyledDropdown } from "../styles/Dropdown/Dropdown.styles";

import PointerUp from "../../assets/PointerUp.svg";
import CartIcon from "../../assets/CartIcon.svg";

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
  border-radius: 10px 0px 0px 10px;
  flex-grow: 2;
  background-color: white;
  color: black;
  height: 50%;

  .header-nav-list {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  li a:hover {
    text-decoration: underline;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const Header = ({ categories, totalPrice, cart }) => {
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
        <ul className="header-nav-list" data-testid="categoryList">
          <li>
            <NavLink to="about">About</NavLink>
          </li>
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
            list={[]}
            totalPrice={totalPrice}
          />
          <li>Theme</li>
        </ul>
      </StyledHeaderNavWrapper>
    </StyledHeader>
  );
};
