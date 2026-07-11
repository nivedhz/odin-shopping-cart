const CartItemCheckoutContainer = ({ cartItems, setCartItems }) => {
  return (
    <div className="cart-items__checkout-container">
      <h1 className="cart-items__checkout-heading">Checkout</h1>
      <div className="cart-items__price-container">
        {cartItems.map((item) => {
          return (
            <div key={item.key} className="cart-items__checkout-price">
              <span className="checkout-price__title">{item.title}</span>
              <span className="checkout-price__price">
                ${parseFloat((item.price * item.quantity).toFixed(2))}
              </span>
            </div>
          );
        })}
      </div>
      <div className="cart-items__total-container">
        <h3>Total</h3>
        <h3>
          $
          {cartItems.reduce((acc, curr) => {
            return parseFloat((acc + curr.price * curr.quantity).toFixed(2));
          }, 0)}
        </h3>
      </div>
      <button
        className="cart-items__checkout-btn"
        onClick={() => {
          setCartItems([]);
        }}
      >
        Checkout
      </button>{" "}
    </div>
  );
};
export default CartItemCheckoutContainer;
