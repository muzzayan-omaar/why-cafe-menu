"use client";

import { useLanguage } from "@/lib/LanguageContext";
import type { MenuItem } from "@/lib/menu-data";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  const { t } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-lg active:scale-[0.98] transition-all hover:bg-white/15"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={t(item.name.en, item.name.ar)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {(item.tags?.includes("special") ||
          item.tags?.includes("winter") ||
          item.tags?.includes("new")) && (
          <div className="absolute top-2.5 left-2.5 flex gap-1.5">
            {item.tags.includes("new") && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500 text-white">
                {t("New", "جديد")}
              </span>
            )}
            {item.tags.includes("winter") && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#A7744A] text-white">
                {t("Winter", "شتاء")}
              </span>
            )}
            {item.tags.includes("special") && !item.tags.includes("winter") && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-black/60 text-white">
                {t("Special", "خاص")}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-3.5">
        <h3 className="font-semibold text-white text-[15px] leading-snug line-clamp-1">
          {t(item.name.en, item.name.ar)}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#efceb2]">
          {item.price} {t("AED", "د.إ")}
        </p>
      </div>
    </button>
  );
}