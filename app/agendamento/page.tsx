import type { Metadata } from "next";
import { site } from "@/lib/site";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Agendamento",
  description:
    "Agende seu atendimento de maquiagem profissional com Ana Beatriz Beauty Studio.",
};

const services = [
  { id: "make", label: "Make", price: "R$80,00" },
  { id: "make-cabelo", label: "Make & Cabelo", price: "R$150,00" },
  { id: "combo-estudio", label: "Combo Make + Cabelo + Fotos editadas (estúdio)", price: "R$200,00" },
  { id: "combo-externo", label: "Combo Make + Cabelo + Fotos editadas (externas)", price: "R$250,00" },
  { id: "edicao-video", label: "Edição de vídeo gravado pelo cliente", price: "R$50,00" },
  { id: "cobertura-stories", label: "Cobertura de stories", price: "R$150,00" },
  { id: "artes", label: "Artes para perfil comercial", price: "R$50,00 (por arte)" },
  { id: "combo-dia-completo", label: "Dia completo: Vídeo + edição + fotos + cobertura de stories", price: "R$300,00" },
];

const faqs = [
  {
    question: "Como funciona o agendamento?",
    answer:
      "Preencha o formulário e você será direcionada ao WhatsApp com a sua solicitação. A Ana Beatriz confirma disponibilidade e combina tudo por lá.",
  },
  {
    question: "Vocês atendem em domicílio?",
    answer:
      "Sim! Atendemos em domicílio em São Paulo e região, com taxa de deslocamento calculada conforme a distância.",
  },
  {
    question: "Preciso pagar sinal para reservar?",
    answer:
      "Sim, é necessário um sinal para garantir a data. O restante pode ser combinado no dia do atendimento.",
  },
];

export default function AgendamentoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Agendamento</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink">
          Agende sua maquiagem
        </h1>
        <p className="mt-4 text-ink/70">
          Escolha o serviço, preencha seus dados e envie a solicitação pelo WhatsApp. Você recebe a
          confirmação rapidinho.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm sm:p-9">
            <BookingForm />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink">Serviços e valores</h2>
            <ul className="mt-4 divide-y divide-brown-50">
              {services.map((service) => (
                <li
                  key={service.id}
                  className={`flex items-center justify-between gap-3 py-3 text-sm ${
                    service.id === "combo-dia-completo"
                      ? "font-semibold text-brown-700"
                      : "text-ink"
                  }`}
                >
                  <span className={service.id === "combo-dia-completo" ? "font-display" : "font-semibold"}>
                    {service.label}
                  </span>
                  <span className={service.id === "combo-dia-completo" ? "text-lg font-bold" : "text-brown-700"}>
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink/60">
              Valores sujeitos a alteração conforme região e detalhes do atendimento.
            </p>
          </div>

          <div className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink">Perguntas frequentes</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <p className="text-sm font-bold text-ink">{faq.question}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-brown-700 to-beige-600 p-7 text-white shadow-md">
            <h2 className="font-display text-xl font-bold">Prefere conversar direto?</h2>
            <p className="mt-2 text-sm text-white/90">
              Chame a Ana Beatriz pelo WhatsApp ou acompanhe novidades pelo Instagram.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brown-700 transition-opacity hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brown-700"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
