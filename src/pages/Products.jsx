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

const Products = () => {
  const { data } = useOutletContext();
  const categories = ["All"];
  const [activeIndex, setActiveIndex] = useState(0);
  data.products.forEach((item) => {
    if (!categories.includes(item.category)) categories.push(item.category);
  });
  return (
    <CategoryContainer
      categories={categories}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );
};

export default Products;
