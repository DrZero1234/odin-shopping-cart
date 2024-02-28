import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styled from "styled-components";
import { useState } from "react";

const StyledLayoutContainer = styled.div`
  font-family: "OswaldRegular", sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-width: 100vw;

  main {
    background-color: ${({ theme }) => theme.colors.mainGreen};
    padding: 20px 40px;
  }
`;

export const Layout = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <StyledLayoutContainer>
        <Header />
        <main>
          <Outlet context={{ cart, setCart }} />
        </main>
        <Footer />
      </StyledLayoutContainer>
    </>
  );
};
