import React from "react";
import "../App.css";
import HeroSection from "./HeroSection.js";
import RecipeCard from "./RecipeCard.js";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <HeroSection />
      </section>
      <RecipeCard />
    </div>
  );
}

export default Home;
