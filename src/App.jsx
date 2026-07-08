import { Navigate, Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Navigate to={"/home"} replace />
      <Outlet />
    </>
  );
}

export default App;
