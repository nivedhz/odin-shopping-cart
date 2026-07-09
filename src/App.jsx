import { Navigate, Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useProducts } from "./hooks/useProducts";
import Error from "./pages/Error";

function App() {
  const { data, error, loading } = useProducts();
  if (error) return <Error error={error} />;
  return (
    <>
      {loading !== false ? (
        <div className="loader__loading-container">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Navigate to={"/home"} replace />
          <Outlet context={{ data }} />
        </>
      )}
    </>
  );
}

export default App;
