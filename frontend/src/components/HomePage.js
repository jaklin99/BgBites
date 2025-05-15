import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ContactForm from "./ContactForm.js";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to BGBITES&BEYOND</h1>
        <p>Explore delicious recipes from kitchen to plate!</p>
      </section>

      <section className="cards">
        <div className="card" onClick={() => navigate("/recipes")}>
          <h3>Quick Recipes</h3>
          <p>Under 30 minutes</p>
        </div>
        <div className="card" onClick={() => navigate("/recipes")}>
          <h3>Healthy Picks</h3>
          <p>Wholesome meals</p>
        </div>
        <div className="card" onClick={() => navigate("/recipes")}>
          <h3>View All Recipes</h3>
          <p>All meals in one place</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;

