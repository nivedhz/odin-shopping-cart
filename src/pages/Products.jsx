import { useOutletContext } from "react-router";
import _ from "lodash";
import "../styles/Products.css";
import { useState } from "react";

const CategoryItem = ({ category, onClick, index, activeIndex }) => {
  return (
    <li
      className={`product__category-item ${
        activeIndex === index ? "active-category" : ""
      }`}
      onClick={() => {
        onClick(index);
      }}
    >
      <button>{_.capitalize(category)}</button>
    </li>
  );
};

const CategoryContainer = ({ categories, activeIndex, setActiveIndex }) => {
  return (
    <ul className="product__category-container">
      {categories.map((category, index) => {
        return (
          <CategoryItem
            category={category}
            key={category}
            onClick={setActiveIndex}
            index={index}
            activeIndex={activeIndex}
          />
        );
      })}
    </ul>
  );
};

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

const Products = () => {
  const { data } = useOutletContext();
  const categories = ["All"];
  const [activeIndex, setActiveIndex] = useState(0);
  data.products.forEach((item) => {
    if (!categories.includes(item.category)) categories.push(item.category);
  });
  return (
    <div>
      <CategoryContainer
        categories={categories}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ProductContainer
        activeIndex={activeIndex}
        products={data.products}
        categories={categories}
      ></ProductContainer>
    </div>
  );
};

export default Products;
