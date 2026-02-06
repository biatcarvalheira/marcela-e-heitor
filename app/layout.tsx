import "./globals.css";
import type { Metadata } from "next";
import { Shadows_Into_Light, Style_Script } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sketch",
});

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Marcela & Heitor",
  description: "Casamento Marcela & Heitor - 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${shadowsIntoLight.variable} ${styleScript.variable}`}
    >
      <body
        className={`
          ${shadowsIntoLight.variable} ${styleScript.variable}
          bg-[#debcbb]
          relative
        `}
      >
        {/* ===== TOP + BOTTOM bars (absolute: top of doc + bottom of doc) ===== */}
        <div className="pointer-events-none absolute inset-0 z-[40]">
          {/* TOP (mobile: cover; desktop: fill) */}
          <div className="absolute top-0 left-0 right-0 h-[32px] md:h-[64px]">
            <img
              src="/images/frame-top.png"
              alt=""
              className="w-full h-full object-cover md:object-fill"
            />
          </div>

          {/* BOTTOM (mobile: cover; desktop: fill) */}
          <div className="absolute bottom-0 left-0 right-0 h-[32px] md:h-[64px]">
            <img
              src="/images/frame-bottom.png"
              alt=""
              className="w-full h-full object-cover md:object-fill"
            />
          </div>
        </div>

        {/* ===== SIDE frames (fixed so they NEVER disappear while scrolling) ===== */}
        <div className="pointer-events-none fixed inset-0 z-[40]">
          {/* MOBILE sides (fixed viewport overlay) */}
          <img
            src="/images/frame-side.png"
            alt=""
            className="absolute left-0 top-0 h-dvh w-[32px] object-fill md:hidden"
          />
          <img
            src="/images/frame-side.png"
            alt=""
            className="absolute right-0 top-0 h-dvh w-[32px] object-fill scale-x-[-1] md:hidden"
          />

          {/* DESKTOP sides (md+) */}
          <div
            className="absolute top-0 bottom-0 left-0 hidden md:block w-[64px] bg-repeat-y bg-left"
            style={{
              backgroundImage: "url('/images/frame-side.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "left top",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 hidden md:block w-[64px] bg-repeat-y bg-right scale-x-[-1]"
            style={{
              backgroundImage: "url('/images/frame-side.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "left top",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}