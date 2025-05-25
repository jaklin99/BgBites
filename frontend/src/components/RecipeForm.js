import React, { useState, useEffect } from "react";
import axios from "axios";

// Create a base axios instance
const api = axios.create({
  baseURL: "http://localhost:8080",
});

// Set up Basic Auth (replace with real credentials or pass as props)
const USERNAME = "admin";
const PASSWORD = "a1234n";
const authHeader = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

function RecipeForm({ onSuccess, editingRecipe, setEditingRecipe }) {
  const [form, setForm] = useState({
    title: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    imageUrl: "",
    videoUrl: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    if (editingRecipe) {
      setForm({
        ...editingRecipe,
        ingredients: editingRecipe.ingredients || "",
        instructions: editingRecipe.instructions || "",
      });
    }
  }, [editingRecipe]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      servings: parseInt(form.servings),
      ingredients: form.ingredients.trim(),
      instructions: form.instructions.trim(),
    };

    const request = editingRecipe
      ? api.put(`/recipes/${editingRecipe.id}`, payload, authHeader)
      : api.post("/recipes", payload, authHeader);

    request
      .then(() => {
        onSuccess();
        resetForm();
      })
      .catch((err) => {
        console.error(
          "Error saving recipe:",
          err.response?.data || err.message
        );
        alert("Failed to save recipe. Make sure you're logged in as an admin.");
      });
  };

  const resetForm = () => {
    setForm({
      title: "",
      prepTime: "",
      cookTime: "",
      servings: "",
      imageUrl: "",
      videoUrl: "",
      ingredients: "",
      instructions: "",
    });
    setEditingRecipe(null);
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h3>{editingRecipe ? "Edit Recipe" : "Add Recipe"}</h3>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Recipe Title"
        required
      />
      <input
        name="prepTime"
        value={form.prepTime}
        onChange={handleChange}
        placeholder="Prep Time"
        required
      />
      <input
        name="cookTime"
        value={form.cookTime}
        onChange={handleChange}
        placeholder="Cook Time"
        required
      />
      <input
        name="servings"
        value={form.servings}
        onChange={handleChange}
        placeholder="Servings"
        required
        type="number"
      />
      <input
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        name="videoUrl"
        value={form.videoUrl}
        onChange={handleChange}
        placeholder="Video URL"
      />
      <textarea
        name="ingredients"
        value={form.ingredients}
        onChange={handleChange}
        placeholder="Ingredients (one block of text)"
        required
      />
      <textarea
        name="instructions"
        value={form.instructions}
        onChange={handleChange}
        placeholder="Instructions (one block of text)"
        required
      />
      <button type="submit">{editingRecipe ? "Update" : "Create"}</button>
    </form>
  );
}

export default RecipeForm;
