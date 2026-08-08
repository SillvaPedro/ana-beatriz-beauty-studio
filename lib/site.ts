export const site = {
  name: "Ana Beatriz Beauty Studio",
  tagline: "Maquiagem profissional & cursos online",
  description:
    "Studio de maquiagem com atendimento personalizado e cursos online de automaquiagem. Realce sua beleza com Ana Beatriz.",
  instagram: "https://instagram.com/anabeatrizbeauty",
  instagramHandle: "@anabeatrizbeauty",
  whatsapp: "https://wa.me/5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  email: "contato@anabeatrizbeauty.com.br",
  city: "São Paulo, SP",
};

export const courses = [
  {
    slug: "automaquiagem-para-iniciantes",
    title: "Automaquiagem para Iniciantes",
    description:
      "Do zero ao look pronto: base, contorno, sombra e lábios explicados passo a passo para o seu dia a dia.",
    duration: "2h30",
    lessons: 18,
    level: "Iniciante",
    price: "R$ 49,90",
    oldPrice: "R$ 79,90",
    highlights: [
      "Aulas gravadas e vitalícias",
      "Lista de produtos acessíveis",
      "Certificado de conclusão",
      "Suporte via WhatsApp",
    ],
  },
  {
    slug: "maquiagem-para-eventos",
    title: "Maquiagem para Eventos",
    description:
      "Looks de festa, casamento e formatura com acabamento profissional. Aprenda técnicas de longa duração.",
    duration: "3h",
    lessons: 24,
    level: "Intermediário",
    price: "R$ 79,90",
    oldPrice: "R$ 119,90",
    highlights: [
      "Técnicas de fixação e longa duração",
      "Looks para pele negra e madura",
      "Certificado de conclusão",
      "Acesso vitalício",
    ],
  },
  {
    slug: "curso-profissional-completo",
    title: "Curso Profissional Completo",
    description:
      "Formação completa para quem quer atuar como maquiadora profissional: atendimento, marketing e técnicas.",
    duration: "12h",
    lessons: 62,
    level: "Avançado",
    price: "R$ 199,90",
    oldPrice: "R$ 299,90",
    highlights: [
      "Formação de maquiadora profissional",
      "Módulo de marketing e precificação",
      "Atendimento ao cliente",
      "Certificado + suporte exclusivo",
    ],
  },
];

export const portfolioItems = [
  { src: "/images/portfolio/noiva.svg", alt: "Maquiagem para noiva", category: "Noivas", title: "Look Noiva" },
  { src: "/images/portfolio/noiva2.svg", alt: "Maquiagem de noiva clássica", category: "Noivas", title: "Noiva Clássica" },
  { src: "/images/portfolio/social.svg", alt: "Maquiagem para festa", category: "Eventos", title: "Look Festa" },
  { src: "/images/portfolio/social2.svg", alt: "Maquiagem social sofisticada", category: "Eventos", title: "Social Sofisticado" },
  { src: "/images/portfolio/automaquiagem.svg", alt: "Maquiagem para o dia a dia", category: "Dia a Dia", title: "Make Rápida" },
  { src: "/images/portfolio/dia-a-dia.svg", alt: "Maquiagem natural", category: "Dia a Dia", title: "Look Natural" },
];
