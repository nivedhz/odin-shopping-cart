import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`Http Error, Status code: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
