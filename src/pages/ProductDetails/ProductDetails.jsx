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

  .product-bottom {
    padding: 15px;
    border: 1px solid #595298;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    line-height: 20px;
    letter-spacing: 0.6px;

    h2 {
      font-family: OswaldMedium;
      font-weight: 600;
      font-size: 20px;
    }

    .review-wrapper {
      margin: 0 5em;
      padding: 30px 10px;
      margin-bottom: 15px;
      border: 1px solid #595298;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      flex-wrap: wrap;
    }

    .review-card {
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      img {
        border-radius: 100vw;
        border: none;
        height: 60px;
        width: 60px;
      }

      .review-user {
        font-family: "OswaldMedium";
        font-size: 18px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
      }
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
  }
`;

const StyledProductMedia = styled.section`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(2, minmax(200px, 500px));
  grid-template-columns: repeat(${(props) => props.columns}, 300px);
  gap: 20px;
  justify-items: center;

  img:first-child {
    grid-column: 1 / span 2;
  }

  img {
    padding: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:not(:first-child):hover {
    cursor: pointer;
  }
`;

const StyledStarRatingWrapper = styled.div`
  display: flex;

  img {
    width: 20px;
    height: 20px;
  }
`;

const StyledProductDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1em;

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

  .product-info #price {
    font-size: 18px;
    font-weigth: 500;
  }

  .overall-price {
    font-size: 12px;
    opacity: 0.8;
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
            <StyledStarRatingWrapper>
              {filledStarArray.map((elem, i) => (
                <img src={FilledStar} key={i} />
              ))}

              {greyStarArray.map((elem, i) => (
                <img
                  src={BlankStar}
                  key={i + Math.floor(productRate)}
                />
              ))}
            </StyledStarRatingWrapper>
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
          <div className="product-info">
            <span>Price: </span>
            <span id="price">{price}</span>
          </div>
          {currentQuantity ? (
            <div className="product-info overall-price">
              <span>
                Total: $
                {(+price.slice(1) * +currentQuantity).toFixed(2)}
              </span>
            </div>
          ) : null}
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
        <StyledProductMedia columns={image.length}>
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
      <div className="product-bottom">
        <h2>Description</h2>
        <p>{description}</p>
        <h2>Reviews</h2>
        <div className="review-wrapper">
          {customerReviews.map((review) => (
            <div className="review-card">
              <div className="review-user">
                <img src={review.customerImage} />
                <h4>{review.customerName}</h4>
              </div>
              <p>{review.customerReview}</p>
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};
