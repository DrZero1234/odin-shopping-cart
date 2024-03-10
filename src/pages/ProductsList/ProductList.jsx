import { useLoaderData } from "react-router-dom";
import { getCategoryProductList } from "../../api/api";
import { StyledBackBtn } from "../../components/styles/BackBtn";
import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackBtn = styled(StyledBackBtn)`
  grid-area: backBtn;
`;

const MainGridWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "backBtn ."
    "navigationList productList"
    "navigationList productList";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
`;

const ProductListGrid = styled.div`
  display: grid;
  grid-area: productList;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1.5em;
`;

export const loader = async ({ params }) => {
  return getCategoryProductList(
    import.meta.env.VITE_API_KEY,
    params.categoryName
  );
};

export const ProductList = () => {
  /* List of items based on the cateogory (original)
  const { items } = useLoaderData();
  */

  const items = useLoaderData();

  console.log(items);

  return (
    <Container>
      <MainGridWrapper>
        <BackBtn label="Back to category" />
        <ProductListGrid>
          {items.length > 0 ? (
            items.map((item) => <ProductCard productData={item} />)
          ) : (
            <h2>No items in this category</h2>
          )}
        </ProductListGrid>
      </MainGridWrapper>
    </Container>
  );
};
