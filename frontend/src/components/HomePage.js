import React, { useState } from "react";
import "../App.css";
import HeroSection from "./HeroSection.js";
import { useNavigate, Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

  const dummyCategories = ["NEW", "BREAKFAST", "LUNCH", "DINNER", "DESSERT"];

  /* -----------------------------
     TEMP RECIPES (with createdAt)
  ------------------------------*/
  const dummyRecipes = [
    {
      id: 1,
      title: "Avocado Toast",
      category: "BREAKFAST",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      servings: 1,
      time: "10 min",
      createdAt: "2026-03-05", // NEW
    },
    {
      id: 2,
      title: "Grilled Chicken",
      category: "DINNER",
      image: "https://images.unsplash.com/photo-1604908176997-431f3b96e95c",
      servings: 2,
      time: "35 min",
      createdAt: "2026-02-10",
    },
    {
      id: 3,
      title: "Pancakes",
      category: "BREAKFAST",
      image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d",
      servings: 3,
      time: "25 min",
      createdAt: "2026-03-03", // NEW
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "DESSERT",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      servings: 6,
      time: "50 min",
      createdAt: "2026-01-20",
    },
  ];

  const [recipes, setRecipes] = useState(dummyRecipes);
  const [categories] = useState(dummyCategories);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [favorites, setFavorites] = useState([]);

  /* -----------------------------
     FAVORITES
  ------------------------------*/
  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  /* -----------------------------
     CHECK IF RECIPE IS NEW
  ------------------------------*/
  const isNewRecipe = (createdAt) => {
    if (!createdAt) return false;

    const createdDate = new Date(createdAt);
    const today = new Date();

    const diffTime = today - createdDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= 7;
  };

  /* -----------------------------
     FILTER LOGIC
  ------------------------------*/
  const filterRecipes = (category) => {
    setActiveCategory(category);

    if (category === "ALL") {
      setRecipes(dummyRecipes);
      return;
    }

    if (category === "NEW") {
      const newRecipes = dummyRecipes.filter((recipe) =>
        isNewRecipe(recipe.createdAt),
      );
      setRecipes(newRecipes);
      return;
    }

    const filtered = dummyRecipes.filter(
      (recipe) => recipe.category === category,
    );

    setRecipes(filtered);
  };

  const visibleRecipes = recipes.slice(0, 12);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <HeroSection />
      </section>

      {/* CATEGORY FILTER */}
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

      {/* RECIPE GRID */}
      <section className="recipe-grid">
        {visibleRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="recipe-card-link"
          >
            <div className="recipe-card">
              <div className="recipe-image-wrapper">
                {isNewRecipe(recipe.createdAt) && (
                  <span className="new-badge">NEW</span>
                )}

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

      {/* VIEW MORE */}
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
