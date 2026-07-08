import { Link } from "react-router";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__heading-container">
        <button className="navbar__heading-btn" title="Shopo Home">
          <Link to={"/home"} className="navbar__heading-link">
            <h1>Shopo</h1>
          </Link>
        </button>
      </div>
      <div className="navbar__link-container">
        <Link to={"home"} className="navbar__home-link">
          Home
        </Link>
        <Link to={"products"} className="navbar__products-link">
          Products
        </Link>
        <Link to={"cart"} className="navbar__cart-link">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
