"use client";

import { useEffect, useRef, useState } from "react";
import { t } from "@/content/i18n"; // if this import fails, change to "../content/i18n"

export function IntroVideoOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  // Hydration-safe: start null so SSR + first client render match
  const [src, setSrc] = useState<string | null>(null);
  const [poster, setPoster] = useState<string | null>(null);

  // On mount: mark intro active + ensure frame is NOT ready yet
  useEffect(() => {
    document.body.classList.add("intro-active");
    document.body.classList.remove("frame-ready");
    return () => {
      document.body.classList.remove("intro-active");
    };
  }, []);

  // Decide desktop/mobile AFTER mount
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setSrc(isDesktop ? t.introVideo.desktop : t.introVideo.mobile);
    setPoster(
      isDesktop ? t.introVideo.posterDesktop : t.introVideo.posterMobile
    );
  }, []);

  const finish = () => {
    setFade(true);

    // Show frame while overlay fades out
    setTimeout(() => {
      document.body.classList.remove("intro-active");
      document.body.classList.add("frame-ready");
    }, 250);

    setTimeout(() => setVisible(false), 700);
  };

  // Load + autoplay once src is available
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !src) return;

    try {
      el.currentTime = 0;
    } catch {}

    el.load();

    const p = el.play();
    if (p && typeof (p as any).catch === "function") {
      (p as Promise<void>).catch(() => {
        // autoplay may be blocked; user tap will retry
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
      style={{ width: "100vw", height: "100vh" }}
    >
      <video
        ref={videoRef}
        src={src ?? undefined}
        poster={poster ?? undefined}
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