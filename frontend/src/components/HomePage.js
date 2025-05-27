import React, { useEffect, useState } from "react";
import "../App.css";
import HeroSection from "./HeroSection.js";
import RecipeCard from "./RecipeCard.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
    fetchCategories();
  }, []);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Failed to fetch recipes", err));
  };

  const fetchCategories = () => {
    axios
      .get("http://localhost:8080/recipes/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories", err));
  };

  const filterRecipes = (category) => {
    setActiveCategory(category);
    if (category === "ALL") {
      fetchRecipes();
    } else {
      axios
        .get(`http://localhost:8080/recipes/filtered?category=${category}`)
        .then((res) => setRecipes(res.data))
        .catch((err) => console.error("Failed to filter recipes", err));
    }
  };

  const visibleRecipes = recipes.slice(0, 12); // show only 12

  return (
    <div className="home">
      <section className="hero">
        <HeroSection />
      </section>

      <section className="category-buttons container">
        <button
          className={`category-btn ${activeCategory === "ALL" ? "active" : ""}`}
          onClick={() => filterRecipes("ALL")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => filterRecipes(cat)}
          >
            {cat.replace(/_/g, " ")}
          </button>
        ))}
      </section>

      <section className="recipe-grid">
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>

      {recipes.length > 12 && (
        <div className="view-more-container">
          <button className="btn btn-dark" onClick={() => navigate("/recipes")}>
            View All Recipes
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
