import _ from "lodash";

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
export default CategoryContainer;
