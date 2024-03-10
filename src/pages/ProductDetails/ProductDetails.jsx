import { useLoaderData } from "react-router-dom";
import { getProductById } from "../../api/api";

export const loader = async ({ params }) => {
  return getProductById(
    import.meta.env.VITE_API_KEY,
    params.productId
  );
};

export const ProductDetails = () => {
  const { item: productData } = useLoaderData();
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
  console.log(id);

  return <h1>Product details page</h1>;
};
