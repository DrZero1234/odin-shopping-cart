import { Outlet, useLoaderData } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/api";

const StyledLayoutContainer = styled.div`
  font-family: "OswaldRegular", sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-width: 100vw;

  main {
    background-color: ${({ theme }) => theme.colors.mainGreen};
    margin: 5rem 10rem;
  }
`;

export const loader = async () => {
  return await getCategories(import.meta.env.VITE_API_KEY);
};

export const Layout = () => {
  const [cart, setCart] = useState([]);

  const isProductInCart = (id) => cart.find((item) => id === item.id);

  const totalPrice = cart
    .reduce(
      (currentValue, item) =>
        currentValue + item.price.slice(1) * item.quantity,
      0
    )
    .toFixed(2);
  /* official version
  const { categories } = useLoaderData();
  */
  const categories = useLoaderData();

  return (
    <>
      <StyledLayoutContainer>
        <Header
          categories={categories}
          cart={cart}
          totalPrice={totalPrice}
          setCart={setCart}
        />
        <main>
          <Outlet
            context={{ cart, setCart, isProductInCart, totalPrice }}
          />
        </main>
        <Footer />
      </StyledLayoutContainer>
    </>
  );
};
