import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { courses, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cursos Online",
  description:
    "Cursos online de automaquiagem com acesso vitalÃ­cio, certificado e suporte. Aprenda no seu ritmo.",
};

const steps = [
  {
    title: "1. Escolha seu curso",
    description: "Selecione o curso ideal para o seu nÃ­vel e objetivo.",
  },
  {
    title: "2. Garanta seu acesso",
    description: "Finalize a compra pelo WhatsApp e receba seu acesso imediatamente.",
  },
  {
    title: "3. Aprenda no seu ritmo",
    description: "Aulas gravadas com acesso vitalÃ­cio, em qualquer dispositivo.",
  },
];

export default function CursosPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brown-50 via-cream to-beige-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-brown-600">
            Cursos de autoatendimento
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Aprenda automaquiagem comigo
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Cursos online com aulas claras, passo a passo e acesso vitalÃ­cio. Do look do dia a dia
            Ã  formaÃ§Ã£o profissional completa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
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
            <h2 className="font-display text-2xl font-bold text-ink">O que estÃ¡ incluso</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Acesso vitalÃ­cio a todas as aulas",
                "Certificado de conclusÃ£o",
                "Suporte pelo WhatsApp durante o curso",
                "Material de apoio para download",
                "Acesso em celular, tablet e computador",
              ].map((item) => (
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
            <h3 className="font-display text-xl font-bold text-ink">DÃºvidas sobre os cursos?</h3>
            <p className="mt-2 text-sm text-ink/70">
              Fale diretamente com a Ana Beatriz pelo WhatsApp e tire todas as suas dÃºvidas antes de
              comeÃ§ar.
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
