import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  font-family: "OswaldRegular", sans-serif
`;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
