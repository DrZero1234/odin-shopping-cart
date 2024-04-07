import styled from "styled-components";
import GithubLogo from "../../assets/GithubLogo.svg";

const StyledFooterList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  list-style-type: none;

  img {
    min-width: 40px;
    max-width: 80px;
    background: none;
  }

  img:hover {
    fill: red;
  }
`;

export const Footer = () => {
  return (
    <footer style={{ padding: "20px" }}>
      <StyledFooterList>
        <li>
          <a href="https://github.com/DrZero1234/odin-shopping-cart">
            <img src={GithubLogo} />
          </a>
        </li>
      </StyledFooterList>
    </footer>
  );
};
