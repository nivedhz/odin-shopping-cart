import { useOutletContext } from "react-router";
import "../styles/Cart.css";
import CartItemContainer from "../components/CartItemContainer";
import CartItemCheckoutContainer from "../components/CartItemCheckoutContainer";

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();

  return (
    <div className="cart__container">
      <CartItemContainer cartItems={cartItems} setCartItems={setCartItems} />
      <CartItemCheckoutContainer />
    </div>
  );
};
export default Cart;
