import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
`;

const StyledHeaderLogo = styled.div`
  display: flex;
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

const StyledHeaderNavbar = styled.nav`
  background-color: white;
  height: 50%;
  color: black;
  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  ul a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <Link to="/">
          <h1>Getclo</h1>
        </Link>
        <p>Modernwear</p>
      </StyledHeaderLogo>
      <StyledHeaderNavbar>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <span>Category</span>
          </li>
        </ul>
      </StyledHeaderNavbar>
      <StyledHeaderNavbar>
        <ul>
          <li>Cart</li>
        </ul>
      </StyledHeaderNavbar>
    </StyledHeader>
  );
};
