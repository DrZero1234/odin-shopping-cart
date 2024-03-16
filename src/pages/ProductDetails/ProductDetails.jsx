import { useLoaderData, useNavigate } from "react-router-dom";
import { getProductById } from "../../api/api";
import { StyledBackBtn } from "../../components/styles/BackBtn";
import styled from "styled-components";
import { useState } from "react";

const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
  justify-content: center;
  width: 100%;
  height: 100%;

  .product-details {
    display: flex;
    flex: 1;
  }

  .product-media {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: repeat(3, 1fr);
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
  const [currentImage, setCurrentImage] = useState(0);

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
    <ItemDetailsWrapper>
      <div className="product-details">
        {" "}
        <StyledBackBtn
          label="Back to category"
          onClick={() => navigate(-1)}
        ></StyledBackBtn>
      </div>

      <div className="product-media">
        {image.map((image) => (
          <img src={image} />
        ))}
      </div>
    </ItemDetailsWrapper>
  );
};
