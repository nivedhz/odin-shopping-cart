import { useOutletContext } from "react-router";
import "../styles/Products.css";
import { useState } from "react";
import CategoryContainer from "../components/CategoryContainer";
import ProductContainer from "../components/ProductContainer";

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
