import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { StyledCartButton } from "./styles/CartButton.styled";
import { useRef, useState } from "react";
import InputNumber from "react-input-number";

import { addToCart, removeFromCart } from "../utils/cartFunctions";

import bagIcon from "../assets/BagIcon.svg";

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.btnGold};
  border-radius: 14px;
  background-color: inherit;
  padding: 20px;
  transition: all 0.3s ease;
  gap: 1em;

  #product-category {
    text-transform: uppercase;
    font-weight: 500;
  }

  #price {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1;
  }

  h3 {
    font-family: "OswaldMedium", sans-serif;
    font-size: 1.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .add-to-cart-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
  }

  .quantity-wrapper {
    flex: 1;
  }

  .quantity-wrapper > input[type="number"] {
    max-width: 100px;
    background: inherit;
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.btnGold};
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
  }

  .quantity-wrapper > input[type="number"]:disabled {
    opacity: 0.5;
  }

  a:hover {
    text-decoration: underline;
  }

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;

    input[type="number"]  {
      color: black;
    }
  }
`;

const StyledProductCartButton = styled(StyledCartButton)`
  transition: all 0.3s ease;
  flex: 2 1 0;
  white-space: normal;
  word-break: keep-all;
  justify-content: center;
  gap: 0.5em;

  img {
    max-width: 30px;
    max-height: 25px;
  }

  &:hover {
    background-color: #335465;
  }
`;

export const ProductCard = ({ productData }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const { isProductInCart, setCart, cart } = useOutletContext();

  const { id, productName, price, description, category, image } =
    productData;

  const imgRef = useRef(null);

  return (
    <StyledProductCard
      onMouseOver={() =>
        image.length > 1 ? (imgRef.current.src = image[1]) : null
      }
      onMouseOut={() =>
        image.length > 1 ? (imgRef.current.src = image[0]) : null
      }
    >
      <img ref={imgRef} src={image[0]} alt={`${productName} image`} />
      <span id="product-category">{category}</span>
      <Link to={`/product/${id}`}>
        <h3>{productName}</h3>
      </Link>
      <p>{description.substring(0, 75)}...</p>
      <span id="price">{price}</span>
      <form
        className="add-to-cart-wrapper"
        onSubmit={
          isProductInCart(id)
            ? (e) => removeFromCart(e, cart, setCart, id)
            : (e) =>
                addToCart(
                  e,
                  cart,
                  setCart,
                  currentQuantity,
                  setCurrentQuantity,
                  productData
                )
        }
      >
        <StyledProductCartButton type="submit">
          <>
            {isProductInCart(id) ? (
              "Remove from cart"
            ) : (
              <>
                Add to cart
                <img src={bagIcon} />
              </>
            )}
          </>
        </StyledProductCartButton>
        <div className="quantity-wrapper">
          <label htmlFor={`${id}-qty`}>Qty:</label>
          <input
            id={`${id}-qty`}
            type="number"
            disabled={isProductInCart(id)}
            min={1}
            max={100}
            step={1}
            value={currentQuantity}
            onChange={(e) => setCurrentQuantity(e.target.value)}
          />
        </div>
      </form>
    </StyledProductCard>
  );
};
