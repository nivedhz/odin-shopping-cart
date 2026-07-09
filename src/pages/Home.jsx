import { Link } from "react-router";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__heading-container">
        <h1 className="home__heading-new-arrivals">NEW ARRIVALS</h1>
        <div className="home__heading-just-for-container">
          <h1 className="home__heading-just">JUST</h1>
          <h1 className="home__heading-for">FOR</h1>
        </div>
        <h1 className="home__heading-you">you</h1>
      </div>
      <Link to={"/products"} className="home__products-link">
        Go to Products &rarr;
      </Link>
    </div>
  );
};
export default Home;
