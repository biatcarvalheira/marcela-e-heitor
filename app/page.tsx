import { IntroVideoOverlay } from "@/components/IntroVideoOverlay";
import { SideNav } from "@/components/SideNav";
import { Section } from "@/components/Section";
import { t } from "@/content/i18n";

export default function Page() {
  return (
    <main>
      <IntroVideoOverlay />
      <SideNav />

{/* Home - Hero */}
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

{/* Programacao */}
      <Section
  id="programacao"
  bgMobileClass="bg-programacao-mobile bg-cover bg-center bg-no-repeat"
  bgDesktopClass="bg-programacao-desktop bg-cover bg-center bg-no-repeat"
  overlayClassName=""
>
  <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
    
    {/* TITLE */}
    <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
      {t.sections.programacao.title}
    </h2>

    {/* ANIMATION AREA */}
    <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
      
      {/* MOBILE VERSION */}
      <img
        src="/images/programacao-animation-mobile.gif"
        alt=""
        className="
          block md:hidden
          w-[100vw]
          h-auto
          object-contain
          pointer-events-none
          select-none
          scale-[1.05]
        "
      />

      {/* DESKTOP VERSION */}
      <img
        src="/images/programacao-animation.gif"
        alt=""
        className="
          hidden md:block
          w-[560px] lg:w-[680px] xl:w-[760px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* SMALL GAP */}
    <div className="h-2 md:h-6" />

    {/* TEXT */}
    <div className="w-full flex justify-center pb-12 md:pb-20">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        A cerimônia religiosa será na <strong>Capela Santa Luzia</strong>,
        às <strong>18h</strong>, seguida da recepção no{" "}
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

{/* Como Chegar */}
      <Section id="como-chegar" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
          {/* TITLE */}
          <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
            {t.sections.comoChegar.title}
          </h2>

          {/* ANIMATION AREA */}
          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
            {/* MOBILE VERSION (make it BIG) */}
            <img
              src="/images/como-chegar-animation-mobile.gif"
              alt=""
              className="
    block md:hidden
    w-[100vw]
    h-auto
    object-contain
    pointer-events-none
    select-none
    scale-[1.1]
  "
            />

            {/* DESKTOP VERSION (keep it controlled + not overlapping) */}
            <img
              src="/images/como-chegar-animation.gif"
              alt=""
              className="
          hidden md:block
          w-[560px] lg:w-[680px] xl:w-[760px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
            />
          </div>

          {/* SMALL GAP */}
          <div className="h-2 md:h-6" />

          {/* TEXT (close to animation) */}
          <div className="w-full flex justify-center pb-12 md:pb-20">
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
              <br />O hotel está localizado em uma das regiões mais centrais da
              cidade, com fácil acesso por carro ou aplicativo de transporte.
            </p>
          </div>
        </div>
      </Section>

      {/* Hospedagem 1 */}
<Section id="hospedagem-1" overlayClassName="">
  <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
    
    {/* TITLE */}
    <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
      {t.sections.hospedagem1.title}
    </h2>

    {/* ANIMATION AREA (optional – remove if not using animation here) */}
    <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
      
      {/* MOBILE VERSION */}
      <img
        src="/images/hospedagem-animation-mobile.gif"
        alt=""
        className="
          block md:hidden
          w-[100vw]
          h-auto
          object-contain
          pointer-events-none
          select-none
          scale-[1.1]
        "
      />

      {/* DESKTOP VERSION */}
      <img
        src="/images/hospedagem-animation.gif"
        alt=""
        className="
          hidden md:block
          w-[560px] lg:w-[680px] xl:w-[760px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* SMALL GAP */}
    <div className="h-2 md:h-6" />

    {/* TEXT */}
    <div className="w-full flex justify-center pb-12 md:pb-20">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        Para quem desejar se hospedar no local do casamento, o{" "}
        <strong>Hotel Rosewood São Paulo</strong> oferece condições especiais
        para os convidados.
        <br />
        <br />
        Recomendamos entrar em contato diretamente com o hotel para consultar
        disponibilidade e valores.
      </p>
    </div>
  </div>
</Section>

{/* Hospedagem 2 (no title, text before animation) */}
<Section id="hospedagem-2" overlayClassName="">
  <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
    {/* TEXT (before animation) */}
    <div className="w-full flex justify-center pt-16 md:pt-20">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        Também indicamos outros hotéis na região:
        <br />
        <br />
        <strong>Hotel Fasano Jardins</strong>
        <br />
        <strong>Hotel Emiliano São Paulo</strong>
        <br />
        <strong>Ibis Paulista</strong>
        <br />
        <strong>Mercure São Paulo Paulista</strong>
      </p>
    </div>

    {/* SMALL GAP */}
    <div className="h-2 md:h-6" />

    {/* ANIMATION AREA */}
    <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
      {/* MOBILE VERSION (make it BIG) */}
      <img
        src="/images/hospedagem-2-animation-mobile.gif"
        alt=""
        className="
          block md:hidden
          w-[100vw]
          h-auto
          object-contain
          pointer-events-none
          select-none
          scale-[1.1]
        "
      />

      {/* DESKTOP VERSION (keep it controlled + not overlapping) */}
      <img
        src="/images/hospedagem-2-animation.gif"
        alt=""
        className="
          hidden md:block
          w-[560px] lg:w-[680px] xl:w-[760px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* BOTTOM PADDING */}
    <div className="h-10 md:h-16" />
  </div>
</Section>

<Section id="rsvp" overlayClassName="">
  <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
    
    {/* TITLE */}
    <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
      {t.sections.rsvp.title}
    </h2>

    {/* ANIMATION AREA */}
    <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
      
      {/* MOBILE VERSION */}
      <img
        src="/images/rsvp-animation-mobile.gif"
        alt=""
        className="
          block md:hidden
          w-[100vw]
          h-auto
          object-contain
          pointer-events-none
          select-none
          scale-[1.1]
        "
      />

      {/* DESKTOP VERSION */}
      <img
        src="/images/rsvp-animation.gif"
        alt=""
        className="
          hidden md:block
          w-[560px] lg:w-[680px] xl:w-[760px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* SMALL GAP */}
    <div className="h-2 md:h-6" />

    {/* TEXT */}
    <div className="w-full flex justify-center pb-12 md:pb-20">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        Pedimos a gentileza de confirmar sua presença diretamente com nossa
        assessoria, por WhatsApp.
        <br />
        <br />
        Em breve, todos os contatos estarão disponíveis por aqui.
      </p>
    </div>
  </div>
</Section>
    </main>
  );
}
