import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const HeroSection = () => {
  const { t } = useTranslation("hero");

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>{t("title")}</h1>

        <button className="btn btn-dark">{t("button")}</button>
      </div>
    </div>
  );
};

export default HeroSection;
