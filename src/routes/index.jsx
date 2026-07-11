import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

export default router;
