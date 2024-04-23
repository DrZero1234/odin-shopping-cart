import styled from "styled-components";
import GithubLogo from "../../assets/GithubLogo.svg?react";
import OdinProjectLogo from "../../assets/OdinProjectLogo.svg?react";
import TemplateSiteIcon from "../../assets/TemplateSiteIcon.svg?react";
import ApiLogo from "../../assets/ApiLogo.svg?react";

const StyledFooterList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2em;
  text-decoration: none;
  list-style-type: none;

  svg {
    min-width: 40px;
    max-width: 80px;
    height: 60px;
    background: inherit;
    transition: all 0.3s ease-in;
  }

  svg:hover {
    transform: scale(1.1);
    g {
      fill: white;
    }
  }
`;

// https://preview.themeforest.net/item/mensonly-opencart-4-clothing-store-template/full_screen_preview/46788283

export const Footer = () => {
  return (
    <footer style={{ padding: "20px" }}>
      <StyledFooterList>
        <li>
          <a href="https://github.com/DrZero1234/odin-shopping-cart">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a href="https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart">
            <OdinProjectLogo />
          </a>
        </li>
        <li>
          <a href="https://preview.themeforest.net/item/mensonly-opencart-4-clothing-store-template/full_screen_preview/46788283">
            <TemplateSiteIcon id="template-icon" />
          </a>
        </li>
        <li>
          <a href="https://rapidapi.com/1uckyswish/api/affogato-the-ecommerce-store">
            <ApiLogo id="template-icon" />
          </a>
        </li>
      </StyledFooterList>
    </footer>
  );
};
