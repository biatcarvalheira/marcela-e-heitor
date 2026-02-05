import { IntroVideoOverlay } from "@/components/IntroVideoOverlay";
import { SideNav } from "@/components/SideNav";
import { Section } from "@/components/Section";
import { t } from "@/content/i18n";

export default function Page() {
  return (
    <main>
      <IntroVideoOverlay />
      <SideNav />

    <Section id="home">
  <div className="relative min-h-screen overflow-hidden">
    {/* ===== GIF background ===== */}

    {/* Mobile GIF */}
    <div className="absolute inset-0 md:hidden">
      <img
        src="/images/home-mobile.gif"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* Desktop GIF */}
    <div className="absolute inset-0 hidden md:block">
      <img
        src="/images/home-desktop.gif"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* ===== Title ===== */}
    <div className="relative z-10 min-h-screen text-white text-center px-6">
      <h1
        className="
          absolute
          top-24 sm:top-28 md:top-32
          left-1/2 -translate-x-1/2
          text-5xl sm:text-6xl md:text-7xl
        "
      >
        {t.site.coupleName}
      </h1>
    </div>
  </div>
</Section>

      <Section
        id="programacao"
        bgMobileClass="bg-programacao-mobile"
        bgDesktopClass="bg-programacao-desktop"
      >
        <div className="min-h-screen flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-5xl">{t.sections.programacao.title}</h2>
        </div>
      </Section>
    </main>
  );
}
