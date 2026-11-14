"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import MenuGrid from "@/components/MenuGrid";
import ItemModal from "@/components/ItemModal";
import BirthdayModal from "@/components/BirthdayModal";
import SpecialsCarousel from "@/components/SpecialsCarousel";
import { type Category, type MenuItem } from "@/lib/menu-data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [birthdayOpen, setBirthdayOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F8F1E9] text-[#3C2F2F] pb-safe">
      {/* Header with greeting + specials */}
      <header className="sticky top-0 z-40 bg-[#F8F1E9]/95 backdrop-blur-md border-b border-[#3C2F2F]/08">
        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-sm text-[#3C2F2F]/70 font-medium">
              {(() => {
                const hour = new Date().getHours();
                if (hour < 12) return t("Good morning", "صباح الخير");
                if (hour < 17) return t("Good afternoon", "مساء الخير");
                return t("Good evening", "مساء الخير");
              })()}
            </p>
            {/* Language toggle is inside LanguageProvider via Header, but we inline a clean version */}
            <LanguageToggleInline />
          </div>
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold tracking-tight text-[#3C2F2F]">
              WHY CAFE
            </h1>
            <p className="text-[11px] text-[#C9A227] font-medium tracking-widest uppercase">
              {t("Abu Dhabi · Winter Menu", "أبوظبي · قائمة الشتاء")}
            </p>
          </div>
        </div>

        <SpecialsCarousel
          onItemClick={setSelectedItem}
          onBirthdayClick={() => setBirthdayOpen(true)}
        />
      </header>

      {/* Tabs */}
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      {/* Menu */}
      <main>
        <MenuGrid category={activeCategory} onItemClick={setSelectedItem} />
      </main>

      {/* Footer note */}
      <footer className="px-4 py-8 text-center text-xs text-[#3C2F2F]/40">
        <p>{t("Prices in AED · All rights reserved", "الأسعار بالدرهم · جميع الحقوق محفوظة")}</p>
        <p className="mt-1">WHY CAFE · Abu Dhabi</p>
      </footer>

      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <BirthdayModal open={birthdayOpen} onClose={() => setBirthdayOpen(false)} />
    </div>
  );
}

function LanguageToggleInline() {
  const { locale, setLocale } = useLanguage();
  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#3C2F2F]/15 text-sm font-medium text-[#3C2F2F] shadow-sm"
    >
      <span className={locale === "en" ? "font-semibold" : "opacity-50"}>EN</span>
      <span className="text-[#C9A227]">|</span>
      <span className={locale === "ar" ? "font-semibold" : "opacity-50"}>عربي</span>
    </button>
  );
}
