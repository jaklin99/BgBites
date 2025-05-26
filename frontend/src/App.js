import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Recipes from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./exceptions/NotFoundException";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/create-recipe" element={<AdminDashboard />} />
        <Route
          path="/admin/create-recipe"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
