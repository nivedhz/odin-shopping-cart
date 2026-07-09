import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
    ],
    errorElement: <Error />,
  },
]);

export default router;
