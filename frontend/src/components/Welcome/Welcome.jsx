import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="Welcome">
      <img
        className="background-img"
        src="../../../public/la-vogealle-lake.jpg"
        alt=""
      />
      <img
        className="Welcome-logo"
        src="../../../public/mountain-app-logo.png"
        alt="mountain app logo"
      />
    </div>
  );
};

export default Welcome;
