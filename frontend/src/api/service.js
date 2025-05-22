import axios from "axios";

const API = import.meta.env.VITE_API_URL; // or process.env.REACT_APP_API_URL for CRA

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw error;
  }
};
