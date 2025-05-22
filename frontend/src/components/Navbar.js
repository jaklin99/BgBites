import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../App.css";
import { Form, FormControl, Button } from "react-bootstrap";

const Navbar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">BgBites</div>
        <div className="navbar-links">
          {!isAdmin ? (
            <>
              <Link to="/" className="btn btn-signup">
                Home
              </Link>
              <Link to="/recipe" className="btn btn-signup">
                Recipe
              </Link>
              <Link to="/bundles" className="btn btn-signup">
                Bundles
              </Link>
              <Link to="/blog" className="btn btn-signup">
                Blog
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
              <Link to="/admin/dashboard">Dashboard</Link>
              <Link to="/admin/register">Register</Link>
              <Link to="/admin/create-user">Create User</Link>
              <Link to="/admin/login">Logout</Link>
            </>
          )}
        </div>
      </div>

      {!isAdmin && (
        <div className="navbar-right">
          <div className="navbar-search">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/signin" className="nav-auth-link">
            Sign in
          </Link>
          <Link to="/signup" className="btn btn-signup">
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
