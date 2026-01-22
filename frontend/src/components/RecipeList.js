// import React, { useEffect, useState } from "react";
// import "../App.css";
// import RecipeCard from "./RecipeCard";
// import axios from "axios";

// const RecipeCards = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/recipes")
//       .then((res) => setRecipes(res.data))
//       .catch((err) => console.error("Failed to load recipes", err));
//   }, []);

//   return (
//     <div className="recipe-cards">
//       <div className="recipe-grid">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeCards;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../App.css";

const dummyRecipes = [
  {
    id: 1,
    title: "Creamy Mushroom Pasta",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    time: "30 min",
    servings: 2,
  },
  {
    id: 2,
    title: "Healthy Avocado Toast",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    time: "10 min",
    servings: 1,
  },
  {
    id: 3,
    title: "Fluffy Pancakes",
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d",
    time: "25 min",
    servings: 3,
  },
];

function RecipeList() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <div className="recipe-grid">
        {dummyRecipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe.id}`}
            className="recipe-card-link"
            key={recipe.id}
          >
            <div className="recipe-card">
              <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} />

                {/* Heart icon */}
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
