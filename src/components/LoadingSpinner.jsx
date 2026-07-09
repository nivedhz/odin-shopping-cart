import "../styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader__loading-container">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};

export default LoadingSpinner;
