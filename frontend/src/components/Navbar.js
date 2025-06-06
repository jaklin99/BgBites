import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // adjust path as needed
import "../App.css";
import { Form, FormControl, Button } from "react-bootstrap";

const Navbar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = stored || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.body.className = initialTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">BG Bites</div>
        <div className="navbar-links">
          {!isAdmin ? (
            <>
              <Link to="/" className="btn btn-signup">
                Home
              </Link>
              <Link to="/recipes" className="btn btn-signup">
                Recipes
              </Link>
              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Search recipes"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark" className="search-btn">
                  Search
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/admin/create-recipe">Create Recipe</Link>
              <Link to="/admin/register">Register</Link>
              <Link to="/admin/create-user">Create User</Link>
              <Link to="/admin/login">Logout</Link>
            </>
          )}
        </div>
      </div>

      {!isAdmin && (
        <div className="navbar-right">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Link to="/signin" className="btn btn-signup">
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
