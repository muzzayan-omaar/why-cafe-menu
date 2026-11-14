"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "./menu-data";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (en: string, ar: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect browser language
    const stored = localStorage.getItem("why-cafe-locale") as Locale | null;
    if (stored === "en" || stored === "ar") {
      setLocaleState(stored);
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage || "en";
      const isArabic = browserLang.toLowerCase().startsWith("ar");
      setLocaleState(isArabic ? "ar" : "en");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("why-cafe-locale", locale);
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (en: string, ar: string) => (locale === "ar" ? ar : en);
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Prevent flash of wrong language
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F8F1E9] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#3C2F2F] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
