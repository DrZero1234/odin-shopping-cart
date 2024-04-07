import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { CartItem } from "../../components/CartItem";

const StyledCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  h1 {
    font-family: "OswaldBold", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const StyledCartList = styled.ul`
  list-style-type: none;
  border: 2px solid white;
`;

const StyledCartItem = styled.li`
  text-decoration: none;
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

  h3&:hover {
    border-bottom: 1px solid black;
  }

  &:not(&:last-child) {
    border-bottom: 2px solid white;
  }
`;

export const Checkout = () => {
  const { cart, setCart, isProductInCart, totalPrice } =
    useOutletContext();

  return (
    <StyledCartWrapper>
      <h1>Your cart</h1>

      {!cart.length ? (
        <h3>The cart is empty</h3>
      ) : (
        <StyledCartList>
          {cart.map((product, i) => (
            <li key={i}>
              <StyledCartItem>
                <CartItem
                  cart={cart}
                  setCart={setCart}
                  productId={product.id}
                />
              </StyledCartItem>
            </li>
          ))}
        </StyledCartList>
      )}
    </StyledCartWrapper>
  );
};
