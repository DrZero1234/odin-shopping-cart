import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { getProductById } from "../../api/api";
import { StyledBackBtn } from "../../components/styles/BackBtn";
import styled from "styled-components";
import { useState } from "react";

import BlankStar from "../../assets/BlankStar.svg";
import FilledStar from "../../assets/FilledStar.svg";
import HomeIcon from "../../assets/HomeIcon.svg";

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

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledProductMedia = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: auto;
  gap: 20px;
  height: auto;

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

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .star-rating-wrapper {
    display: flex;
  }

  .star-rating-wrapper img {
    height: 15px;
    width: 15px;
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

  const navigate = useNavigate();

  const productData = useLoaderData();
  const {
    id,
    category,
    customerReviews,
    description,
    image,
    occasion,
    price,
    productName,
    productRating,
  } = productData;
  console.log(productData);

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
          <div className="star-rating-wrapper">
            <img src={FilledStar} />
          </div>
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
    </MainWrapper>
  );
};
