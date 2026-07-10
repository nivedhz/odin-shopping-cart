const ProductContainer = ({ activeIndex, products, categories }) => {
  function returnCategoryProducts() {
    if (activeIndex === 0) return products;
    return products.filter((item) => item.category === categories[activeIndex]);
  }
  const categoryProducts = returnCategoryProducts();
  return (
    <div>
      {categoryProducts.map((product) => {
        return <li key={product.title}>{product.title}</li>;
      })}
    </div>
  );
};

export default ProductContainer;
