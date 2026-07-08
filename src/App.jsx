import { Navigate, Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useProducts } from "./data/fetchProducts.jsx";

function App() {
  const [data, error, loading] = useProducts();

  return (
    <>
      <Navigate to={"/home"} replace />
      <Navbar />
      <Outlet context={{ data, error, loading }} />
    </>
  );
}

export default App;
