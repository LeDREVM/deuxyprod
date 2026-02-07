import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  // Persist language choice in localStorage
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("deuxyprod-lang") : null;
    if (saved && (saved === "fr" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("deuxyprod-lang", newLang);
    }
  };

  const toggleLang = () => {
    switchLang(lang === "fr" ? "en" : "fr");
  };

  // Translation function: t("nav.home") => "Accueil" or "Home"
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to French
        let fallback = translations["fr"];
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key; // Return key if not found
          }
        }
        return fallback;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
