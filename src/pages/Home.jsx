import { useOutletContext } from "react-router";

const Home = () => {
  const { data, error, loading } = useOutletContext();
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
