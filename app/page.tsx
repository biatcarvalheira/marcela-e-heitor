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
  bgMobileClass="bg-programacao-mobile bg-cover bg-center bg-no-repeat"
  bgDesktopClass="bg-programacao-desktop bg-cover bg-center bg-no-repeat"
  overlayClassName=""
>
  <div className="min-h-screen w-full flex flex-col items-center text-center px-8">
    {/* TITLE */}
    <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
      {t.sections.programacao.title}
    </h2>

    {/* GIF ANIMATION – BIGGER */}
    <div className="mt-10 md:mt-12 w-full flex justify-center">
      <img
        src="/images/programacao-animation.gif"
        alt=""
        className="
          w-[300px] sm:w-[380px] md:w-[480px] lg:w-[560px]
          h-auto
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* SMALL GAP – keeps text close to GIF */}
    <div className="h-8 md:h-10" />

    {/* CONTENT – closer to GIF */}
    <div className="w-full flex justify-center pb-14 md:pb-20">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        A cerimônia religiosa será na <strong>Capela Santa Luzia</strong>, às{" "}
        <strong>18h</strong>, seguida da recepção no{" "}
        <strong>Hotel Rosewood</strong> (salão principal) às{" "}
        <strong>19h30</strong>, em São Paulo.
        <br />
        <br />
        <strong>Traje:</strong> social completo.{" "}
        <a
          href="/images/moodboard-programacao.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:opacity-80 transition"
        >
          Clique aqui
        </a>{" "}
        para conferir nosso moodboard com inspirações.
      </p>
    </div>
  </div>
</Section>

<Section
  id="como-chegar"
  overlayClassName=""
>
  <div className="min-h-screen w-full flex flex-col items-center text-center px-8">
    {/* TITLE */}
    <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
      {t.sections.comoChegar.title}
    </h2>

    {/* GIF ANIMATION – 2x BIGGER */}
    <div className="mt-10 md:mt-12 w-full flex justify-center">
      <img
        src="/images/como-chegar-animation.gif"
        alt=""
        className="
          w-[420px] sm:w-[520px] md:w-[720px] lg:w-[900px]
          h-auto
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* SMALL GAP */}
    <div className="h-8 md:h-10" />

    {/* CONTENT */}
    <div className="w-full flex justify-center pb-14 md:pb-20">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        <strong>Hotel Rosewood São Paulo</strong>
        <br />
        Alameda Rio Claro, nº 20, Bela Vista
        <br />
        São Paulo – SP
        <br />
        <br />
        O hotel está localizado em uma das regiões mais centrais da cidade,
        com fácil acesso por carro ou aplicativo de transporte.
      </p>
    </div>
  </div>
</Section>
    </main>
  );
}
