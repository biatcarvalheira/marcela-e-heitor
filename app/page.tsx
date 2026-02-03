import { IntroVideoOverlay } from "@/components/IntroVideoOverlay";
import { SideNav } from "@/components/SideNav";
import { Section } from "@/components/Section";
import { t } from "@/content/i18n";

export default function Page() {
  return (
    <main>
      <IntroVideoOverlay />
      <SideNav />

      <Section id="home" bg={t.backgrounds.home}>
        <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-6xl">{t.site.coupleName}</h1>
          <p className="mt-4">{t.sections.home.subtitle}</p>
          <p className="mt-6">{t.site.dateLine}</p>
        </div>
      </Section>

      <Section id="programacao" bg={t.backgrounds.programacao}>
        <div className="min-h-screen flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-5xl">{t.sections.programacao.title}</h2>
        </div>
      </Section>
    </main>
  );
}
