import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import axios from "axios";  // 🔒 BACKEND DISABLED
import "../App.css";

function RecipeList() {
  /* -----------------------------
     TEMPORARY HARDCODED RECIPES
  ------------------------------*/
  const hardcodedRecipes = [
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
  const [recipes, setRecipes] = useState(hardcodedRecipes);
  const [favorites, setFavorites] = useState([]);

  /* -----------------------------
     BACKEND FETCH (COMMENTED)
  ------------------------------*/
  /*
  useEffect(() => {
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Failed to load recipes", err));
  }, []);
  */

  /* -----------------------------
     FAVORITES
  ------------------------------*/
  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe.id}`}
            className="recipe-card-link"
            key={recipe.id}
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
      </div>
    </div>
  );
}

export default RecipeList;
