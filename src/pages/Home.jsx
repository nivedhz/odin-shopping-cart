import { useProducts } from "../data/fetchProducts.jsx";

const Home = () => {
  const [data, error, loading] = useProducts();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div>
      {data.products.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
};

export default Home;
