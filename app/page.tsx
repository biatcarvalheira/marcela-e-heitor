import { IntroVideoOverlay } from "@/components/IntroVideoOverlay";
import { SideNav } from "@/components/SideNav";
import { Section } from "@/components/Section";
import { t } from "@/content/i18n";
import { WeddingWeather } from "@/components/WeddingWeather";

export default function Page() {
  return (
    <main>
      <IntroVideoOverlay />
      <SideNav />

      {/* Home - Hero */}
      <Section id="home">
        <div className="relative min-h-screen overflow-hidden">
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
    top-[34vh] sm:top-[36vh] md:top-32
    left-1/2 -translate-x-1/2
    max-w-[95vw]
    text-center
    text-[clamp(2.4rem,7.5vw,4.2rem)]
    md:text-7xl
    font-semibold
    leading-none
    whitespace-nowrap
  "
>
  <span>Marcela</span>
  <span className="mx-2">&</span>
  <span>Heitor</span>
</h1>
          </div>
        </div>
      </Section>

      {/* Intro */}
      <Section
        id="intro"
        bgMobileClass="bg-intro-mobile bg-cover bg-center bg-no-repeat"
        bgDesktopClass="bg-intro-desktop bg-cover bg-center bg-no-repeat"
        overlayClassName=""
      >
        <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
          {/* ANIMATION AREA */}
          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
            <img
              src="/images/intro_mobile.png"
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

            <img
              src="/images/intro_desktop.png"
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

          <div className="h-2 md:h-6" />

          <div className="w-full flex justify-center pb-12 md:pb-20">
            <div
              style={{ fontFamily: "var(--font-sketch)" }}
              className="text-[#5a2423] text-base md:text-lg max-w-2xl leading-relaxed space-y-6"
            >
              <p className="font-semibold text-lg md:text-xl">
                É com profunda alegria que compartilhamos com você os detalhes
                do nosso grande dia.
              </p>

              <p>
                Nossa história nasceu em um lugar abençoado e, desde o início,
                foi construída não apenas por nós dois, mas também pelas mãos,
                orações e presenças de pessoas que sempre caminharam ao nosso
                lado. Amigos e família que fizeram parte de cada momento
                decisivo, celebraram nossas conquistas e sustentaram nossos
                passos e que continuarão ao nosso lado, inclusive no altar.
              </p>

              <p>
                Crescemos juntos. Atravessamos a adolescência, amadurecemos,
                aprendemos e nos fortalecemos. Descobrimos que aquilo que
                faltava em um sempre encontrava abrigo no outro. Entre desafios
                e sonhos compartilhados, fomos edificando uma base firme,
                sustentada pelo amor e pela fé.
              </p>

              <p>
                Em um cenário digno de cinema, sob a luz da Aurora Boreal, veio
                o pedido de casamento, um instante que marcou para sempre o
                início de uma nova etapa. Celebramos o noivado, o casamento
                civil e agora nos preparamos para o momento mais esperado: a
                consagração do nosso matrimônio diante de Deus.
              </p>

              <p>
                Este novo capítulo será escrito com união, sabedoria e
                companheirismo. E se você está aqui, é porque faz parte dessa
                trajetória, do passado que nos formou e do futuro que começamos
                a construir.
              </p>

              <p>
                Nossa gratidão à Deus, que guia nossos caminhos; aos nossos
                pais, Marcus, Cristiane, Gilberto e Dione; aos nossos irmãos, às
                nossas avós e a todos que, com amor, nos trouxeram até aqui.
              </p>
            </div>
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
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134]">
            {t.sections.programacao.title}
          </h2>

          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
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

          <div className="h-2 md:h-6" />

          <div className="w-full flex justify-center pb-12 md:pb-20">
            <p
              style={{ fontFamily: "var(--font-sketch)" }}
              className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
            >
              No dia <strong>01 de agosto de 2026</strong>, a cerimônia
              religiosa será na <strong>Capela Santa Luzia</strong>, às{" "}
              <strong>17h30</strong>, seguida da recepção no{" "}
              <strong>Hotel Rosewood</strong> (salão principal) às{" "}
              <strong>19h30</strong>, em São Paulo.
              <br />
              <br />
              <strong>Traje:</strong> social completo.{" "}
              <a
                href="/moodboard"
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
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134]">
            {t.sections.comoChegar.title}
          </h2>

          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
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

          <div className="h-2 md:h-6" />

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
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134]">
            {t.sections.hospedagem1.title}
          </h2>

          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
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

          <div className="h-2 md:h-6" />

          <div className="w-full flex justify-center pb-12 md:pb-20">
            <p
              style={{ fontFamily: "var(--font-sketch)" }}
              className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
            >
              Para quem desejar se hospedar no local do casamento, o{" "}
              <strong>Hotel Rosewood São Paulo</strong> oferece condições
              especiais para os convidados.
              <br />
              <br />
              Recomendamos entrar em contato diretamente com o hotel para
              consultar disponibilidade e valores.
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
              Também indicamos outros hotéis na região (distância em km a partir
              do Hotel Rosewood):
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
                Blue Tree Paulista - 1.6 km - 4 estrelas
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
                href="https://all.accor.com/hotel/9610/index.pt-br.shtml"
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
            {/* MOBILE VERSION */}
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

            {/* DESKTOP VERSION */}
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

      {/* Dicas */}
      <Section id="dicas" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134]">
            {t.sections.dicas.title}
          </h2>

          <div className="mt-6 md:mt-10 w-full flex items-center justify-center">
            {/* Mobile image */}
            <img
              src="/images/dicas-mobile.png"
              alt=""
              className="
          block md:hidden
          w-[240px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
            />

            {/* Desktop image */}
            <img
              src="/images/dicas-desktop.png"
              alt=""
              className="
          hidden md:block
          w-[360px] lg:w-[440px] xl:w-[520px]
          h-auto
          object-contain
          pointer-events-none
          select-none
        "
            />
          </div>

          <div className="h-4 md:h-6" />

          <div className="w-full flex justify-center pb-12 md:pb-20">
            <p
              style={{ fontFamily: "var(--font-sketch)" }}
              className="text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed"
            >
              São Paulo é uma cidade vibrante, cheia de cultura, boa comida e
              programas para todos os gostos. Para quem vem de fora e quer
              aproveitar um pouco mais a cidade, reunimos aqui alguns dos nossos
              restaurantes favoritos e algumas sugestões de passeios. Esperamos
              que vocês aproveitem!
            </p>
          </div>
        </div>
      </Section>

      {/* Dicas 2 */}
      <Section id="dicas-2" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134] text-center">
            Restaurantes
          </h2>

          <div
            style={{ fontFamily: "var(--font-sketch)" }}
            className="mt-10 text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed text-left"
          >
            <p className="font-semibold mb-2">Japonês</p>
            <ul className="mb-6 space-y-1">
              <li>
                •{" "}
                <a
                  href="https://www.makotosan.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Makoto
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.instagram.com/shinzushioficial/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Shinzushi
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.grupoemerestaurantes.com.br/mi-ado"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Miado
                </a>
              </li>
            </ul>

            <p className="font-semibold mb-2">Italiano</p>
            <ul className="mb-6">
              <li>
                •{" "}
                <a
                  href="https://www.instagram.com/bottegabernacca/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Bottega Bernacca
                </a>
              </li>
            </ul>

            <p className="font-semibold mb-2">Francês</p>
            <ul className="mb-6">
              <li>
                •{" "}
                <a
                  href="https://entrecoteolivier.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  L’Entrecôte d’Olivier
                </a>
              </li>
            </ul>

            <p className="font-semibold mb-2">Carnes</p>
            <ul className="mb-6">
              <li>
                •{" "}
                <a
                  href="https://drtche.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Dr. Tchê La Parrilla de La Villa
                </a>
              </li>
            </ul>

            <p className="font-semibold mb-2">Frutos do mar</p>
            <ul className="mb-6">
              <li>
                •{" "}
                <a
                  href="https://www.instagram.com/barumarisqueria/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Baru Marisqueira
                </a>
              </li>
            </ul>

            <p className="font-semibold mb-2">Clássicos paulistanos</p>
            <ul className="mb-6 space-y-1">
              <li>
                •{" "}
                <a
                  href="https://www.instagram.com/bardomane/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Bar do Mané
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://almanara.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Almanara
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.instagram.com/saocarloslanches/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  São Carlos Lanches
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://zdeli.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Z Deli Sandwich Shop
                </a>
              </li>
            </ul>

            <p className="font-semibold mb-2">Café</p>
            <ul>
              <li>
                •{" "}
                <a
                  href="https://www.instagram.com/desegunda.restaurante/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  De Segunda Café
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Dicas 3 */}
      <Section id="dicas-3" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-4xl md:text-7xl font-semibold text-[#1c5134] text-center leading-tight">
            O que fazer em
            <br className="md:hidden" /> São Paulo
          </h2>

          <div
            style={{ fontFamily: "var(--font-sketch)" }}
            className="mt-10 text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed text-left space-y-6"
          >
            <div>
              <p>
                <a
                  href="https://parqueibirapuera.org/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Parque Ibirapuera
                </a>
              </p>
              <p>
                Perfeito para caminhar, correr ou andar de bicicleta em um dos
                parques mais icônicos da cidade.
              </p>
            </div>

            <div>
              <p>
                <a
                  href="https://masp.org.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  MASP
                </a>
              </p>
              <p>
                Museu de arte na Avenida Paulista, conhecido pela arquitetura
                marcante e excelentes exposições.
              </p>
            </div>

            <div>
              <p>
                <a
                  href="https://mercadomunicipalsp.com/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Mercado Municipal
                </a>
              </p>
              <p>
                Um passeio clássico para provar frutas tropicais e o famoso
                sanduíche de mortadela.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dicas 4 */}
      <Section id="dicas-4" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134] text-center">
            Compras
          </h2>

          <div
            style={{ fontFamily: "var(--font-sketch)" }}
            className="mt-10 text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed text-left space-y-6"
          >
            <div>
              <p>
                <a
                  href="https://cidadejardimshopping.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Shopping Cidade Jardim
                </a>
              </p>
            </div>

            <div>
              <p className="font-semibold">Região dos Jardins</p>
              <p>
                Uma das áreas mais gostosas da cidade para passear entre lojas,
                cafés e restaurantes.
              </p>
            </div>

            <div>
              <p>
                <a
                  href="https://www.cidadematarazzo.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Cidade Matarazzo / Mata Lab
                </a>
              </p>
              <p>
                Espaço de moda, design e lifestyle dentro do complexo do
                Rosewood.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dicas 5 */}
      <Section id="dicas-5" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134] text-center">
            Treino e bem-estar
          </h2>

          <div
            style={{ fontFamily: "var(--font-sketch)" }}
            className="mt-10 text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed text-left"
          >
            <ul className="space-y-2">
              <li>
                •{" "}
                <a
                  href="https://parqueibirapuera.org/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Corrida ou caminhada no Ibirapuera
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://studiovelocity.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Aula de spinning na Velocity Studio
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://lescinqgym.com.br/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Yoga ou pilates no Les Cinq Gym
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.funcionalfight.com/"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Luta + funcional no Funcional Fight Club
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://rosewoodhotels.com/en/sao-paulo/wellness/asaya-spa"
                  target="_blank"
                  className="underline font-semibold hover:opacity-70 transition"
                >
                  Spa Asaya dentro do Rosewood
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Clima */}
      <Section id="clima" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134] text-center">
            Clima
          </h2>

          <div
            style={{ fontFamily: "var(--font-sketch)" }}
            className="mt-10 text-[#5a2423] text-base md:text-lg max-w-xl leading-relaxed text-left"
          >
            <p>
              No início de agosto, São Paulo costuma ter um clima ameno e
              agradável, típico do inverno paulistano. As temperaturas médias
              ficam entre <span className="font-semibold">12 °C e 24 °C</span>,
              com dias ensolarados ou parcialmente nublados e noites mais
              frescas.
            </p>

            <p className="mt-4">
              Esse também é um dos períodos mais secos do ano, com baixa chance
              de chuva — ideal para aproveitar a cidade e celebrar ao ar livre.
            </p>

            <p className="mt-4">
              Recomendamos trazer um{" "}
              <span className="font-semibold">casaco leve</span> para a noite ✨
            </p>

            <p className="mt-6 text-sm opacity-70">
              *Esta é apenas uma estimativa com base em dados históricos. A
              previsão atualizada será exibida aqui mais perto da data do
              casamento.*
            </p>
          </div>
        </div>
      </Section>

      {/* Cabelo & Make */}
      <Section id="cabelo-make" overlayClassName="">
        <div className="min-h-screen w-full flex flex-col items-center text-center px-6 md:px-8">
          <h2 className="mt-16 md:mt-20 text-6xl md:text-7xl font-semibold text-[#1c5134]">
            {t.sections.cabeloMake.title}
          </h2>

          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
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

          <div className="h-4 md:h-8" />

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
          <h2 className="pt-16 md:pt-20 text-6xl md:text-7xl font-semibold text-[#1c5134]">
            {t.sections.presentes.title}
          </h2>

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
              <br />
              <a
                href="https://www.instagram.com/accanto.casa/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                Accanto Casa
              </a>
            </p>
          </div>

          <div className="h-2 md:h-6" />

          <div className="mt-4 md:mt-10 w-full flex items-center justify-center">
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

          <div className="h-10 md:h-16" />
        </div>
      </Section>
    </main>
  );
}
