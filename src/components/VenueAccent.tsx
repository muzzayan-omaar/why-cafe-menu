"use client";

import Image from "next/image";

const VENUE = {
  entrance:
    "https://res.cloudinary.com/diszilwhc/image/upload/v1795081852/image1_tidmdy.png",
  marina:
    "https://res.cloudinary.com/diszilwhc/image/upload/v1795081849/image2_u5iwms.png",
};

/** Soft full-page ambient background (very low opacity + blur) */
export function VenueAmbient() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <Image
        src={VENUE.marina}
        alt=""
        fill
        priority
        className="object-cover scale-110 opacity-[0.14] blur-[2px]"
        sizes="100vw"
      />
      {/* Cream wash so cards stay readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f3]/92 via-[#f8f6f3]/85 to-[#f1ebe5]/90" />
    </div>
  );
}

/** Thin elegant photo strip under header */
export function VenueStrip() {
  return (
    <div className="flex gap-2 overflow-hidden rounded-2xl h-[72px] mb-5 shadow-sm border border-black/[0.04]">
      <div className="relative flex-1">
        <Image
          src={VENUE.entrance}
          alt="WHY Cafe entrance"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="relative flex-1">
        <Image
          src={VENUE.marina}
          alt="WHY Cafe marina view"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>
  );
}
