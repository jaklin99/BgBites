// src/components/RecipeList.js
import React, { useEffect, useState } from "react";
import API from "../api/api"; // uses the axios instance
import { Link } from "react-router-dom";
import "../App.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    API.get("/recipes")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setRecipes(res.data);
        } else {
          console.warn("Unexpected data format:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err.message);
      });
  }, []);

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
