import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios"; // BACKEND DISABLED
import "../App.css";
import {
  FaClock,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function RecipeDetails() {
  const { id } = useParams();
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
  ];

  useEffect(() => {
    const selectedRecipe = hardcodedRecipes.find((r) => r.id === recipeId);
    setRecipe(selectedRecipe);

    /*
    axios
      .get(`http://localhost:8080/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error(err));
    */
  }, [recipeId]);

  if (!recipe) return <p>Recipe not found.</p>;

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
    <div className="recipe-detail-page">
      <div className="recipe-detail-card">
        {/* IMAGE */}
        <div className="recipe-detail-image-container">
          <img
            src={recipe.images[activeImage]}
            alt={recipe.title}
            className="recipe-detail-image"
          />

          {recipe.images.length > 1 && (
            <div className="recipe-detail-carousel">
              <FaChevronLeft
                className="recipe-detail-arrow"
                onClick={prevImage}
              />
              <FaChevronRight
                className="recipe-detail-arrow"
                onClick={nextImage}
              />
            </div>
          )}
        </div>

        {/* TITLE */}
        <h1 className="recipe-detail-title">{recipe.title}</h1>

        {/* META */}
        <div className="recipe-detail-meta">
          <div>
            <FaClock /> Prep Time: {recipe.prepTime} mins
          </div>
          <FaHeart
            className={`recipe-detail-fav ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          />               
        </div>

        {/* TABS */}
        <div className="recipe-detail-tabs">
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
        <div className="recipe-detail-content">
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
