import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/* ENGLISH */
import navbar_en from "./en/navbar-en.json";
import footer_en from "./en/footer-en.json";
import recipeList_en from "./en/recipe-list-en.json";
import recipeDetails_en from "./en/recipe-details-en.json";
import contact_en from "./en/contact-en.json";
import home_en from "./en/home-en.json";


/* DUTCH */
import navbar_nl from "./nl/navbar-nl.json";
import footer_nl from "./nl/footer-nl.json";
import recipeList_nl from "./nl/recipe-list-nl.json";
import recipeDetails_nl from "./nl/recipe-details-nl.json";
import contact_nl from "./nl/contact-nl.json";
import home_nl from "./nl/home-nl.json";


/* BULGARIAN */
import navbar_bg from "./bg/navbar-bg.json";
import footer_bg from "./bg/footer-bg.json";
import recipeList_bg from "./bg/recipe-list-bg.json";
import recipeDetails_bg from "./bg/recipe-details-bg.json";
import contact_bg from "./bg/contact-bg.json";
import home_bg from "./bg/home-bg.json";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      navbar: navbar_en,
      footer: footer_en,
      recipeList: recipeList_en,
      recipeDetails: recipeDetails_en,
      contact: contact_en,
      home: home_en
    },

    nl: {
      navbar: navbar_nl,
      footer: footer_nl,
      recipeList: recipeList_nl,
      recipeDetails: recipeDetails_nl,
      contact: contact_nl,
      home: home_nl
    },

    bg: {
      navbar: navbar_bg,
      footer: footer_bg,
      recipeList: recipeList_bg,
      recipeDetails: recipeDetails_bg,
      contact: contact_bg,
      home: home_bg
    },
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;