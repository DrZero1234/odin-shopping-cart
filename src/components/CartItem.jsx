import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCartItemWrapper = styled.li`
  display: flex !important;
  flex-direction: row;
  align-items: center;
  gap: 2em;

  img {
    max-width: 75px;
    max-height: 75px;
  }

  h3 {
    font-family: "OswaldMedium", sans-serif;
    font-weight: 500;
    font-size: 20px;
  }

  input[type="number"] {
    max-width: 60px;
    text-align: center;
  }
`;

export const CartItem = ({ productData, cart, setCart }) => {
  const { id, productName, price, image, quantity } = productData;

  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleQuantityChange = (e) => {
    const cart_copy = cart.slice();
    const product = cart.find((product) => +product.id === +id);
    const productIndex = cart.indexOf(product);
    setProductQuantity(e.target.value);
    cart_copy[productIndex].quantity = productQuantity;
    console.log(cart_copy);
    setCart(cart_copy);
  };

  const handleRemove = () => {
    const productToRemove = cart.find((product) => product.id === id);
    if (productToRemove) {
      const index = cart.indexOf(productToRemove);
      const new_cart = [
        ...cart.slice(0, index),
        ...cart.slice(index + 1),
      ];
      setCart(new_cart);
    }
    return;
  };

  return (
    <StyledCartItemWrapper key={id}>
      <img src={image[0]} />
      <Link to={`product/${id}`}>
        <h3>{productName}</h3>
      </Link>
      <input
        type="number"
        min="1"
        max="100"
        value={productQuantity}
        data-productId={id}
        onChange={(e) => handleQuantityChange(e)}
      />
      <button onClick={() => handleRemove()}>Remove item</button>
    </StyledCartItemWrapper>
  );
};
