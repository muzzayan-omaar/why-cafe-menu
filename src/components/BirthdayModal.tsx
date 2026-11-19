
"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { birthdaySpecial } from "@/lib/menu-data";
import Image from "next/image";

interface BirthdayModalProps {
  open: boolean;
  onClose: () => void;
}

const MANAGER_WHATSAPP = "971582469913";

const IMAGES = [
  birthdaySpecial.image,
  "https://res.cloudinary.com/diszilwhc/image/upload/v1795086203/619882376_18169225087385069_8775349171790838008_n_vz4ewb.jpg",
  "https://res.cloudinary.com/diszilwhc/image/upload/v1795086202/619591496_18169225213385069_8035711298087773866_n_aalcpm.jpg",
  "https://res.cloudinary.com/diszilwhc/image/upload/v1795086203/619655022_18169225198385069_6761877155406370355_n_ngetc4.jpg",
  "https://res.cloudinary.com/diszilwhc/image/upload/v1795086203/619912938_18169225186385069_1660391375590009146_n_mdg8fm.jpg",
];

const ITEMS = [
  "Why Fawala",
  "Why-misu",
  "Pizza of choice",
  "Other dessert",
];

export default function BirthdayModal({
  open,
  onClose,
}: BirthdayModalProps) {
  const { t, dir } = useLanguage();

  const [visible, setVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const [personName, setPersonName] = useState("");
  const [guests, setGuests] = useState("");
  const [preferredItems, setPreferredItems] = useState<string[]>([
    "Why Fawala",
  ]);
  const [customText, setCustomText] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  // Modal entrance
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      setImgIndex(0);
    }
  }, [open]);

  // Lock background scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Automatic liquid background slideshow
  useEffect(() => {
    if (!open) return;

    const interval = window.setInterval(() => {
      setImgIndex((current) => (current + 1) % IMAGES.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [open]);

  if (!open) return null;

  const toggleItem = (item: string) => {
    setPreferredItems((current) =>
      current.includes(item)
        ? current.filter((selected) => selected !== item)
        : [...current, item]
    );
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const buildWhatsAppMessage = () => {
    const formattedDate = dateTime
      ? new Date(dateTime).toLocaleString("en-GB", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "Not specified";

    const message = `
🎂 *WHY CAFE | BIRTHDAY BOOKING REQUEST*

━━━━━━━━━━━━━━━━━━

✨ *CELEBRATION DETAILS*

👤 Celebrating: ${personName || "Not specified"}
👥 Number of guests: ${guests || "Not specified"}
📅 Date & time: ${formattedDate}

━━━━━━━━━━━━━━━━━━

🍰 *PREFERRED SELECTION*

${preferredItems.length
  ? preferredItems.map((item) => `• ${item}`).join("\n")
  : "• Not specified"}

✍️ *PLATE MESSAGE*

${customText || "No custom plate message"}

━━━━━━━━━━━━━━━━━━

💬 *ADDITIONAL REQUESTS*

${specialRequest || "None"}

━━━━━━━━━━━━━━━━━━

📱 *CUSTOMER CONTACT*

${userPhone || "Not provided"}

━━━━━━━━━━━━━━━━━━

Thank you for choosing *WHY Cafe*.

We look forward to making this celebration special! ❤️

_This booking request was submitted through the WHY Cafe digital menu._
`.trim();

    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${MANAGER_WHATSAPP}?text=${buildWhatsAppMessage()}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/[0.12] backdrop-blur-xl border border-white/20 text-white placeholder:text-white/45 focus:outline-none focus:border-[#efceb2]/80 focus:ring-2 focus:ring-[#efceb2]/20 transition-all duration-300 text-sm";

  const labelClass = "block text-sm font-semibold text-white mb-2";

  const glassButton =
    "border border-white/25 bg-white/[0.12] backdrop-blur-xl shadow-lg shadow-black/10 transition-all duration-300 hover:bg-white/[0.22] hover:border-white/40 active:scale-[0.97]";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">

      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-md mx-auto h-[94dvh] sm:h-[90vh] sm:max-h-[850px] overflow-hidden flex flex-col rounded-t-[30px] sm:rounded-[30px] border border-white/15 shadow-2xl shadow-black/40 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.97]"
        } ${dir === "rtl" ? "text-right" : "text-left"}`}
      >

        {/* BACKGROUND LIQUID SLIDESHOW */}
        <div className="absolute inset-0 overflow-hidden bg-[#17110e]">

          {IMAGES.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                imgIndex === index
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-[1.12] blur-[8px]"
              }`}
            >
              <Image
                src={image}
                alt="WHY Cafe birthday celebration"
                fill
                priority={index === 0}
                sizes="(max-width: 448px) 100vw, 448px"
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/90" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 h-[65%] backdrop-blur-[2px] bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 flex flex-col h-full min-h-0">

          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">

            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-[#efceb2] shadow-[0_0_12px_#efceb2]" />

              <span className="text-[10px] tracking-[3px] uppercase font-semibold text-white/80">
                WHY CAFE
              </span>

            </div>

            <button
              onClick={onClose}
              aria-label={t("Close", "إغلاق")}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${glassButton}`}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

          </div>

          {/* Title */}
          <div className="px-5 pb-4 shrink-0">

            <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
              {t(birthdaySpecial.title.en, birthdaySpecial.title.ar)}
            </h2>

            <p className="text-sm text-white/75 mt-1.5 leading-relaxed">
              {t(
                birthdaySpecial.subtitle.en,
                birthdaySpecial.subtitle.ar
              )}
            </p>

            {/* Slideshow indicators */}
            <div className="flex gap-1.5 mt-4">
              {IMAGES.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-700 ${
                    imgIndex === index
                      ? "w-7 bg-[#efceb2]"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* SCROLLABLE BOOKING CONTENT */}
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pb-8 space-y-6">

            {/* Introduction */}
            <div className="space-y-3">

              <ul className="space-y-2.5 text-[13px] text-white/90">

                {[
                  t(
                    "Custom plate writing, candles & full décor",
                    "كتابة مخصصة على الطبق وشموع وديكور كامل"
                  ),
                  t(
                    "Why Fawala + 2 coffees of choice",
                    "واي فوالا + قهوتان من اختيارك"
                  ),
                  t(
                    "Music + staff singing on request",
                    "موسيقى وغناء الطاقم عند الطلب"
                  ),
                  t(
                    "Guaranteed seat preparation – book ahead",
                    "تجهيز المقعد مسبقاً – احجز مسبقاً"
                  ),
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#efceb2] shrink-0" />
                    {benefit}
                  </li>
                ))}

              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3.5 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2 ${glassButton}`}
              >
                {t("Start your celebration booking", "ابدأ حجز احتفالك")}

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14m-7-7 7 7 7-7" />
                </svg>
              </button>

            </div>

            {/* BOOKING FORM */}
            <div
              ref={formRef}
              className="space-y-5 scroll-mt-4"
            >

              <div className="flex items-center gap-3">

                <div className="h-px flex-1 bg-white/25" />

                <span className="text-[10px] uppercase tracking-[2px] font-semibold text-[#efceb2]">
                  {t("Your celebration details", "تفاصيل احتفالك")}
                </span>

                <div className="h-px flex-1 bg-white/25" />

              </div>

              {/* Celebrating person */}
              <div>

                <label className={labelClass}>
                  {t("Who are we celebrating?", "من نحتفل به؟")}
                </label>

                <input
                  type="text"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  placeholder={t("e.g. Sara", "مثال: سارة")}
                  className={inputClass}
                />

              </div>

              {/* Guests */}
              <div>

                <label className={labelClass}>
                  {t("How many guests?", "كم عدد الضيوف؟")}
                </label>

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder={t("e.g. 6 guests", "مثال: 6 ضيوف")}
                  className={inputClass}
                />

              </div>

              {/* Multi-select items */}
              <div>

                <label className={labelClass}>
                  {t("Choose your preferred items", "اختر العناصر المفضلة")}
                </label>

                <p className="text-xs text-white/65 mb-3 leading-relaxed">
                  {t(
                    "Select as many as you like. Why Fawala includes 2 coffees (excluding V60). You can also choose other desserts or pizza.",
                    "يمكنك اختيار أكثر من عنصر. تشمل واي فوالا قهوتين (باستثناء V60)."
                  )}
                </p>

                <div className="grid grid-cols-2 gap-2">

                  {ITEMS.map((item) => {
                    const selected = preferredItems.includes(item);

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleItem(item)}
                        aria-pressed={selected}
                        className={`relative min-h-[52px] px-3 py-3 rounded-xl border text-xs font-semibold text-center transition-all duration-300 backdrop-blur-xl active:scale-[0.96] ${
                          selected
                            ? "bg-[#A7744A]/75 border-[#efceb2] text-white shadow-[0_0_18px_rgba(239,206,178,0.15)]"
                            : "bg-white/[0.10] border-white/20 text-white/85 hover:bg-white/[0.19] hover:border-white/40"
                        }`}
                      >

                        <span className="flex items-center justify-center gap-2">

                          {selected && (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="m5 12 4 4L19 6" />
                            </svg>
                          )}

                          {item}

                        </span>

                      </button>
                    );
                  })}

                </div>

                <p className="text-[10px] text-white/55 mt-2">
                  {preferredItems.length} {t("items selected", "عناصر محددة")}
                </p>

              </div>

              {/* Plate message */}
              <div>

                <label className={labelClass}>
                  {t("Custom text on the plate", "النص المخصص على الطبق")}
                </label>

                <textarea
                  rows={2}
                  maxLength={150}
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder={t(
                    "e.g. Happy Birthday Sara ❤️",
                    "مثال: عيد ميلاد سعيد سارة ❤️"
                  )}
                  className={`${inputClass} resize-none`}
                />

                <p className="text-[10px] text-white/50 text-right mt-1">
                  {customText.length}/150
                </p>

              </div>

              {/* Additional requests */}
              <div>

                <label className={labelClass}>
                  {t("Anything else you'd like?", "هل لديك طلبات إضافية؟")}
                </label>

                <textarea
                  rows={3}
                  maxLength={500}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder={t(
                    "Tell us about any special arrangements, preferences or requests...",
                    "أخبرنا عن أي ترتيبات أو تفضيلات أو طلبات خاصة..."
                  )}
                  className={`${inputClass} resize-none`}
                />

              </div>

              {/* Date and time */}
              <div>

                <label className={labelClass}>
                  {t("Date & time", "التاريخ والوقت")}
                </label>

                <input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className={inputClass}
                />

              </div>

              {/* Phone */}
              <div>

                <label className={labelClass}>
                  {t("Your phone number", "رقم هاتفك")}
                </label>

                <input
                  type="tel"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  placeholder="05X XXX XXXX"
                  className={inputClass}
                />

              </div>

              {/* WhatsApp submission */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full py-4 rounded-2xl border border-[#70e5a1]/40 bg-[#25D366]/20 hover:bg-[#25D366]/30 backdrop-blur-2xl text-white font-semibold text-sm flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#70e5a1]/70 active:scale-[0.97]"
              >

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>

                {t(
                  "Send booking request via WhatsApp",
                  "إرسال طلب الحجز عبر واتساب"
                )}

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>

              </button>

              <p className="text-center text-[10px] text-white/50 leading-relaxed">
                {t(
                  "Your request will be sent directly to the WHY Cafe management team for confirmation.",
                  "سيتم إرسال طلبك مباشرة إلى إدارة WHY Cafe للتأكيد."
                )}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
