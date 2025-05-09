import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeForm from "./RecipeForm";

function AdminDashboard() {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:8080/api/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const deleteRecipe = (id) => {
    axios
      .delete(`http://localhost:8080/api/recipes/${id}`)
      .then(() => fetchRecipes());
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <RecipeForm
        onSuccess={fetchRecipes}
        editingRecipe={editingRecipe}
        setEditingRecipe={setEditingRecipe}
      />

      <h3>All Recipes</h3>
      <ul className="admin-recipe-list">
        {recipes.map((r) => (
          <li key={r.id}>
            <strong>{r.title}</strong>
            <button onClick={() => setEditingRecipe(r)}>Edit</button>
            <button onClick={() => deleteRecipe(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
