import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>
        <strong>Prep:</strong> {recipe.prepTime} mins | <strong>Cook:</strong>{" "}
        {recipe.cookTime} mins | <strong>Servings:</strong> {recipe.servings}
      </p>
      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <ol>
        {recipe.instructions.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ol>
      {recipe.videoUrl && <video controls src={recipe.videoUrl} width="100%" />}
    </div>
  );
}

export default RecipeDetails;
