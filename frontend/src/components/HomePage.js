import React, { useEffect, useState } from "react";
import "../App.css";
import HeroSection from "./HeroSection.js";
import RecipeCard from "./RecipeCard.js";
// import axios from "axios";   // 🔒 TEMPORARILY DISABLED
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  /* -----------------------------
     TEMPORARY HARDCODED DATA
  ------------------------------*/

  const dummyCategories = ["BREAKFAST", "LUNCH", "DINNER", "DESSERT"];

  const dummyRecipes = [
    {
      id: 1,
      title: "Avocado Toast",
      category: "BREAKFAST",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      servings: 1,
      time: "10 min",
    },
    {
      id: 2,
      title: "Grilled Chicken",
      category: "DINNER",
      image: "https://images.unsplash.com/photo-1604908176997-431f3b96e95c",
      servings: 2,
      time: "35 min",
    },
    {
      id: 3,
      title: "Pancakes",
      category: "BREAKFAST",
      image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d",
      servings: 3,
      time: "25 min",
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "DESSERT",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      servings: 6,
      time: "50 min",
    },
  ];

  /* -----------------------------
     STATE
  ------------------------------*/

  const [recipes, setRecipes] = useState(dummyRecipes);
  const [categories, setCategories] = useState(dummyCategories);
  const [activeCategory, setActiveCategory] = useState("ALL");

  /* -----------------------------
     BACKEND FETCH (COMMENTED)
  ------------------------------*/

  /*
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
  */

  /* -----------------------------
     FILTER LOGIC (LOCAL)
  ------------------------------*/

  const filterRecipes = (category) => {
    setActiveCategory(category);

    if (category === "ALL") {
      setRecipes(dummyRecipes);
    } else {
      const filtered = dummyRecipes.filter(
        (recipe) => recipe.category === category,
      );
      setRecipes(filtered);
    }

    /* ---------- BACKEND VERSION ----------
    if (category === "ALL") {
      fetchRecipes();
    } else {
      axios
        .get(`http://localhost:8080/recipes/filtered?category=${category}`)
        .then((res) => setRecipes(res.data))
        .catch((err) => console.error("Failed to filter recipes", err));
    }
    ---------------------------------------- */
  };

  const visibleRecipes = recipes.slice(0, 12);

  return (
    <div className="home">
      <section className="hero">
        <HeroSection />
      </section>

      {/* CATEGORY BUTTONS */}
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
            {cat}
          </button>
        ))}
      </section>

      {/* RECIPES */}
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
