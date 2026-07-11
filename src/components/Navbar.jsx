import { NavLink } from "react-router";
import "../styles/Navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar__container">
      <div className="navbar__heading-container">
        <NavLink
          to={"/home"}
          className="navbar__heading-link"
          title="Shopo Home"
        >
          <h1>Shopo</h1>
        </NavLink>
      </div>
      <ul className="navbar__link-container">
        <li>
          <NavLink
            to={"home"}
            className="navbar__home-link hover-underline"
            title="Home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"products"}
            className="navbar__products-link hover-underline"
            title="Products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"cart"}
            className="navbar__cart-link hover-underline"
            title="Cart"
          >
            Cart &#40;{cartItems.length}&#41;
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
