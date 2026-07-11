import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

export default router;
