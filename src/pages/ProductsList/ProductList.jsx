import { useLoaderData } from "react-router-dom";
import { getCategoryProductList } from "../../api/api";

export const loader = async ({ params }) => {
  return getCategoryProductList(
    import.meta.env.VITE_API_KEY,
    params.categoryName
  );
};

export const ProductList = () => {
  // List of items based on the cateogory
  const { items } = useLoaderData();
  console.log(items);

  return <h1>Product List page</h1>;
};
