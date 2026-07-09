import { useOutletContext } from "react-router";
import "../styles/Home.css";

const Home = () => {
  const { data } = useOutletContext();
  return (
    <div>
      {data.products.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
};

export default Home;
