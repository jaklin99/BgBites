// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark-green text-white py-4 px-3 d-flex justify-content-between">
      <div className="footer-brand">BGBITES&BEYOND</div>
      <div className="footer-links">
        <a href="/contact" className="text-white d-block">
          Contact Us
        </a>
        <a href="/recipes" className="text-white d-block">
          Recipes
        </a>
        <a href="/about" className="text-white d-block">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
