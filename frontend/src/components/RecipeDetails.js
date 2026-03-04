import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios"; // 🔒 BACKEND DISABLED
import "../App.css";
import {
  FaClock,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function RecipeDetails() {
  const { id } = useParams(); // ✅ get id from URL
  const recipeId = parseInt(id);

  const [activeTab, setActiveTab] = useState("instructions");
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [recipe, setRecipe] = useState(null);

  /* -----------------------------
     HARDCODED RECIPES
  ------------------------------*/
  const hardcodedRecipes = [
    {
      id: 1,
      title: "Avocado Toast",
      prepTime: 10,
      images: ["https://images.unsplash.com/photo-1551183053-bf91a1d81141"],
      ingredients: ["Avocado", "Bread", "Salt", "Pepper"],
      instructions: [
        "Toast the bread",
        "Mash the avocado",
        "Spread on toast",
        "Season and serve",
      ],
    },
    {
      id: 2,
      title: "Grilled Chicken",
      prepTime: 35,
      images: ["https://images.unsplash.com/photo-1604908176997-431f3b96e95c"],
      ingredients: ["Chicken breast", "Olive oil", "Spices"],
      instructions: [
        "Season chicken",
        "Heat grill",
        "Grill 6-7 minutes per side",
        "Rest and serve",
      ],
    },
    {
      id: 3,
      title: "Pancakes",
      prepTime: 25,
      images: ["https://images.unsplash.com/photo-1495214783159-3503fd1b572d"],
      ingredients: ["Flour", "Eggs", "Milk", "Sugar"],
      instructions: [
        "Mix ingredients",
        "Heat pan",
        "Pour batter",
        "Flip and cook",
      ],
    },
    {
      id: 4,
      title: "Chocolate Cake",
      prepTime: 50,
      images: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587"],
      ingredients: ["Flour", "Cocoa", "Eggs", "Sugar", "Butter"],
      instructions: [
        "Mix dry ingredients",
        "Add wet ingredients",
        "Bake at 180°C for 35 min",
        "Let cool and serve",
      ],
    },
  ];

  /* -----------------------------
     LOAD RECIPE BY ID
  ------------------------------*/
  useEffect(() => {
    const selectedRecipe = hardcodedRecipes.find((r) => r.id === recipeId);

    setRecipe(selectedRecipe);

    /* ---------- BACKEND VERSION ----------
    axios
      .get(`http://localhost:8080/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error("Error:", err));
    ---------------------------------------- */
  }, [recipeId]);

  if (!recipe) return <p style={{ padding: "2rem" }}>Recipe not found.</p>;

  /* -----------------------------
     IMAGE NAVIGATION
  ------------------------------*/
  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? recipe.images.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === recipe.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="recipe-page">
      <div className="recipe-card">
        {/* IMAGE */}
        <div className="recipe-image-container">
          <img
            src={recipe.images[activeImage]}
            alt={recipe.title}
            className="recipe-image"
          />

          {recipe.images.length > 1 && (
            <div className="carousel-controls">
              <FaChevronLeft className="carousel-arrow" onClick={prevImage} />
              <FaChevronRight className="carousel-arrow" onClick={nextImage} />
            </div>
          )}

          <div className="recipe-title">{recipe.title}</div>
        </div>

        {/* META */}
        <div className="recipe-meta">
          <div className="prep-time">
            <FaClock /> Prep Time: {recipe.prepTime} mins
          </div>
          <FaHeart
            className={`favorite-icon ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>

        {/* TABS */}
        <div className="tab-switcher">
          <button
            className={activeTab === "instructions" ? "tab active" : "tab"}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>

          <button
            className={activeTab === "ingredients" ? "tab active" : "tab"}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        {/* CONTENT */}
        <div className="tab-content">
          {activeTab === "instructions" ? (
            <ol>
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          ) : (
            <ul>
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
