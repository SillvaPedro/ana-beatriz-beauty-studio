import type { Metadata } from "next";
import { portfolioItems, site } from "@/lib/site";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Trabalhos de maquiagem profissional realizados pela Ana Beatriz.",
};

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

      <PortfolioGallery items={portfolioItems} />

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
