// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./App.css"; // Ensure this has card styling

// function RecipeCard({ recipe }) {
//   const navigate = useNavigate();

//   return (
//     <div className="card" onClick={() => navigate(`/recipes/${recipe.id}`)}>
//       <img src={recipe.imageUrl} alt={recipe.title} className="card-img" />
//       <div className="card-content">
//         <h3>{recipe.title}</h3>
//         <p>{recipe.servings} servings</p>
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;
import React from "react";
import "../App.css";

const RecipeCards = () => {
  const categories = [
    "All Categories",
    "Health Focus",
    "Cuisine",
    "Ingredients",
    "Cooking Methods",
  ];

  return (
    <div className="recipe-cards container">
      <h2>Blog posts</h2>
      <div className="category-buttons">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`btn ${
              index === 0 ? "btn-dark" : "btn-outline-dark"
            } rounded-pill`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
