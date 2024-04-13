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
    background: inherit;
    filter: brightness(100%);
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -o-filter: brightness(100%);
    -ms-filter: brightness(100%);
  }

  img:hover {
    filter: brightness(0%);
    -webkit-filter: brightness(50%);
    -moz-filter: brightness(50%);
    -o-filter: brightness(50%);
    -ms-filter: brightness(50%);
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
