export type BgAsset = {
  mobile?: string;
  desktop?: string;
  placeholder?: string;
};

export type SectionKey =
  | "home"
  | "intro"
  | "programacao"
  | "comoChegar"
  | "rsvp"
  | "hospedagem"
  | "cabeloMake"
  | "dicas"
  | "clima"
  | "presentes";

export const t = {
  site: {
    coupleName: "Marcela & Heitor",
    dateLine: "x de xxxxx de 2026",
  },

  nav: {
    openLabel: "Abrir menu",
    closeLabel: "Fechar menu",
  },

  // INTRO VIDEO
  introVideo: {
    mobile: "/videos/intro-mobile.mp4",
    desktop: "/videos/intro-desktop.mp4",
    posterMobile: "/images/intro-poster-mobile.png",
    posterDesktop: "/images/intro-poster-desktop.png",
  },

  backgrounds: {
    home: {
      placeholder: "/images/placeholder-bg.png",
    },

    intro: {
      placeholder: "/images/placeholder-bg.png",
    },

    programacao: {
      placeholder: "/images/placeholder-bg.png",
    },

    rsvp: { placeholder: "/images/placeholder-bg.png" },
    hospedagem: { placeholder: "/images/placeholder-bg.png" },
    dicas: { placeholder: "/images/placeholder-bg.png" },
    presentes: { placeholder: "/images/placeholder-bg.png" },
  },

  sections: {
    home: {
      id: "home",
      title: "Marcela & Heitor",
      subtitle: "Estamos muito felizes em celebrar com vocês!",
    },

    intro: {
      id: "intro",
      title: "Introdução",
    },

    programacao: {
      id: "programacao",
      title: "Programação",
      content: ["Cerimônia: 15h", "Recepção: 16h30", "Traje: Social"],
    },

    comoChegar: {
      id: "como-chegar",
      title: "Como chegar",
    },

    hospedagem1: {
      id: "hospedagem",
      title: "Hospedagem",
      content: ["Sugestões de hotéis em breve."],
    },

    hospedagem2: {
      id: "hospedagem",
      title: "Hospedagem",
      content: ["Sugestões de hotéis em breve."],
    },

    cabeloMake: {
      id: "cabelo-make",
      title: "Cabelo & Make",
      content: ["Sugestões em breve."],
    },

    dicas: {
      id: "dicas",
      title: "Dicas",
      content: ["Informações úteis em breve."],
    },

    presentes: {
      id: "presentes",
      title: "Presentes",
      content: ["Lista de presentes em breve."],
    },
  },

  navItems: [
    { key: "programacao", label: "Programação", href: "#programacao" },
    { key: "comoChegar", label: "Como Chegar", href: "#como-chegar" },
    { key: "hospedagem", label: "Hospedagem", href: "#hospedagem-1" },
    { key: "dicas", label: "Dicas", href: "#dicas" },
    { key: "clima", label: "Clima", href: "#clima" },
    { key: "cabeloMake", label: "Cabelo & Make", href: "#cabelo-make" },
    { key: "presentes", label: "Presentes", href: "#presentes" },
  ],
};