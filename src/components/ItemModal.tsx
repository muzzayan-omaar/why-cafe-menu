
"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { MenuItem } from "@/lib/menu-data";
import Image from "next/image";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  const { t, dir } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-md mx-auto bg-[#17120f] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 max-h-[92dvh] flex flex-col border border-white/10 ${
          dir === "rtl" ? "text-right" : "text-left"
        }`}
      >

        {/* Full-bleed food photograph */}
        <div className="relative w-full aspect-[4/4.2] shrink-0 overflow-hidden">

          <Image
            src={item.image}
            alt={t(item.name.en, item.name.ar)}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            priority
            className="object-cover object-[center_80%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Subtle gradient at the bottom */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/25 text-white flex items-center justify-center hover:bg-black/65 transition-all active:scale-95"
            aria-label={t("Close", "إغلاق")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

        </div>

        {/* Item details */}
        <div className="relative z-10 px-5 pb-6 pt-4 overflow-y-auto text-white">

          <div className="flex items-start justify-between gap-3 mb-3">

            <h2 className="text-xl font-bold leading-tight">
              {t(item.name.en, item.name.ar)}
            </h2>

            <p className="text-lg font-bold text-[#efceb2] whitespace-nowrap">
              {item.price} {t("AED", "د.إ")}
            </p>

          </div>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">

              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${
                    tag === "winter"
                      ? "bg-[#A7744A]/20 border-[#A7744A]/40 text-[#efceb2]"
                      : tag === "new"
                      ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
                      : "bg-white/10 border-white/20 text-white/80"
                  }`}
                >
                  {tag === "winter"
                    ? t("Winter", "شتاء")
                    : tag === "new"
                    ? t("New", "جديد")
                    : t("Special", "خاص")}
                </span>
              ))}

            </div>
          )}

          <p className="text-white/75 text-[15px] leading-relaxed">
            {t(item.description.en, item.description.ar)}
          </p>

        </div>

      </div>
    </div>
  );
}
