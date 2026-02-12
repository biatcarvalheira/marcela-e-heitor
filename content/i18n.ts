export type BgAsset = {
  mobile?: string;
  desktop?: string;
  placeholder?: string;
};

export type SectionKey =
  | "home"
  | "programacao"
  | "comoChegar"
  | "rsvp"
  | "hospedagem"
  | "cabeloMake"
  | "dicas"
  | "presentes";

export const t = {
  site: {
    coupleName: "Marcela e Heitor",
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
      title: "Bem-vindos",
      subtitle: "Estamos muito felizes em celebrar com vocês!",
    },
    programacao: {
      id: "programacao",
      title: "Programação",
      content: ["Cerimônia: 15h", "Recepção: 16h30", "Traje: Social"],
    },

    // ✅ NEW SECTION
    comoChegar: {
      id: "como-chegar",
      title: "Como chegar",
    },

    rsvp: {
      id: "rsvp",
      title: "RSVP",
      cta: "Clique aqui",
      href: "/rsvp",
    },
    hospedagem1: {
      id: "hospedagem",
      title: "Hospedagem",
      content: ["Sugestões de hotéis em breve."],
    },

    // (Optional) add when you build the section
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

  // ✅ keys updated to match SectionKey, hrefs stay kebab-case
  navItems: [
    { key: "programacao", label: "Programação", href: "#programacao" },
    { key: "comoChegar", label: "Como Chegar", href: "#como-chegar" },
    { key: "hospedagem", label: "Hospedagem", href: "#hospedagem-1" },
    { key: "cabeloMake", label: "Cabelo & Make", href: "#cabelo-make" },
    { key: "rsvp", label: "RSVP", href: "#rsvp" },
    { key: "presentes", label: "Presentes", href: "#presentes" },
  ],
};