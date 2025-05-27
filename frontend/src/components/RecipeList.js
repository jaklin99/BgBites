import React, { useEffect, useState } from "react";
import "../App.css";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Failed to load recipes", err));
  }, []);

  return (
    <div className="recipe-cards">
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
