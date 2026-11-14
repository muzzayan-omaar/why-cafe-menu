"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import SpecialsCarousel from "./SpecialsCarousel";

export default function Header() {
  const { t, locale } = useLanguage();

  const hour = new Date().getHours();
  let greetingEn = "Welcome";
  let greetingAr = "أهلاً وسهلاً";
  if (hour < 12) {
    greetingEn = "Good morning";
    greetingAr = "صباح الخير";
  } else if (hour < 17) {
    greetingEn = "Good afternoon";
    greetingAr = "مساء الخير";
  } else {
    greetingEn = "Good evening";
    greetingAr = "مساء الخير";
  }

  return (
    <header className="sticky top-0 z-40 bg-[#F8F1E9]/95 backdrop-blur-md border-b border-[#3C2F2F]/08">
      <div className="px-4 pt-3 pb-2">
        {/* Top row */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-[#3C2F2F]/70 font-medium">
            {t(greetingEn, greetingAr)}
          </p>
          <LanguageToggle />
        </div>

        {/* Cafe name */}
        <div className="text-center mb-3">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#3C2F2F]">
            WHY CAFE
          </h1>
          <p className="text-xs text-[#C9A227] font-medium tracking-widest uppercase mt-0.5">
            {t("Abu Dhabi · Winter Menu", "أبوظبي · قائمة الشتاء")}
          </p>
        </div>
      </div>

      {/* Specials */}
      <SpecialsCarousel />
    </header>
  );
}
