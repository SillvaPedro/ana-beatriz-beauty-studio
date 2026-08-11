import type { Metadata } from "next";
import Image from "next/image";
import { portfolioItems, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Trabalhos de maquiagem profissional realizados pela Ana Beatriz.",
};

const categories = ["Todos", "Noivas", "Eventos", "Dia a Dia"];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Portfólio</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink">
          Transformações reais
        </h1>
        <p className="mt-4 text-ink/70">
          Alguns dos looks que já entreguei para noivas, eventos e ensaios. Cada maquiagem é
          pensada para realçar a beleza única de cada cliente.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <a
            key={category}
            href={category === "Todos" ? "#todos" : `#${category.toLowerCase().replace(" ", "-")}`}
            className="rounded-full border border-brown-200 px-5 py-2 text-sm font-semibold text-brown-700 transition-colors hover:bg-brown-600 hover:text-white"
          >
            {category}
          </a>
        ))}
      </div>

      <div id="todos" className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>div]:mb-5">
        {portfolioItems.map((item) => (
          <div key={item.title} className="group relative break-inside-avoid overflow-hidden rounded-2xl">
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={750}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brown-950/70 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-beige-200">
                  {item.category}
                </p>
                <p className="font-display text-xl font-semibold text-white">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-brown-100 bg-gradient-to-br from-brown-50 to-beige-50 p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-ink">
          Quer um look assim no seu momento especial?
        </h2>
        <p className="mt-2 text-ink/70">
          Agende seu atendimento ou fale comigo pelo WhatsApp.
        </p>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
        >
          Agendar no WhatsApp
        </a>
      </div>
    </div>
  );
}
