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
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className={`relative w-full max-w-md mx-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 max-h-[90vh] flex flex-col ${
          dir === "rtl" ? "text-right" : "text-left"
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] flex-shrink-0">
          <Image
            src={item.image}
            alt={t(item.name.en, item.name.ar)}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            aria-label={t("Close", "إغلاق")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Content */}
        <div className="p-5 overflow-y-auto">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-xl font-bold text-[#3C2F2F] leading-tight">
              {t(item.name.en, item.name.ar)}
            </h2>
            <p className="text-lg font-semibold text-[#C9A227] whitespace-nowrap">
              {item.price} {t("AED", "د.إ")}
            </p>
          </div>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                    tag === "winter"
                      ? "bg-[#C9A227]/20 text-[#8B7015]"
                      : tag === "new"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-[#3C2F2F]/10 text-[#3C2F2F]"
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

          <p className="text-[#3C2F2F]/80 text-[15px] leading-relaxed">
            {t(item.description.en, item.description.ar)}
          </p>
        </div>
      </div>
    </div>
  );
}
