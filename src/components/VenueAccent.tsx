"use client";

import Image from "next/image";

const VENUE_IMAGE =
  "https://res.cloudinary.com/diszilwhc/image/upload/v1795081849/image2_u5iwms.png";

/**
 * Full-page dark venue background – only image1
 * Dark overlay keeps the photo visible while making content readable
 */
export function VenueBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <Image
        src={VENUE_IMAGE}
        alt=""
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
      />

      {/* Dark elegant overlay – lets the photo breathe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
      <div className="absolute inset-0 bg-[#0c0a09]/40" />
    </div>
  );
}