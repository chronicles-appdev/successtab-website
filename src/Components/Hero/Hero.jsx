/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";
import heroBanner from "/hero-banner.png";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-banner">
        <img src={heroBanner} alt="" />
      </div>

      <div className="hero-shape">
        <h1>
          CHOOSE YOUR <span style={{ color: "#007BFF" }}>CHILD'S</span> SUCCESS
        </h1>
        <p>... Success comes naturally to you with SuccessTab..</p>
      </div>

      <div className="hero-image">
        <img src="/hero-image.png" alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
