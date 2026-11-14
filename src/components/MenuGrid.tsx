"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { menuItems, type Category, type MenuItem } from "@/lib/menu-data";
import MenuCard from "./MenuCard";

interface MenuGridProps {
  category: Category | "all";
  onItemClick: (item: MenuItem) => void;
}

export default function MenuGrid({ category, onItemClick }: MenuGridProps) {
  const { t } = useLanguage();

  const filtered =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  if (filtered.length === 0) {
    return (
      <div className="px-4 py-12 text-center text-[#3C2F2F]/50">
        {t("No items in this category yet.", "لا توجد عناصر في هذه الفئة بعد.")}
      </div>
    );
  }

  return (
    <div className="px-4 py-4 grid grid-cols-2 gap-3 sm:gap-4">
      {filtered.map((item) => (
        <MenuCard key={item.id} item={item} onClick={() => onItemClick(item)} />
      ))}
    </div>
  );
}
