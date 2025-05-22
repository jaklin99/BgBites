import React from "react";
import "../App.css";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme === "dark" ? "dark" : "light"}`}
      aria-label="Toggle Dark Mode"
    />
  );
};

export default ThemeToggle;
