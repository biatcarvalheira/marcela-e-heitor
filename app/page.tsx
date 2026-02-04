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
    {/* ===== Video background ===== */}

    {/* Mobile video */}
    <video
      className="absolute inset-0 w-full h-full object-cover md:hidden"
      src="/videos/home-mobile.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />

    {/* Desktop video */}
    <video
      className="absolute inset-0 w-full h-full object-cover hidden md:block"
      src="/videos/home-desktop.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />

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
