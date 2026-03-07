/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../App.css";

const Footer = () => {
  const { t } = useTranslation("footer");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage(t("invalidEmail"));
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(t("success"));
        setEmail("");
      } else {
        setMessage(data.message || t("failed"));
      }
    } catch (error) {
      setMessage(t("serverError"));
    }
  };

  return (
    <footer className="footer-container">
      {/* Email Subscription */}
      <div className="email-subscription">
        <h3>{t("emailTitle")}</h3>

        <div className="subscription-form">
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubscribe}>{t("subscribe")}</button>
        </div>

        {message && <p className="subscribe-message">{message}</p>}
      </div>

      {/* Footer Content */}
      <div className="footer-content container">
        <div className="footer-links">
          <div>
            <ul>
              <h5>BG Bites</h5>

              <li>
                <a href="/">{t("about")}</a>
              </li>

              <li>
                <a href="#">{t("blog")}</a>
              </li>

              <li>
                <a href="/recipes">{t("recipes")}</a>
              </li>

              <li>
                <a href="/admin/login">{t("admin")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>{t("support")}</h5>

            <ul>
              <li>
                <a href="/contact">{t("contact")}</a>
              </li>
            </ul>

            <h5>{t("community")}</h5>

            <p>
              {t("communityText")} <a href="#">{t("here")}</a>
            </p>
          </div>

          <div>
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
