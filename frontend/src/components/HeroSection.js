import React from "react";
import "../App.css";
import heroImage from "../assets/hero-img.png"; // use your image path

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-text">
        <h1>We are a team made up of professional chefs, kitchen & newbies</h1>
        <button className="btn btn-dark">View Recipe Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
