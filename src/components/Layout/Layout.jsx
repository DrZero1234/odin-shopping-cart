import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styled from "styled-components";
import { GlobalStyle } from "../../App";

const StyledLayoutContainer = styled.div`
  font-family: "OswaldRegular", sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Layout = () => {
  return (
    <StyledLayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayoutContainer>
  );
};
