
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
      className="group relative w-full text-left rounded-2xl overflow-hidden bg-[#17120f] border border-white/15 shadow-xl active:scale-[0.98] transition-all duration-300 hover:border-white/30"
    >
      <div className="relative aspect-[4/4.2] overflow-hidden">

        {/* Full-bleed food photograph */}
        <Image
          src={item.image}
          alt={t(item.name.en, item.name.ar)}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-[center_80%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle shading for text readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        {/* Tags */}
        {(item.tags?.includes("special") ||
          item.tags?.includes("winter") ||
          item.tags?.includes("new")) && (
          <div className="absolute top-3 left-3 z-20 flex gap-1.5">

            {item.tags.includes("new") && (
              <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-emerald-500/90 backdrop-blur-xl text-white border border-white/20">
                {t("New", "جديد")}
              </span>
            )}

            {item.tags.includes("winter") && (
              <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-[#A7744A]/90 backdrop-blur-xl text-white border border-white/20">
                {t("Winter", "شتاء")}
              </span>
            )}

            {item.tags.includes("special") &&
              !item.tags.includes("winter") && (
                <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/50 backdrop-blur-xl text-white border border-white/20">
                  {t("Special", "خاص")}
                </span>
              )}

          </div>
        )}

        {/* Text directly over the image */}
        <div className="absolute bottom-0 inset-x-0 p-4 z-10">

          <h3 className="font-bold text-white text-[15px] leading-snug line-clamp-2 drop-shadow-lg">
            {t(item.name.en, item.name.ar)}
          </h3>

          <p className="mt-1.5 text-sm font-semibold text-[#efceb2] drop-shadow-lg">
            {item.price} {t("AED", "د.إ")}
          </p>

        </div>

      </div>
    </button>
  );
}
