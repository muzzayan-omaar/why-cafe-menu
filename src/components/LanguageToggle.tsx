"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#3C2F2F]/15 text-sm font-medium text-[#3C2F2F] hover:bg-white transition-colors shadow-sm"
      aria-label="Toggle language"
    >
      <span className={locale === "en" ? "font-semibold" : "opacity-60"}>EN</span>
      <span className="text-[#C9A227]">|</span>
      <span className={locale === "ar" ? "font-semibold" : "opacity-60"}>عربي</span>
    </button>
  );
}
