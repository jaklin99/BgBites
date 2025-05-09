import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import AdminLogin from "./admin/AdminLogin";
import AdminRegister from "./admin/AdminRegister";
import AdminDashboard from "./admin/AdminDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>BGBITES&BEYOND</h1>
        </div>
        <div className="navbar-right">
          <Link to="/">HOME</Link>
          <Link to="/recipes">RECIPES</Link>
          <button href="#contact">CONTACT</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      <footer className="footer">
        <div className="footer-left">BGBITES&BEYOND</div>
        <div className="footer-right">
          <Link to="/recipes">Recipes</Link>
          <a href="#contact">Contact Us</a>
          <a href="#about">About</a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
