import {
  useLoaderData,
  useNavigate,
  Link,
  useOutletContext,
} from "react-router-dom";
import { getProductById } from "../../api/api";
import { StyledBackBtn } from "../../components/styles/BackBtn";
import styled from "styled-components";
import { useState } from "react";
import { StyledQuantityInput } from "../../components/styles/QuantityInput";

import BlankStar from "../../assets/BlankStar.svg";
import FilledStar from "../../assets/FilledStar.svg";
import HomeIcon from "../../assets/HomeIcon.svg";
import BagIcon from "../../assets/BagIcon.svg";

import { addToCart, removeFromCart } from "../../utils/cartFunctions";

import { StyledCartButton } from "../../components/styles/CartButton.styled";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .details-header {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
  }

  .details-header {
    img {
      height: 20px;
      width: 20px;
    }

    ul {
      display: inline-flex;
      list-style-type: none;
      gap: 10px;
    }

    li a {
      text-decoration: none;
      color: inherit;
    }

    li a:hover  {
      opacity: 0.7;
    }
  }
`;

const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
  justify-content: center;
  flex-wrap: wrap;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledProductMedia = styled.section`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: auto;
  gap: 20px;

  img:first-child {
    grid-column: 1 / span 3;
  }

  img {
    padding: 10px;
  }

  img:not(:first-child):hover {
    cursor: pointer;
  }
`;

const StyledProductDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1em;

  .star-rating-wrapper {
    display: flex;
  }

  .star-rating-wrapper img {
    height: 20px;
    width: 20px;
  }

  .product-rating,
  form {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  li {
    display: inline-block;
    text-transform: capitalize;
  }

  h4 {
    font-weight: 500;
    text-transform: uppercase;
  }

  h3 {
    font-size: 45px;
  }

  h3,
  .details-title {
    line-height: 45px;
    text-transform: capitalize;
    font-weight: 600;
  }

  .product-info {
    text-transform: capitalize;
    font-size: 14px;
    letter-spacing: 1px;
    min-width: 110px;
    display: inline-block;
    line-height: 25px;
  }
`;

export const loader = async ({ params }) => {
  return getProductById(
    import.meta.env.VITE_API_KEY,
    params.productId
  );
};

export const ProductDetails = () => {
  //const { item: productData } = useLoaderData();
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const { cart, setCart, isProductInCart } = useOutletContext();

  console.log(cart);

  const navigate = useNavigate();

  const productData = useLoaderData();
  const {
    id,
    category,
    customerReviews,
    colorOptions,
    description,
    image,
    occasion,
    price,
    productName,
    productRating,
    sizeOptions,
    shipping,
  } = productData;

  const { rate: productRate, count: ratingCount } = productRating;

  console.log(productData);

  const filledStarArray = Array(Math.floor(productRate)).fill(true);
  const greyStarArray = Array(5 - Math.floor(productRate)).fill(true);

  return (
    <MainWrapper>
      <div className="details-header">
        <StyledBackBtn
          label="Back to category"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "30px" }}
        ></StyledBackBtn>
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="Back to homepage" />
            </Link>
          </li>
          <li>
            <span> / </span>
          </li>
          <li>
            <Link to={`/${encodeURI(category)}`}>{category}</Link>
          </li>
        </ul>
      </div>
      <ItemDetailsWrapper>
        {" "}
        <StyledProductDetails>
          <div className="product-rating">
            <div className="star-rating-wrapper">
              {filledStarArray.map((elem, i) => (
                <img src={FilledStar} key={i} />
              ))}

              {greyStarArray.map((elem, i) => (
                <img
                  src={BlankStar}
                  key={i + Math.floor(productRate)}
                />
              ))}
            </div>
            <li>
              <span>{productRate} stars</span>
            </li>
            <li>
              <span>{ratingCount} reviews</span>
            </li>
          </div>
          <h4>{category}</h4>
          <h3>{productName}</h3>
          <span className="details-title">Product details:</span>
          <div className="product-info">
            <span>Category: </span>
            <span>{category}</span>
          </div>
          <div className="product-info">
            <span>Colors: </span>
            {colorOptions.map((color, i) => (
              <span>
                {color}
                {i + 1 < colorOptions.length ? "," : null}
              </span>
            ))}
          </div>
          <div className="product-info">
            <span>Sizes: </span>
            {sizeOptions.map((size, i) => (
              <span>
                {size}
                {i + 1 < sizeOptions.length ? "," : null}
              </span>
            ))}
          </div>
          <div className="product-info">
            <span>Delivery: </span>
            <span>
              {shipping.shippingMethod}, $ {shipping.shippingCost}
            </span>
          </div>
          <form
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
            <div>
              <label htmlFor="product-quantity">Qty: </label>
              <StyledQuantityInput
                type="number"
                id="product-quantity"
                disabled={isProductInCart(id)}
                min={1}
                max={100}
                step={1}
                value={currentQuantity}
                onChange={(e) => setCurrentQuantity(e.target.value)}
              />
            </div>
            <StyledCartButton type="submit">
              <>
                {isProductInCart(id) ? (
                  "Remove from cart"
                ) : (
                  <>
                    Add to cart
                    <img src={BagIcon} />
                  </>
                )}
              </>
            </StyledCartButton>
          </form>
        </StyledProductDetails>
        <StyledProductMedia>
          <img src={image[currentImageIndex]} alt={`Active photo`} />
          {image.map((image, i) => (
            <img
              src={image}
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              style={
                currentImageIndex === i
                  ? { border: "2px solid white" }
                  : null
              }
            />
          ))}
        </StyledProductMedia>
      </ItemDetailsWrapper>
      <div className="product-description-reviews">
        <h1>Decription & reviews goes here</h1>
      </div>
    </MainWrapper>
  );
};
