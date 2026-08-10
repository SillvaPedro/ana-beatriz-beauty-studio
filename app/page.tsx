import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, portfolioItems, site } from "@/lib/site";

const services = [
  {
    title: "Maquiagem Profissional",
    description: "Eventos, noivas, ensaios e ocasiÃµes especiais com acabamento impecÃ¡vel.",
    icon: "M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z",
  },
  {
    title: "Cursos Online",
    description: "Autoatendimento: aprenda no seu ritmo, com acesso vitalÃ­cio e certificado.",
    icon: "M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4V5zm6 3v4l3-2z",
  },
  {
    title: "Atendimento DomicÃ­lio",
    description: "Vou atÃ© vocÃª no dia do evento. Conforto e comodidade para o seu momento.",
    icon: "M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z",
  },
];

const testimonials = [
  {
    text: "Fiz o curso de automaquiagem e hoje consigo montar looks lindos para qualquer ocasiÃ£o. As aulas sÃ£o claras e muito didÃ¡ticas!",
    author: "Mariana S.",
  },
  {
    text: "Ana Beatriz fez a minha maquiagem de casamento. Perfeita, durou o dia inteiro e recebi elogios de todos. Recomendo demais!",
    author: "Juliana P.",
  },
  {
    text: "O curso profissional mudou minha carreira. Aprendi tÃ©cnicas, precificaÃ§Ã£o e como atender clientes. Estou faturando com maquiagem!",
    author: "Carla M.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brown-50 via-cream to-beige-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brown-600">
              Maquiagem & cursos online
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Realce sua beleza com{" "}
              <span className="bg-gradient-to-r from-brown-600 to-beige-500 bg-clip-text text-transparent">
                Ana Beatriz
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              {site.description} Aprenda automaquiagem no seu ritmo ou agende um atendimento
              personalizado.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/agendamento"
                className="rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              >
                Agendar atendimento
              </Link>
              <Link
                href="/cursos"
                className="rounded-full border-2 border-brown-600 px-7 py-3 text-sm font-semibold text-brown-700 transition-colors hover:bg-brown-600 hover:text-white"
              >
                Ver cursos online
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-2xl font-bold text-ink">+500</p>
                <p className="text-sm text-ink/60">maquiagens realizadas</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-ink">+1.200</p>
                <p className="text-sm text-ink/60">alunas nos cursos</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-ink">5.0</p>
                <p className="text-sm text-ink/60">avaliaÃ§Ã£o mÃ©dia</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brown-400 to-beige-400 opacity-30 blur-2xl" />
            <Image
              src="/images/hero.svg"
              alt="Maquiagem profissional Ana Beatriz"
              width={640}
              height={720}
              priority
              className="relative w-full rounded-[2rem] border-4 border-white object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brown-500 to-beige-400 text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d={service.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brown-600">PortfÃ³lio</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                Trabalhos recentes
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-brown-600 transition-colors hover:text-beige-500"
            >
              Ver portfÃ³lio completo â†’
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {portfolioItems.slice(0, 4).map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={500}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brown-950/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-beige-200">
                      {item.category}
                    </p>
                    <p className="font-display text-lg font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brown-600">
            Cursos de autoatendimento
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Aprenda no seu ritmo
          </h2>
          <p className="mt-4 text-ink/70">
            Aulas gravadas, acesso vitalÃ­cio e certificado de conclusÃ£o. Comece hoje mesmo.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brown-400 to-beige-400 opacity-30 blur-2xl" />
            <Image
              src="/images/profile.svg"
              alt="Ana Beatriz, maquiadora profissional"
              width={560}
              height={640}
              className="relative w-full rounded-[2rem] border-4 border-white object-cover shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Sobre</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              OlÃ¡, eu sou a Ana Beatriz
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              HÃ¡ mais de 7 anos eu transformo a forma como minhas clientes e alunas se enxergam.
              Especialista em maquiagem para eventos e noivas, criei cursos online para que vocÃª
              aprenda automaquiagem â€” do bÃ¡sico ao profissional â€” de forma simples e no seu tempo.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Atendimento em SÃ£o Paulo e regiÃ£o",
                "Mais de 500 maquiagens realizadas",
                "Cursos online com suporte direto",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-beige-500" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              Seguir no Instagram
              <span className="font-normal opacity-90">{site.instagramHandle}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-brown-50 via-cream to-beige-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Depoimentos</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Quem confia, recomenda
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-beige-400">
                  {"â˜…â˜…â˜…â˜…â˜…".split("").map((star, i) => (
                    <span key={i} className="text-lg">
                      {star}
                    </span>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink/80">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold text-ink">{t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brown-700 to-beige-600 px-6 py-14 text-center text-white shadow-xl sm:px-12">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10" />
          <h2 className="relative font-display text-3xl font-bold sm:text-4xl">
            Pronta para arrasar?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/90">
            Agende sua maquiagem ou garanta seu acesso aos cursos online com condiÃ§Ãµes especiais.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/agendamento"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brown-700 shadow transition-opacity hover:opacity-90"
            >
              Agendar agora
            </Link>
            <Link
              href="/cursos"
              className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brown-700"
            >
              Conhecer os cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
