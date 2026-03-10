"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { t } from "@/content/i18n";

type NavRow = {
  key: string;
  label: string;
  href: string;
  number: number;
};

function BrailleDots() {
  return (
    <span className="nav-braille is-sketch" aria-hidden="true">
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
  const [mounted, setMounted] = useState(false);

  // show nav only after intro ends (body has .frame-ready)
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setMounted(true);

    // initial check
    setNavReady(document.body.classList.contains("frame-ready"));

    // watch for class changes on body (intro overlay toggles these)
    const obs = new MutationObserver(() => {
      const ready = document.body.classList.contains("frame-ready");
      setNavReady(ready);

      // safety: if intro starts again somehow, close menu
      if (!ready) setOpen(false);
    });

    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => obs.disconnect();
  }, []);

  const rows: NavRow[] = useMemo(() => {
    const baseItems = t.navItems.map((item, idx) => ({
      ...item,
      number: idx + 1,
    }));

    const itemsWithInicio: NavRow[] = [
      {
        key: "inicio",
        label: "Início",
        href: "#home", // or "#hero"
        number: 0,
      },
      ...baseItems.map((item) => ({
        ...item,
        number: item.number,
      })),
    ];

    return itemsWithInicio;
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!mounted) return null;

  // ✅ Hide EVERYTHING until the intro is done
  if (!navReady) return null;

  const ui = (
    <>
      {/* Toggle */}
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

      {/* Panel */}
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
                  {/* Label */}
                  <span className="nav-label is-sketch">
                    <span className="nav-label-text">{row.label}</span>
                  </span>

                  {/* Number */}
                  <span className="nav-num is-sketch" aria-hidden="true">
                    <span className="nav-num-text">{row.number}</span>
                  </span>

                  {/* Braille */}
                  <BrailleDots />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );

  return createPortal(ui, document.body);
}