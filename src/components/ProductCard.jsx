import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledCartButton } from "./styles/CartButton.styled";

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.btnGold};
  background-color: inherit;
  padding: 10px;
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
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

const StyledProductCartButton = styled(StyledCartButton)`
  transition: all 0.3s ease;
  &:hover {
    background-color: #335465;
  }
`;

export const ProductCard = ({ productData }) => {
  const {
    id,
    productName,
    price,
    description,
    category,
    image,
    sizeOptions,
  } = productData;

  return (
    <StyledProductCard>
      <img src={image[0]} alt={`${productName} image`} />
      <span id="product-category">{category}</span>
      <Link to={`/products/${id}`}>
        <h3>{productName}</h3>
      </Link>
      <p>{description.substring(0, 75)}...</p>
      <div className="size-data">
        <span>Size:</span>
        {sizeOptions.map((sizeOption) => (
          <button>sizeOption</button>
        ))}
      </div>
      <span id="price">{price}</span>
      <StyledProductCartButton>Cart</StyledProductCartButton>
    </StyledProductCard>
  );
};
