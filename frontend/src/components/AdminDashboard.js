// import React, { useState } from "react";
// import RecipeForm from "./RecipeForm";
// import "../App.css";

// function AdminDashboard() {
//   const [editingRecipe, setEditingRecipe] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSuccess = (recipeTitle) => {
//     setSuccessMessage(`✅ Recipe "${recipeTitle}" was successfully created!`);

//     // Clear the message after a few seconds
//     setTimeout(() => setSuccessMessage(""), 4000);

//     // Reset editing mode
//     setEditingRecipe(null);
//   };

//   return (
//     <div className="dashboard">
//       <h2>Admin Dashboard</h2>

//       {successMessage && <div className="success-banner">{successMessage}</div>}

//       <RecipeForm
//         onSuccess={handleSuccess}
//         editingRecipe={editingRecipe}
//         setEditingRecipe={setEditingRecipe}
//       />
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import "../App.css";

function AdminDashboard() {
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Dummy recipes (replace later with API)
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Pancakes",
      category: "Breakfast",
      prepTime: "15 min",
    },
    {
      id: 2,
      title: "Chicken Pasta",
      category: "Dinner",
      prepTime: "35 min",
    },
    {
      id: 3,
      title: "Chocolate Cake",
      category: "Dessert",
      prepTime: "50 min",
    },
  ]);

  const handleSuccess = (recipeTitle) => {
    setSuccessMessage(`Recipe "${recipeTitle}" was successfully created!`);

    setTimeout(() => setSuccessMessage(""), 4000);
    setEditingRecipe(null);
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  return (
    <div className="admin-dashboard">
      {successMessage && <div className="success-banner">{successMessage}</div>}

      <div className="admin-layout">
        {/* Recipe Form */}
        <div className="admin-form">
          <RecipeForm
            onSuccess={handleSuccess}
            editingRecipe={editingRecipe}
            setEditingRecipe={setEditingRecipe}
          />
        </div>

        {/* Recipe List */}
        <div className="admin-recipes">
          <h3>Recipes</h3>

          <div className="admin-recipe-list">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="admin-recipe-card">
                <div>
                  <h4>{recipe.title}</h4>
                  <p>{recipe.category}</p>
                  <span>{recipe.prepTime}</span>
                </div>

                <div className="admin-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(recipe)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(recipe.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;