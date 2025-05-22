import React from "react";
import "../App.css"; // optional: place styles in separate file or inline

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle-wrapper" onClick={toggleTheme}>
      <div
        className={`theme-toggle ${theme}`}
        role="switch"
        aria-checked={theme === "dark"}
      />
    </div>
  );
};

export default ThemeToggle;
