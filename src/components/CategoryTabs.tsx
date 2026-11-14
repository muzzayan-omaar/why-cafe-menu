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
    <div className="sticky top-[calc(var(--header-height,180px))] z-30 bg-[#F8F1E9]/95 backdrop-blur-md border-b border-[#3C2F2F]/06">
      <div
        className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide snap-x"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <button
          onClick={() => onChange("all")}
          className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === "all"
              ? "bg-[#3C2F2F] text-[#F8F1E9] shadow-md"
              : "bg-white text-[#3C2F2F] border border-[#3C2F2F]/12 hover:border-[#3C2F2F]/25"
          }`}
        >
          {t("All", "الكل")}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat.id
                ? "bg-[#3C2F2F] text-[#F8F1E9] shadow-md"
                : "bg-white text-[#3C2F2F] border border-[#3C2F2F]/12 hover:border-[#3C2F2F]/25"
            }`}
          >
            {t(cat.label.en, cat.label.ar)}
          </button>
        ))}
      </div>
    </div>
  );
}
