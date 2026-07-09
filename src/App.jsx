import { Navigate, Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useProducts } from "./data/fetchProducts.jsx";

function App() {
  const [data, error, loading] = useProducts();
  if (loading)
    return (
      <div className="loader__loading-container">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    );
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <Navbar />
      <Navigate to={"/home"} replace />
      <Outlet context={{ data }} />
    </>
  );
}

export default App;
