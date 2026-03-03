"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en";
import cn from "@/locales/cn";
import type { Translations } from "@/locales/en";

type LanguageCode = "EN" | "CN";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
}

const translations: Record<LanguageCode, Translations> = { EN: en, CN: cn };

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("EN");

  // Load saved language from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("app-language") as LanguageCode | null;
    if (saved === "EN" || saved === "CN") {
      setLanguageState(saved);
    }
  }, []);

  // Save to localStorage whenever language changes
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("app-language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
