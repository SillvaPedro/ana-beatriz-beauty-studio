import type { Metadata } from "next";
import Image from "next/image";
import { courses, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Curso de Automaquiagem",
  description:
    "Curso de automaquiagem presencial com apostila inclusa e atendimento personalizado com Ana Beatriz.",
};

const steps = [
  {
    title: "1. Fale comigo no WhatsApp",
    description: "Chame pelo WhatsApp para combinar data, horário e local da aula.",
  },
  {
    title: "2. Realize sua aula presencial",
    description: "Aula individual e personalizada, com acompanhamento passo a passo.",
  },
  {
    title: "3. Leve sua apostila",
    description: "Você sai com apostila inclusa para revisar e praticar em casa.",
  },
];

const included = [
  "Aula presencial individual",
  "Apostila inclusa",
  "Acompanhamento passo a passo",
  "Suporte pelo WhatsApp antes e depois da aula",
  "Dicas de produtos e materiais do dia a dia",
];

export default function CursosPage() {
  const course = courses[0];

  return (
    <div>
      <section className="bg-gradient-to-br from-brown-50 via-cream to-beige-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-brown-600">
            Curso de automaquiagem
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Aprenda automaquiagem comigo
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Aula presencial e personalizada, com apostila inclusa, para você aprender a valorizar
            sua beleza no dia a dia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-brown-100 bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative h-56 md:h-auto">
              <Image
                src="/images/courses/curso1.svg"
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-block rounded-full bg-brown-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brown-700">
                {course.level}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink">{course.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{course.description}</p>
              <div className="mt-5 space-y-2 text-sm text-ink/80">
                <p>
                  <span className="font-bold text-brown-700">Duração:</span> {course.duration}
                </p>
                <p>
                  <span className="font-bold text-brown-700">Investimento:</span> {course.price}
                </p>
              </div>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm">
              <p className="font-display text-2xl font-bold text-beige-500">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl border border-brown-100 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">O que está incluso</h2>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-beige-500" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-brown-50 to-beige-50 p-8">
            <h3 className="font-display text-xl font-bold text-ink">Dúvidas sobre o curso?</h3>
            <p className="mt-2 text-sm text-ink/70">
              Fale diretamente com a Ana Beatriz pelo WhatsApp e tire todas as suas dúvidas antes de
              agendar.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block self-start rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}