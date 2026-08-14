export const site = {
  name: "Ana Beatriz Beauty Studio",
  tagline: "Maquiagem profissional & curso de automaquiagem",
  description:
    "Studio de maquiagem com atendimento personalizado e curso presencial de automaquiagem. Realce sua beleza com Ana Beatriz.",
  instagram: "https://www.instagram.com/anabeatrizbeauty_studio/",
  instagramHandle: "@anabeatrizbeauty_studio",
  whatsapp: "https://wa.me/83998064139",
  whatsappDisplay: "(83) 99806-4139",
  email: "contato@anabeatrizbeauty.com.br",
  city: "Remigio, PB",
};

export const courses = [
  {
    slug: "automaquiagem-presencial",
    title: "Automaquiagem Presencial",
    description:
      "Aula presencial e personalizada para você aprender a se maquiar no dia a dia, com apostila inclusa.",
    duration: "2 a 3 horas",
    lessons: 1,
    level: "Iniciante",
    image: "/images/courses/curso1.svg",
    price: "R$150,00",
    priceOptions: [
      { label: "Aula individual", value: "R$150,00" },
      { label: "Aula em grupo (até 4 pessoas)", value: "R$120,00 por pessoa" },
    ],
    highlights: [
      "Aula presencial individual",
      "Apostila inclusa",
      "Acompanhamento passo a passo",
      "Suporte via WhatsApp",
    ],
  },
];

export const portfolioItems = [
  { src: "/images/noiva1.jpg", alt: "Maquiagem para noiva", category: "Noivas", title: "Look Noiva" },
  { src: "/images/noiva2.jpg", alt: "Maquiagem de noiva clássica", category: "Noivas", title: "Noiva Clássica" },
  { src: "/images/maquiagem thaisa.jpeg", alt: "Maquiagem Thais", category: "Eventos", title: "Maquiagem Thais" },
  { src: "/images/maquiagem.jpeg", alt: "Maquiagem social", category: "Eventos", title: "Maquiagem" },
  { src: "/images/maquiagem bia.jpeg", alt: "Maquiagem Bia", category: "Eventos", title: "Maquiagem Bia" },
  { src: "/images/maquiagem stefany.jpeg", alt: "Maquiagem Stefany", category: "Eventos", title: "Maquiagem Stefany" },
];
