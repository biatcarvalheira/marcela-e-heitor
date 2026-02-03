"use client";

import { useEffect, useMemo, useState } from "react";
import { t } from "@/content/i18n"; // if alias fails, change to "../content/i18n"

type NavRow = {
  key: string;
  label: string;
  href: string;
  number: number;
  // If you want to use images instead of dots:
  brailleImgSrc?: string; // e.g. "/images/braille/programacao.png"
};

function BrailleDots() {
  // 2x3 braille grid like your reference icon
  return (
    <span className="nav-braille" aria-hidden="true">
      <span className="braille-grid">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </span>
    </span>
  );
}

export function SideNav() {
  const [open, setOpen] = useState(false);

  // Force exact numbering 1..6 in the order you requested
  const rows: NavRow[] = useMemo(() => {
    return t.navItems.map((item, idx) => ({
      ...item,
      number: idx + 1,
      // Optional: set per-item braille images here if you want later
      // brailleImgSrc: `/images/braille/${item.key}.png`,
    }));
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll while open (feels nicer)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Toggle button (simple) */}
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
        className="nav-toggle"
      >
        {open ? <span className="nav-x">×</span> : <span className="nav-burger" />}
      </button>

      {/* Backdrop */}
      <div
        className={`nav-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Panel wrapper */}
      <aside className={`nav-wrap ${open ? "is-open" : ""}`}>
        <div className="nav-panel">
          <ul className="nav-list">
            {rows.map((row) => (
              <li key={row.key}>
                <a
                  href={row.href}
                  className="nav-row"
                  onClick={() => setOpen(false)}
                >
                  {/* Label rectangle */}
                  <span className="nav-label">{row.label}</span>

                  {/* Number circle */}
                  <span className="nav-num" aria-hidden="true">
                    {row.number}
                  </span>

                  {/* Braille block (dots by default) */}
                  {row.brailleImgSrc ? (
                    <span className="nav-braille" aria-hidden="true">
                      <img
                        src={row.brailleImgSrc}
                        alt=""
                        className="braille-img"
                      />
                    </span>
                  ) : (
                    <BrailleDots />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
