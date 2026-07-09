import { Navigate, Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useProducts } from "./hooks/useProducts";
import Error from "./pages/Error";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const { data, error, loading } = useProducts();
  if (error) return <Error error={error} />;
  return (
    <>
      {loading !== false ? (
        <LoadingSpinner />
      ) : error === true ? (
        <Error error={error} />
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
