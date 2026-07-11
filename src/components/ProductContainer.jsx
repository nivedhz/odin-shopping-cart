import cartAddImg from "../assets/cart-add.svg";
import cartAddedImg from "../assets/cart-added.svg";

const ProductItem = ({ product, cartItems, setCartItems }) => {
  function productInCart() {
    return cartItems.includes(product);
  }
  return (
    <div className="product__item">
      <button
        className="product__item-cart-btn"
        onClick={() => {
          productInCart()
            ? setCartItems((prevData) =>
                prevData.filter((item) => item !== product),
              )
            : setCartItems((prevData) => [...prevData, product]);
        }}
      >
        <img
          src={productInCart() ? cartAddedImg : cartAddImg}
          alt="Cart"
          className="product__item-cart-img"
        />
      </button>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product__item-img"
      />
      <div className="product__item-text-container">
        <h3 className="product__item-title">{product.title}</h3>
        <p className="product__item-description">{product.description}</p>
      </div>
    </div>
  );
};

const ProductContainer = ({
  activeIndex,
  products,
  categories,
  cartItems,
  setCartItems,
}) => {
  function returnCategoryProducts() {
    if (activeIndex === 0) return products;
    return products.filter((item) => item.category === categories[activeIndex]);
  }
  const categoryProducts = returnCategoryProducts();
  return (
    <div className="product__container">
      {categoryProducts.map((product) => {
        return (
          <ProductItem
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
            key={product.id}
          ></ProductItem>
        );
      })}
    </div>
  );
};

export default ProductContainer;
