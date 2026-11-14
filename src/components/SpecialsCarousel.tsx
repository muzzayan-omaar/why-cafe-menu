"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { getSpecials, type MenuItem, type SpecialEvent } from "@/lib/menu-data";
import Image from "next/image";

interface SpecialsCarouselProps {
  onItemClick?: (item: MenuItem) => void;
  onBirthdayClick?: () => void;
}

export default function SpecialsCarousel({
  onItemClick,
  onBirthdayClick,
}: SpecialsCarouselProps) {
  const { t, locale } = useLanguage();
  const specials = getSpecials();

  return (
    <div className="pb-3">
      <div className="px-4 mb-2">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-[#3C2F2F]/60">
          {t("Specials", "العروض الخاصة")}
        </h2>
      </div>

      <div
        className="flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {specials.map((item) => {
          const isBirthday = "type" in item && item.type === "birthday";

          if (isBirthday) {
            const event = item as SpecialEvent;
            return (
              <button
                key={event.id}
                onClick={onBirthdayClick}
                className="flex-shrink-0 w-[150px] snap-start rounded-2xl overflow-hidden bg-gradient-to-br from-[#3C2F2F] to-[#5C4A3A] text-left shadow-md active:scale-[0.98] transition-transform border border-[#C9A227]/40"
              >
                <div className="relative h-20">
                  <Image
                    src={event.image}
                    alt={t(event.title.en, event.title.ar)}
                    fill
                    className="object-cover opacity-70"
                    sizes="150px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3C2F2F] to-transparent" />
                  <div className="absolute top-2 left-2 right-2">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#C9A227] text-[#3C2F2F]">
                      {t("Event", "مناسبة")}
                    </span>
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-sm font-semibold text-white leading-tight">
                    {t(event.title.en, event.title.ar)}
                  </p>
                  <p className="text-[11px] text-white/70 mt-0.5 line-clamp-2">
                    {t(event.subtitle.en, event.subtitle.ar)}
                  </p>
                </div>
              </button>
            );
          }

          const menuItem = item as MenuItem;
          return (
            <button
              key={menuItem.id}
              onClick={() => onItemClick?.(menuItem)}
              className="flex-shrink-0 w-[140px] snap-start rounded-2xl overflow-hidden bg-white shadow-md active:scale-[0.98] transition-transform border border-[#3C2F2F]/06"
            >
              <div className="relative h-20">
                <Image
                  src={menuItem.image}
                  alt={t(menuItem.name.en, menuItem.name.ar)}
                  fill
                  className="object-cover"
                  sizes="140px"
                />
                {menuItem.tags?.includes("winter") && (
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[9px] font-semibold rounded-full bg-[#C9A227] text-[#3C2F2F]">
                    {t("Winter", "شتاء")}
                  </span>
                )}
              </div>
              <div className="p-2">
                <p className="text-sm font-semibold text-[#3C2F2F] leading-tight line-clamp-1">
                  {t(menuItem.name.en, menuItem.name.ar)}
                </p>
                <p className="text-xs font-medium text-[#C9A227] mt-0.5">
                  {menuItem.price} {t("AED", "د.إ")}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
