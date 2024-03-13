import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Layout,
  loader as layoutLoader,
} from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import {
  ProductList,
  loader as ProductListLoader,
} from "./pages/ProductsList/ProductList";
import {
  ProductDetails,
  loader as productDetailsLoader,
} from "./pages/ProductDetails/ProductDetails";
import { Checkout } from "./pages/Checkout/Checkout";

// Page template :https://preview.themeforest.net/item/mensonly-opencart-4-clothing-store-template/full_screen_preview/46788283

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} loader={layoutLoader}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path=":categoryName"
        element={<ProductList />}
        loader={ProductListLoader}
      />
      <Route
        path="product/:productId"
        element={<ProductDetails />}
        loader={productDetailsLoader}
      />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
