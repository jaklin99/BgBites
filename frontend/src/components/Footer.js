import React from "react";
import "../App.css"; // or wherever your CSS is
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">&copy; 2025 BGBITES&BEYOND</div>
      <div className="d-flex justify-content-center gap-3">
        <div className="footer-right">
          <a href="/recipes">Recipes</a> | <a href="/about">Privary Policy</a> |{" "}
          <a href="/contact">Contact</a>
        </div>
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTiktok size={20} />
      </div>
    </footer>
  );
}

export default Footer;
