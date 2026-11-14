"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { birthdaySpecial } from "@/lib/menu-data";
import Image from "next/image";

interface BirthdayModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BirthdayModal({ open, onClose }: BirthdayModalProps) {
  const { t, dir } = useLanguage();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-md mx-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col ${
          dir === "rtl" ? "text-right" : "text-left"
        }`}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={birthdaySpecial.image}
            alt={t(birthdaySpecial.title.en, birthdaySpecial.title.ar)}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center"
            aria-label={t("Close", "إغلاق")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl font-bold text-white">
              {t(birthdaySpecial.title.en, birthdaySpecial.title.ar)}
            </h2>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-[#3C2F2F]/80 text-[15px] leading-relaxed">
            {t(
              "Make your special day unforgettable. We offer custom birthday setups, decorations, table arrangements and dedicated service so you can simply enjoy the moment.",
              "اجعل يومك الخاص لا يُنسى. نقدم تجهيزات عيد ميلاد مخصصة، ديكورات، تنسيق طاولات وخدمة مخصصة حتى تستمتع باللحظة بكل راحة."
            )}
          </p>

          <ul className="space-y-2 text-sm text-[#3C2F2F]/90">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              {t("Custom decorations & balloons", "ديكورات وبالونات مخصصة")}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              {t("Special table setup", "تجهيز طاولة خاص")}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              {t("Dedicated staff attention", "اهتمام من الطاقم")}
            </li>
          </ul>

          <a
            href="https://wa.me/971500000000?text=Hi%20WHY%20CAFE%2C%20I%27d%20like%20to%20enquire%20about%20a%20birthday%20setup"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 rounded-2xl bg-[#3C2F2F] text-white font-semibold text-[15px] active:scale-[0.98] transition-transform"
          >
            {t(birthdaySpecial.cta.en, birthdaySpecial.cta.ar)}
          </a>
          <p className="text-center text-xs text-[#3C2F2F]/50">
            {t("Or speak to our team in-store", "أو تحدث مع فريقنا في المكان")}
          </p>
        </div>
      </div>
    </div>
  );
}
