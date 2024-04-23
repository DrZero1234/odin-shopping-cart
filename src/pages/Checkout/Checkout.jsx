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

  .checkout-footer {
    display: flex;
    border-top: 2px solid white;
    justify-content: space-between;
    align-items: center;
  }

  .total-price,
  #clear-cart-btn {
    margin: 0 40px;
  }

  #clear-cart-btn {
    height: 50%;
    padding: 5px 20px;
    background: rgba(186, 23, 16, 0.8);
    border: none;
    color: white;
    letter-spacing: 2px;
  }

  #clear-cart-btn:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.85);
    color: rgba(186, 23, 16, 0.8);
  }

  .total-price {
    font-size: 20px;
    padding: 5px;
  }

  #price-span {
    font-family: "OswaldMedium", sans-serif;
    font-weight: 700;
  }
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
          <li>
            <div className="checkout-footer">
              <div className="total-price">
                Total price:{" "}
                <span id="price-span"> ${totalPrice}</span>
              </div>

              <button onClick={() => setCart([])} id="clear-cart-btn">
                Clear cart
              </button>
            </div>
          </li>
        </StyledCartList>
      )}
    </StyledCartWrapper>
  );
};
