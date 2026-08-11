import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, portfolioItems, site } from "@/lib/site";

const serviceGroups = [
  {
    title: "Make & Cabelo",
    items: [
      { name: "Make", price: "R$80,00" },
      { name: "Make & Cabelo", price: "R$150,00" },
      { name: "Combo Make + Cabelo + Fotos editadas (estúdio)", price: "R$200,00" },
      { name: "Combo Make + Cabelo + Fotos editadas (externas)", price: "R$250,00" },
    ],
  },
  {
    title: "Mídia & Criação",
    items: [
      { name: "Edição de vídeo gravado pelo cliente", price: "R$50,00" },
      { name: "Cobertura de stories", price: "R$150,00" },
      { name: "Artes para perfil comercial", price: "R$50,00 (por arte)" },
    ],
  },
];

const testimonials = [
  {
    text: "Fiz o curso de automaquiagem presencial e hoje consigo montar looks lindos para qualquer ocasião. As aulas são claras e muito didáticas!",
    author: "Ariely",
  },
  {
    text: "Ana Beatriz fez a minha maquiagem de casamento. Perfeita, durou o dia inteiro e recebi elogios de todos. Recomendo demais!",
    author: "Sidneia",
  },
  {
    text: "Fiz o curso de automaquiagem com a Ana Beatriz. A apostila e o acompanhamento passo a passo fizeram toda a diferença. Recomendo demais!",
    author: "Iza",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brown-50 via-cream to-beige-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-lg leading-relaxed text-ink/80">
              Aqui, cada produção é pensada especialmente para você, valorizando sua essência e
              deixando você ainda mais linda para viver e registrar momentos inesquecíveis.
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Ana Beatriz Makeup Studio
            </h1>
            <p className="mt-2 text-lg font-semibold text-brown-600">Sua beleza, do seu jeito. ✨</p>
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
                Ver o curso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços e Valores */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Serviços e valores</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Ana Beatriz Makeup Beauty Stúdio
          </h2>
          <p className="mt-4 text-ink/70">
            Ana Beatriz · Maquiadora Pro e Filmaker
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-brown-100 bg-white p-7 shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm leading-snug text-ink/80">{item.name}</span>
                      <span className="shrink-0 font-semibold text-brown-700">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brown-700 to-beige-600 p-7 text-white shadow-md">
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/10" />
            <p className="text-sm font-bold uppercase tracking-widest text-beige-200">Imperdível!!</p>
            <h3 className="mt-3 font-display text-2xl font-bold">
              Vídeo + edição + fotos + cobertura de stories do dia completo
            </h3>
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-sm text-white/90">Valor promocional</span>
              <span className="text-3xl font-bold">R$300,00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Portfólio</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                Trabalhos recentes
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-brown-600 transition-colors hover:text-beige-500"
            >
              Ver portfólio completo →
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
            Curso de automaquiagem
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Aprenda na prática
          </h2>
          <p className="mt-4 text-ink/70">
            Aula presencial com apostila inclusa, passo a passo e atendimento personalizado. Agende sua vaga.
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
              src="/images/img - principal.jpeg"
              alt="Ana Beatriz, maquiadora profissional"
              width={640}
              height={720}
              priority
              className="relative w-full rounded-[2rem] border-4 border-white object-cover shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Sobre</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Olá, eu sou a Ana Beatriz
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              Há mais de 2 anos eu transformo a forma como minhas clientes e alunas se enxergam, realizando
              atendimentos em Remigio e região. Especialista em maquiagem para eventos e noivas, criei um
              curso de automaquiagem presencial para você aprender na prática, com apostila e atendimento
              personalizado.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Atendimento em Remigio e região",
                "Mais de 500 maquiagens realizadas",
                "Curso presencial com apostila inclusa",
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
                  {"★★★★★".split("").map((star, i) => (
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
            Agende sua maquiagem ou garanta sua vaga no curso de automaquiagem presencial.
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
              Conhecer o curso
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
