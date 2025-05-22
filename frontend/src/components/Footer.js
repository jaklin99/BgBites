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
        <div className="footer-brand">
          <h4>BG Bites</h4>
          <p>
            We are a team made up of professional chefs, kitchen newbies, hobby
            gourmets and pizza fans.
          </p>
          <p className="copyright">© 2025 BG Bites</p>
        </div>

        <div className="footer-links">
          <div>
            <h5>Pursue</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Data Protection</a>
              </li>
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Imprint</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Useful Information</h5>
            <ul>
              <li>
                <a href="#">Here's how it works</a>
              </li>
              <li>
                <a href="#">Become a creator</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Information and guides</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
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
            <p>Questions or feedback? We'd love to hear from you</p>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
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
