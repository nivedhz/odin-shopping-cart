import { Navigate, Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useProducts } from "./hooks/useProducts";
import Error from "./pages/Error";
import LoadingSpinner from "./components/LoadingSpinner";
import { useState } from "react";

function App() {
  const { data, error, loading } = useProducts();
  const [cartItems, setCartItems] = useState([]);

  if (error) return <Error error={error} />;
  return (
    <>
      {loading !== false ? (
        <LoadingSpinner />
      ) : error === true ? (
        <Error error={error} />
      ) : (
        <>
          <Navbar cartItems={cartItems} />
          <Navigate to={"/home"} replace />
          <Outlet context={{ data, cartItems, setCartItems }} />
        </>
      )}
    </>
  );
}

export default App;
