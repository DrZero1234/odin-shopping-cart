import { useLoaderData, useNavigate } from "react-router-dom";
import { getProductById } from "../../api/api";
import { StyledBackBtn } from "../../components/styles/BackBtn";

export const loader = async ({ params }) => {
  return getProductById(
    import.meta.env.VITE_API_KEY,
    params.productId
  );
};

export const ProductDetails = () => {
  //const { item: productData } = useLoaderData();
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
    <StyledBackBtn
      label="Back to category"
      onClick={() => navigate(-1)}
    ></StyledBackBtn>
  );
};
