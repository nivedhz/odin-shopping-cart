import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "home", element: <Home /> }],
    errorElement: <Error />,
  },
]);

export default router;
