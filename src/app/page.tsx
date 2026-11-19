"use client";

import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import MenuGrid from "@/components/MenuGrid";
import ItemModal from "@/components/ItemModal";
import BirthdayModal from "@/components/BirthdayModal";
import SpecialsCarousel from "@/components/SpecialsCarousel";
import IntroOverlay from "@/components/IntroOverlay";
import { VenueAmbient, VenueStrip } from "@/components/VenueAccent";
import { type Category, type MenuItem } from "@/lib/menu-data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [birthdayOpen, setBirthdayOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  const hour = new Date().getHours();
  let greeting = t("Good Morning", "صباح الخير");
  let emoji = "☀️";
  if (hour >= 12 && hour < 17) {
    greeting = t("Good Afternoon", "مساء الخير");
    emoji = "🌤️";
  } else if (hour >= 17) {
    greeting = t("Good Evening", "مساء الخير");
    emoji = "🌙";
  }

  const dayName = new Date().toLocaleDateString(locale === "ar" ? "ar-AE" : "en-AE", {
    weekday: "long",
  });

  return (
    <>
      {/* 4-second intro video (first open only) */}
      <IntroOverlay />

      {/* Soft venue photo as ambient background */}
      <VenueAmbient />

      <div className="min-h-screen text-gray-900 pb-safe relative">
        <div className="relative z-10 max-w-3xl mx-auto px-4 pb-12 pt-6">
          {/* Top bar: Logo + Language */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-[22px] font-bold leading-tight text-gray-900 tracking-tight">
                WHY
                <br />
                <span className="font-semibold">Cafe</span>
              </h1>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                {t("Brewed Fresh,", "محضّرة طازجة،")}
                <br />
                {t("Served Warm", "تُقدَّم دافئة")}
              </p>
            </div>

            <button
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#efceb2] text-white text-xs font-semibold shadow-sm active:scale-95 transition-transform"
            >
              {locale === "en" ? "AR 🇸🇦" : "EN 🇬🇧"}
            </button>
          </div>

          {/* Thin venue photo strip – accent only */}
          <VenueStrip />

          {/* Greeting */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            {greeting} {emoji}
          </h2>

          {/* Section title */}
          <p className="text-lg font-semibold text-gray-900 mb-3">
            {t(`${dayName}'s picks`, `اختيارات ${dayName}`)}
          </p>

          {/* Specials carousel */}
          <div className="mb-5 -mx-1">
            <SpecialsCarousel
              onItemClick={setSelectedItem}
              onBirthdayClick={() => setBirthdayOpen(true)}
            />
          </div>

          {/* Category tabs */}
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

          {/* Menu grid */}
          <main className="mt-4">
            <MenuGrid category={activeCategory} onItemClick={setSelectedItem} />
          </main>

          {/* Footer */}
          <footer className="mt-10 text-center text-xs text-gray-400">
            <p>{t("Prices in AED", "الأسعار بالدرهم")}</p>
            <p className="mt-1">WHY Cafe · Al Qana, Abu Dhabi</p>
          </footer>
        </div>

        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        <BirthdayModal open={birthdayOpen} onClose={() => setBirthdayOpen(false)} />
      </div>
    </>
  );
}
