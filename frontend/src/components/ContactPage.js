import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // backend later

    setShowMessage(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={t("message")}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">{t("send")}</button>
        </form>

        {showMessage && <div className="success-popup">{t("success")}</div>}
      </div>
    </div>
  );
};

export default ContactPage;
