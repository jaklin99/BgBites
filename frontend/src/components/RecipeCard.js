import React from "react";
import "../App.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.title} />
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        <div className="recipe-meta">
          <div>
            <i className="fa fa-clock-o" /> {recipe.cookTime} mins
          </div>
          <div>
            <i className="fa fa-users" /> {recipe.servings} servings
          </div>
          <div>
            <i className="fa fa-fire" /> {recipe.calories || 0} cal
          </div>
        </div>
        <a href={`/recipes/${recipe.id}`} className="more-btn">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
