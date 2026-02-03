"use client";

import { useEffect, useRef, useState } from "react";
import { t } from "@/content/i18n"; // if this import fails, change to "../content/i18n"

export function IntroVideoOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [desktop, setDesktop] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const update = () => setDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const src = desktop ? t.introVideo.desktop : t.introVideo.mobile;
  const poster = desktop ? t.introVideo.posterDesktop : t.introVideo.posterMobile;

  const finish = () => {
    setFade(true);
    setTimeout(() => setVisible(false), 700);
  };

  // Attempt autoplay
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    try {
      el.currentTime = 0;
    } catch {}

    const p = el.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        // Autoplay may be blocked; user tap will retry.
      });
    }
  }, [src]);

  if (!visible) return null;

  return (
    <div
      onClick={() => videoRef.current?.play()}
      className={`
        fixed inset-0 z-[99999]
        bg-black
        ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}
        transition-opacity duration-700
      `}
      style={{
        // extra safety: ensure it's always on top + covers everything
        width: "100vw",
        height: "100vh",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
