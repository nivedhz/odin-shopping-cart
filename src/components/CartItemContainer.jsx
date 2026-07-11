import deleteImg from "../assets/delete.svg";

const CartItem = ({ product, setCartItems }) => {
  return (
    <div className="cart-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="cart-item__item-img"
      />
      <div className="cart-item__right-container">
        <div className="cart-item__text-container">
          <div className="cart-item__heading-container">
            <h2 className="cart-item__product-title">{product.title}</h2>
            <button
              className="cart-item__delete-btn"
              onClick={() => {
                setCartItems((prevData) =>
                  prevData.filter((item) => item.id !== product.id),
                );
              }}
            >
              <img
                src={deleteImg}
                alt="Delete"
                className="cart-item__delete-img"
              />
            </button>
          </div>
          <h3>${product.price}</h3>
          <p className="cart-item__product-desc">{product.description}</p>
        </div>
        <div className="cart-item__btn-container">
          <button
            className="cart-item__minus-btn"
            onClick={() => {
              setCartItems((prevData) =>
                prevData.map((item) =>
                  item.id === product.id
                    ? item.quantity > 1
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                    : item,
                ),
              );
            }}
          >
            &#8722;
          </button>
          <input
            type="number"
            className="cart-item__text-input"
            value={product.quantity}
            onChange={(e) => {
              setCartItems((prevData) =>
                prevData.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: Number(e.target.value) }
                    : item,
                ),
              );
            }}
          />
          <button
            className="cart-item__plus-btn"
            onClick={() => {
              setCartItems((prevData) =>
                prevData.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                ),
              );
            }}
          >
            &#43;
          </button>
        </div>
      </div>
    </div>
  );
};

const CartItemContainer = ({ cartItems, setCartItems }) => {
  return (
    <div className="cart__item-container">
      <h1>Cart</h1>
      <div>
        {cartItems.length !== 0 ? (
          <div className="cart-item__item-container">
            {cartItems.map((item) => {
              return (
                <CartItem
                  product={item}
                  setCartItems={setCartItems}
                  key={item.id}
                />
              );
            })}
          </div>
        ) : (
          <h2 className="cart-item__no-items-heading">
            Add Items in the Cart to view it here!
          </h2>
        )}
      </div>
    </div>
  );
};

export default CartItemContainer;
