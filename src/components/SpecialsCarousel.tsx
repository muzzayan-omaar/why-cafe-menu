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
  const { t } = useLanguage();
  const specials = getSpecials();

  return (
    <div
      className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-hide"
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
              className="flex-shrink-0 w-[155px] snap-start rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 text-left active:scale-[0.98] transition-transform"
            >
              <div className="relative h-[90px]">
                <Image
                  src={event.image}
                  alt={t(event.title.en, event.title.ar)}
                  fill
                  className="object-cover"
                  sizes="155px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#A7744A] text-white">
                  {t("Event", "مناسبة")}
                </span>
              </div>
              <div className="p-2.5">
                <p className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">
                  {t(event.title.en, event.title.ar)}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">
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
            className="flex-shrink-0 w-[145px] snap-start rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 text-left active:scale-[0.98] transition-transform"
          >
            <div className="relative h-[90px]">
              <Image
                src={menuItem.image}
                alt={t(menuItem.name.en, menuItem.name.ar)}
                fill
                className="object-cover"
                sizes="145px"
              />
              {menuItem.tags?.includes("winter") && (
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#A7744A] text-white">
                  {t("Winter", "شتاء")}
                </span>
              )}
            </div>
            <div className="p-2.5">
              <p className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">
                {t(menuItem.name.en, menuItem.name.ar)}
              </p>
              <p className="text-xs font-medium text-[#A7744A] mt-0.5">
                {menuItem.price} {t("AED", "د.إ")}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
