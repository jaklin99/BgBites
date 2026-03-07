import React, { useState } from "react";
import "../App.css";
import HeroSection from "./HeroSection.js";
// import axios from "axios";   // 🔒 TEMPORARILY DISABLED
import { useNavigate, Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

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

  const [recipes, setRecipes] = useState(dummyRecipes);
  const [categories] = useState(dummyCategories);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

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
  };

  const visibleRecipes = recipes.slice(0, 12);

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
          {t("all")}
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => filterRecipes(cat)}
          >
            {t(`categories.${cat.toLowerCase()}`)}
          </button>
        ))}
      </section>

      <section className="recipe-grid">
        {visibleRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="recipe-card-link"
          >
            <div className="recipe-card">
              <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} />

                <button
                  className="favorite-icon"
                  onClick={(e) => toggleFavorite(e, recipe.id)}
                >
                  {favorites.includes(recipe.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              <div className="recipe-card-content">
                <h3>{recipe.title}</h3>

                <div className="recipe-meta">
                  <span>🍽 {recipe.servings}</span>
                  <span>⏱ {recipe.time}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {recipes.length > 12 && (
        <div className="view-more-container">
          <button className="btn btn-dark" onClick={() => navigate("/recipes")}>
            {t("viewAllRecipes")}
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
