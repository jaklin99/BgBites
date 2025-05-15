import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Ensure this has card styling

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/recipes/${recipe.id}`)}>
      <img src={recipe.imageUrl} alt={recipe.title} className="card-img" />
      <div className="card-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.servings} servings</p>
      </div>
    </div>
  );
}

export default RecipeCard;
