import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <nav className="navbar">
      <div className="navbar-logo">BGBITES&BEYOND</div>
      <div className="navbar-links">
        {!isAdmin ? (
          <>
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/recipes" className="nav-link">
              RECIPES
            </Link>
            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </>
        ) : (
          <>
            <Link to="/admin/dashboard" className="nav-link">
              DASHBOARD
            </Link>
            <Link to="/admin/register" className="nav-link">
              REGISTER
            </Link>
            <Link to="/admin/login" className="nav-link">
              LOGOUT
            </Link>
            <Link to="/admin/login" className="nav-link">
              CREATE USER
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
