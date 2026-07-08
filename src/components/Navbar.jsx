import { Link } from "react-router";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__heading-container">
        <Link to={"/home"} className="navbar__heading-link">
          <h1>Shopo</h1>
        </Link>
      </div>
      <ul className="navbar__link-container">
        <li>
          <Link to={"home"} className="navbar__home-link hover-underline">
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"products"}
            className="navbar__products-link hover-underline"
          >
            Products
          </Link>
        </li>
        <li>
          <Link to={"cart"} className="navbar__cart-link hover-underline">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
