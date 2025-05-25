import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import "../App.css";

function AdminDashboard() {
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccess = (recipeTitle) => {
    setSuccessMessage(`✅ Recipe "${recipeTitle}" was successfully created!`);

    // Clear the message after a few seconds
    setTimeout(() => setSuccessMessage(""), 4000);

    // Reset editing mode
    setEditingRecipe(null);
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      {successMessage && <div className="success-banner">{successMessage}</div>}

      <RecipeForm
        onSuccess={handleSuccess}
        editingRecipe={editingRecipe}
        setEditingRecipe={setEditingRecipe}
      />
    </div>
  );
}

export default AdminDashboard;
