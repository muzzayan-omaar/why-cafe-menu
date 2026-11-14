"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { categories, type Category } from "@/lib/menu-data";

interface CategoryTabsProps {
  active: Category | "all";
  onChange: (cat: Category | "all") => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const { t } = useLanguage();

  return (
    <div
      className="flex gap-2.5 overflow-x-auto py-2 scrollbar-hide snap-x"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <button
        onClick={() => onChange("all")}
        className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shadow-sm ${
          active === "all"
            ? "bg-[#A7744A] text-white shadow-md"
            : "bg-white/80 text-gray-700 hover:bg-[#A7744A]/15"
        }`}
      >
        {t("Top Seller", "الأكثر مبيعاً")}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shadow-sm ${
            active === cat.id
              ? "bg-[#A7744A] text-white shadow-md"
              : "bg-white/80 text-gray-700 hover:bg-[#A7744A]/15"
          }`}
        >
          {t(cat.label.en, cat.label.ar)}
        </button>
      ))}
    </div>
  );
}
