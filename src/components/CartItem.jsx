import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { removeFromCart } from "../utils/cartFunctions";

import deleteIcon from "../assets/DeleteIcon.svg";

const StyledCartItemWrapper = styled.form`
  display: flex !important;
  flex: 1 1 0;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;

  .cartitem-section {
    display: inline-flex;
    align-items: center;
    gap: 1.5em;
  }

  img {
    max-width: 75px;
    max-height: 75px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    font-family: "OswaldMedium", sans-serif;
    font-weight: 500;
    font-size: 20px;
  }

  h3 &:hover {
    color: blue;
  }

  input[type="number"] {
    max-width: 60px;
    text-align: center;
  }

  button[type="submit"] {
    width: 20px;
    height: 20px;
    border: none;
    background: inherit;
  }

  button[type="submit"] img {
    filter: brightness(100%);
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -o-filter: brightness(100%);
    -ms-filter: brightness(100%);
  }

  button[type="submit"] img:hover {
    filter: brightness(0%);
    -webkit-filter: brightness(50%);
    -moz-filter: brightness(50%);
    -o-filter: brightness(50%);
    -ms-filter: brightness(50%);
  }
`;

export const CartItem = ({ productId, cart, setCart }) => {
  let productData = cart.find((product) => product.id === productId);
  const { id, productName, price, image, quantity } = productData;

  const handleQuantityChange = (e) => {
    const cart_copy = cart.slice();
    const product = cart.find((product) => product.id === id);
    if (product) {
      const productIndex = cart.indexOf(product);
      cart_copy[productIndex].quantity = e.target.value;
      console.log(cart_copy[productIndex]);
      setCart(cart_copy);
    }
    return;
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
    <StyledCartItemWrapper
      key={id}
      onSubmit={(e) => removeFromCart(e, cart, setCart, id)}
    >
      <div className="cartitem-section cartitem-info">
        <img src={image[0]} />
        <Link to={`/product/${id}`}>
          <h3>{productName}</h3>
        </Link>
      </div>
      <div className="cartitem-section cartitem-options">
        <input
          type="number"
          min="1"
          max="100"
          value={quantity}
          data-productId={id}
          onChange={(e) => handleQuantityChange(e)}
        />
        <span>{(quantity * +price.slice(1)).toFixed(2)} $</span>
        <button type="submit">
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
    </StyledCartItemWrapper>
  );
};
