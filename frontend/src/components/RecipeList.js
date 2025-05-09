import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/recipes")
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="recipe-card"
          >
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
