// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../App.css";

// function RecipeDetails() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080//recipes/${id}`)
//       .then((response) => setRecipe(response.data))
//       .catch((error) => console.error("Error:", error));
//   }, [id]);

//   if (!recipe) return <p>Loading...</p>;

//   return (
//     <div className="recipe-detail">
//       <h2>{recipe.title}</h2>
//       <img src={recipe.imageUrl} alt={recipe.title} />
//       <p>
//         <strong>Prep:</strong> {recipe.prepTime} mins | <strong>Cook:</strong>{" "}
//         {recipe.cookTime} mins | <strong>Servings:</strong> {recipe.servings}
//       </p>
//       <h4>Ingredients</h4>
//       <ul>
//         {recipe.ingredients.map((i, idx) => (
//           <li key={idx}>{i}</li>
//         ))}
//       </ul>
//       <h4>Instructions</h4>
//       <ol>
//         {recipe.instructions.map((s, idx) => (
//           <li key={idx}>{s}</li>
//         ))}
//       </ol>
//       {recipe.videoUrl && <video controls src={recipe.videoUrl} width="100%" />}
//     </div>
//   );
// }

// export default RecipeDetails;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import "./App.css";

// // function RecipeDetail() {
// //   const { id } = useParams();
// //   const [recipe, setRecipe] = useState(null);

// //   useEffect(() => {
// //     axios.get(`http://localhost:8080/recipes/${id}`)
// //       .then(res => setRecipe(res.data))
// //       .catch(err => console.error("Error:", err));
// //   }, [id]);

// //   if (!recipe) return <p>Loading...</p>;

// //   return (
// //     <div className="recipe-detail">
// //       <h2>{recipe.title}</h2>
// //       <img src={recipe.imageUrl} alt={recipe.title} className="detail-img" />
// //       <div className="detail-meta">
// //         <p><strong>Prep:</strong> {recipe.prepTime}</p>
// //         <p><strong>Cook:</strong> {recipe.cookTime}</p>
// //         <p><strong>Servings:</strong> {recipe.servings}</p>
// //       </div>
// //       <div className="detail-section">
// //         <h3>Ingredients</h3>
// //         <p>{recipe.ingredients}</p>
// //         <h3>Instructions</h3>
// //         <p>{recipe.instructions}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default RecipeDetail;




import React, { useState } from "react";
import "../App.css"; // Your main CSS file
import {
  FaClock,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function RecipePage() {
  const [activeTab, setActiveTab] = useState("instructions");
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Dummy data with multiple images
  const recipe = {
    title: "Creamy Mushroom Pasta",
    prepTime: 15,
    images: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e",
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      "https://images.unsplash.com/photo-1589308078050-83d4c3c25f8e",
    ],
    instructions: ["Tralala", "Step 2 instructions", "Step 3 instructions"],
    ingredients: [
      "Chicken",
      "Lettuce",
      "Croutons",
      "Parmesan",
      "Caesar dressing",
    ],
  };

  // Navigate carousel
  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? recipe.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === recipe.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="recipe-page">
      <div className="recipe-card">
        {/* Image carousel */}
        <div className="recipe-image-container">
          <img
            src={recipe.images[activeImage]}
            alt={`${recipe.title} ${activeImage + 1}`}
            className="recipe-image"
          />
          <div className="carousel-controls">
            <FaChevronLeft className="carousel-arrow" onClick={prevImage} />
            <FaChevronRight className="carousel-arrow" onClick={nextImage} />
          </div>
          <div className="recipe-title">{recipe.title}</div>
        </div>

        {/* Meta */}
        <div className="recipe-meta">
          <div className="prep-time">
            <FaClock /> Prep Time: {recipe.prepTime} mins
          </div>
          <FaHeart
            className={`favorite-icon ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>

        {/* Tabs */}
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

        {/* Tab content */}
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

export default RecipePage;
