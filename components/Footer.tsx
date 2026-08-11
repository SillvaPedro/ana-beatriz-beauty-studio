import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/agendamento", label: "Agendamento" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-brown-900 to-beige-700 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">Ana Beatriz Makeup Studio</p>
          <p className="mt-3 max-w-xs text-sm text-white/80">
            Maquiagem profissional e cursos online de automaquiagem.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-beige-200">Navegação</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-beige-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-beige-200">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-beige-200"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-beige-200"
              >
                {site.whatsappDisplay}
              </a>
            </li>
            <li>{site.email}</li>
            <li>{site.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
