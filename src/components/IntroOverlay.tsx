"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://res.cloudinary.com/diszilwhc/video/upload/v1795081612/SaveInta.com_AQPR4HcJJztogM3WFIBrZlM5VzHmFoZtjBLybDjk6M3G7AfcY9We18SrIWT2EZQo1drj0qitLHGD8Hw1krVChLEa_fban4l.mp4";

const MAX_MS = 4000; // hard cut at 4 seconds

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Only show once per browser session
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("why-intro-seen");
    if (seen === "1") {
      setVisible(false);
      return;
    }

    const startFade = () => {
      setFading(true);
      sessionStorage.setItem("why-intro-seen", "1");
      setTimeout(() => setVisible(false), 600); // match CSS transition
    };

    // Force end at MAX_MS
    timerRef.current = setTimeout(startFade, MAX_MS);

    // Also end if video somehow ends earlier
    const vid = videoRef.current;
    if (vid) {
      const onEnded = () => startFade();
      vid.addEventListener("ended", onEnded);
      return () => {
        vid.removeEventListener("ended", onEnded);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const skip = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setFading(true);
    sessionStorage.setItem("why-intro-seen", "1");
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onClick={skip}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft vignette + brand */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-3xl font-semibold tracking-tight drop-shadow-lg">WHY</p>
        <p className="text-sm tracking-[0.25em] uppercase opacity-90 mt-1">Cafe</p>
      </div>

      {/* Tap to skip hint */}
      <button
        onClick={skip}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-wide"
      >
        Tap to enter
      </button>
    </div>
  );
}
