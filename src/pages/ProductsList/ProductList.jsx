import { defer, useLoaderData, Await } from "react-router-dom";
import { getCategoryProductList } from "../../api/api";
import { StyledBackBtn } from "../../components/styles/BackBtn";
import styled from "styled-components";
import { ProductCard } from "../../components/ProductCard";
import { Suspense } from "react";
import { LoadingCircle } from "../../components/LoadingCircle";

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

export const loader = ({ params }) => {
  const productListPromise = getCategoryProductList(
    import.meta.env.VITE_API_KEY,
    params.categoryName
  );
  return defer({ productList: productListPromise });
};

export const ProductList = () => {
  // Original version
  const itemsPromise = useLoaderData();

  // Test version
  // const items = useLoaderData();

  return (
    <Container>
      <MainGridWrapper>
        <BackBtn label="Back to category" />
        <Suspense
          fallback={<LoadingCircle label="Fetching products..." />}
        >
          <Await resolve={itemsPromise.productList}>
            {({ items }) => {
              const itemElements =
                items.length > 0 ? (
                  items.map((item) => (
                    <ProductCard productData={item} key={item.id} />
                  ))
                ) : (
                  <h2>No products in this category</h2>
                );
              return (
                <ProductListGrid>{itemElements}</ProductListGrid>
              );
            }}
          </Await>
        </Suspense>
      </MainGridWrapper>
    </Container>
  );
};
