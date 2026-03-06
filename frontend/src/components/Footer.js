/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "../App.css"; // Link to your custom CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Email Subscription Section */}
      <div className="email-subscription">
        <h3>Fresh inspiration via email</h3>
        <div className="subscription-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe Now</button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-content container">
        <div className="footer-links">
          <div>
            <ul>
              <h5>BG Bites</h5>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="/recipes">Recipes</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Support</h5>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Community</h5>
            <p>
              Questions or feedback? We'd love to hear from you{" "}
              <a href="#">here</a>
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/bgbitesandbeyond">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@bgbitesandbeyond">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
