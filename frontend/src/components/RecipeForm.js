import React, { useState, useEffect } from "react";
import axios from "axios";

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
        ingredients: editingRecipe.ingredients.join("\n"),
        instructions: editingRecipe.instructions.join("\n"),
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
      ingredients: form.ingredients.split("\n"),
      instructions: form.instructions.split("\n"),
    };

    const request = editingRecipe
      ? axios.put(
          `http://localhost:8080/api/recipes/${editingRecipe.id}`,
          payload
        )
      : axios.post("http://localhost:8080/api/recipes", payload);

    request
      .then(() => {
        onSuccess();
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
      })
      .catch((err) => console.error(err));
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
        placeholder="Prep Time (mins)"
        required
      />
      <input
        name="cookTime"
        value={form.cookTime}
        onChange={handleChange}
        placeholder="Cook Time (mins)"
        required
      />
      <input
        name="servings"
        value={form.servings}
        onChange={handleChange}
        placeholder="Servings"
        required
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
        placeholder="Ingredients (one per line)"
        required
      />
      <textarea
        name="instructions"
        value={form.instructions}
        onChange={handleChange}
        placeholder="Instructions (one per line)"
        required
      />
      <button type="submit">{editingRecipe ? "Update" : "Create"}</button>
    </form>
  );
}

export default RecipeForm;
