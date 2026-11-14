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
      className="group w-full text-left rounded-2xl overflow-hidden bg-white shadow-sm border border-[#3C2F2F]/06 active:scale-[0.98] transition-all hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={t(item.name.en, item.name.ar)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
        {(item.tags?.includes("special") || item.tags?.includes("winter") || item.tags?.includes("new")) && (
          <div className="absolute top-2 left-2 flex gap-1">
            {item.tags.includes("new") && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500 text-white">
                {t("New", "جديد")}
              </span>
            )}
            {item.tags.includes("winter") && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#C9A227] text-[#3C2F2F]">
                {t("Winter", "شتاء")}
              </span>
            )}
            {item.tags.includes("special") && !item.tags.includes("winter") && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#3C2F2F] text-white">
                {t("Special", "خاص")}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-[#3C2F2F] text-[15px] leading-snug line-clamp-1">
          {t(item.name.en, item.name.ar)}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#C9A227]">
          {item.price} {t("AED", "د.إ")}
        </p>
      </div>
    </button>
  );
}
