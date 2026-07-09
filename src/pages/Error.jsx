import { Link } from "react-router";
import "../styles/Error.css";

const Error = ({ error }) => {
  return (
    <div className="error__container">
      <h1 className="error__heading">An unexpected Error occured:</h1>
      <p className="error__message"> {error}</p>
      <span>
        Want to go back to the{" "}
        <Link to={"/home"} className="error__home-router-link">
          Homepage?
        </Link>
      </span>
    </div>
  );
};

export default Error;
