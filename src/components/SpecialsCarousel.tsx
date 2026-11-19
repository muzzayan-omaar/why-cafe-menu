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
              className="group relative flex-shrink-0 w-[158px] h-[168px] snap-start rounded-2xl overflow-hidden text-left
                         active:scale-[0.97] transition-all duration-200 ease-out
                         shadow-lg shadow-black/20"
            >
              {/* Full-bleed image */}
              <Image
                src={event.image}
                alt={t(event.title.en, event.title.ar)}
                fill
                className="object-cover object-center transition-transform duration-500 group-active:scale-105"
                sizes="158px"
                priority
              />

              {/* Soft blur + gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-20 backdrop-blur-[2px] bg-gradient-to-t from-black/50 to-transparent" />

              {/* Badge */}
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#A7744A] text-white shadow-sm">
                {t("Event", "مناسبة")}
              </span>

              {/* Text over the blurred area */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-[13px] font-semibold text-white leading-tight line-clamp-1">
                  {t(event.title.en, event.title.ar)}
                </p>
                <p className="text-[11px] text-white/70 mt-0.5 line-clamp-2 leading-snug">
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
            className="group relative flex-shrink-0 w-[148px] h-[168px] snap-start rounded-2xl overflow-hidden text-left
                       active:scale-[0.97] transition-all duration-200 ease-out
                       shadow-lg shadow-black/20"
          >
            {/* Full-bleed image */}
            <Image
              src={menuItem.image}
              alt={t(menuItem.name.en, menuItem.name.ar)}
              fill
              className="object-cover object-center transition-transform duration-500 group-active:scale-105"
              sizes="148px"
            />

            {/* Soft blur + gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-16 backdrop-blur-[2px] bg-gradient-to-t from-black/50 to-transparent" />

            {/* Optional tag */}
            {menuItem.tags?.includes("winter") && (
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#A7744A] text-white shadow-sm">
                {t("Winter", "شتاء")}
              </span>
            )}

            {/* Text over the blurred area */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-[13px] font-semibold text-white leading-tight line-clamp-1">
                {t(menuItem.name.en, menuItem.name.ar)}
              </p>
              <p className="text-xs font-medium text-[#efceb2] mt-0.5">
                {menuItem.price} {t("AED", "د.إ")}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}