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
        Também indicamos outros hotéis na região (distância em km a partir do Hotel Rosewood):
        <br />
        <br />
        <a
          href="https://www.fasano.com.br/hotel/hotel-fasano-sao-paulo/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Hotel Fasano - 2.8 km - 5 estrelas
        </a>
        <br />
        <a
          href="https://www.bluetree.com.br/hotel/blue-tree-premium-paulista"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Blue Tree Paulista - 1.6km - 4 estrelas
        </a>
        <br />
        <a
          href="https://cadoro.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Hotel Cadoro - 2.2 km - 4 estrelas
        </a>
        <br />
        <a
          href="https://www.intercityhoteis.com.br/hotel-sao-paulo/hotel-intercity-pamplona-paulista"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Hotel Intercity Pamplona - 240m - 3 estrelas
        </a>
        <br />
        <a
          href="https://all.accor.com/hotel/9610/index.pt-br.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=bing+maps"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Ibis Budget Frei Caneca - 1.8 km - 2 estrelas
        </a>
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

{/* Cabelo & Make */}
<Section id="cabelo-make" overlayClassName="">
  <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
    
    {/* TITLE */}
    <h2 className="mt-16 md:mt-20 text-5xl text-[#1c5134]">
      {t.sections.cabeloMake.title}
    </h2>

    {/* ANIMATION AREA */}
    <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
      
      {/* MOBILE VERSION */}
      <img
        src="/images/cabelo-animation-mobile.gif"
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

      {/* DESKTOP VERSION (2x smaller) */}
      <img
        src="/images/cabelo-animation.gif"
        alt=""
        className="
          hidden md:block
          w-[280px] lg:w-[340px] xl:w-[380px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
      />
    </div>

    {/* GAP */}
    <div className="h-4 md:h-8" />

    {/* CONTENT */}
    <div
      style={{ fontFamily: "var(--font-sketch)" }}
      className="w-full max-w-xl text-[#5a2423] text-base md:text-lg leading-relaxed pb-16 md:pb-24"
    >
      <p className="mb-6">
        Algumas sugestões de cabelo e maquiagem em São Paulo:
      </p>

      <ul className="space-y-4">
        <li>
          <a
            href="https://www.instagram.com/1838estadosunidos/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            1838
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/studiolorena/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Studio Lorena
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/rom.concept"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Rom Concept
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/marcosproencacabeleireiros"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Marcos Proença
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/oessehair/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Oésse
          </a>
        </li>
      </ul>
    </div>
  </div>
</Section>

{/* Presentes */}
<Section id="presentes" overlayClassName="">
  <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
    
    {/* TITLE */}
    <h2 className="pt-16 md:pt-20 text-5xl text-[#1c5134]">
      {t.sections.presentes.title}
    </h2>

    {/* TEXT (before animation) */}
    <div className="w-full flex justify-center mt-8">
      <p
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
      >
        Confira nossas listas de presentes nos links abaixo:
        <br />
        <br />
        <a
          href="https://site.lejour.com.br/lista-de-presentes/marcela-e-heitor"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Fast Shop + Lejour
        </a>
        <br />
        <a
          href="https://www.tbox.com.br/gift-list-details/view/marcelacavallari-heitorgoellner"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Tbox
        </a>
        <br />
        <a
          href="https://www.mickey.com.br/lista-presente/a9a6653e48976138166de32772b1bf40"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Mickey
        </a>
      </p>
    </div>

    {/* SMALL GAP */}
    <div className="h-2 md:h-6" />

    {/* ANIMATION AREA */}
    <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
      
      {/* MOBILE VERSION */}
      <img
        src="/images/presentes-animation-mobile.gif"
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
        src="/images/presentes-animation.gif"
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
    </main>
  );
}
