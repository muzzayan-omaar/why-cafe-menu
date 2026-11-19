
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { categories, type Category } from "@/lib/menu-data";

interface CategoryTabsProps {
  active: Category | "all";
  onChange: (cat: Category | "all") => void;
}

export default function CategoryTabs({
  active,
  onChange,
}: CategoryTabsProps) {
  const { t } = useLanguage();

  const baseStyle =
    "relative flex-shrink-0 snap-start px-5 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap backdrop-blur-xl border transition-all duration-300 ease-out active:scale-[0.95]";

  const activeStyle =
    "bg-[#A7744A]/85 text-white border-[#efceb2]/60 shadow-[0_4px_20px_rgba(167,116,74,0.25)]";

  const inactiveStyle =
    "bg-white/[0.10] text-white/80 border-white/20 shadow-lg shadow-black/10 hover:bg-white/[0.19] hover:border-white/40 hover:text-white";

  const renderTab = (
    id: Category | "all",
    label: string
  ) => {
    const isActive = active === id;

    return (
      <button
        key={id}
        type="button"
        onClick={() => onChange(id)}
        aria-pressed={isActive}
        className={`${baseStyle} ${
          isActive ? activeStyle : inactiveStyle
        }`}
      >
        {isActive && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
        )}

        <span className="relative z-10">
          {label}
        </span>

      </button>
    );
  };

  return (
    <div
      className="flex gap-2.5 overflow-x-auto py-3 px-0.5 scrollbar-hide snap-x snap-mandatory"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {renderTab("all", t("Top Seller", "الأكثر مبيعاً"))}

      {categories.map((cat) =>
        renderTab(cat.id, t(cat.label.en, cat.label.ar))
      )}
    </div>
  );
}
