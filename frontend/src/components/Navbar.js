import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../App.css";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = () => {
  const { t } = useTranslation("navbar");

  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const currentTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(currentTheme);
    document.body.className = currentTheme;

    const admin = localStorage.getItem("adminLoggedIn");
    setIsAdminLoggedIn(admin === "true");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleLanguageMenu = () => {
    setLangOpen(!langOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">BG Bites</Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {!isAdminLoggedIn ? (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                {t("home")}
              </Link>

              <Link to="/recipes" onClick={() => setMenuOpen(false)}>
                {t("recipes")}
              </Link>

              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder={t("search")}
                  className="me-2"
                />

                <Button variant="dark" className="nav-search">
                  {t("search")}
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Link to="/admin">Admin Dashboard</Link>
              <Link to="/admin/create-recipe">{t("createRecipe")}</Link>
              <Link to="/admin/register">{t("register")}</Link>
              <Link to="/admin/create-user">{t("createUser")}</Link>

              <Link
                to="/"
                onClick={() => {
                  localStorage.removeItem("adminLoggedIn");
                  setIsAdminLoggedIn(false);
                }}
              >
                {t("logout")}
              </Link>
            </>
          )}
        </div>
      </div>

      {!isAdminLoggedIn && (
        <div className="navbar-right">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* LANGUAGE DROPDOWN */}
          <div className="language-switcher">
            <button className="language-icon" onClick={toggleLanguageMenu}>
              <FaGlobe />
            </button>

            {langOpen && (
              <div className="language-menu">
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("nl")}>NL</button>
                <button onClick={() => changeLanguage("bg")}>БГ</button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
