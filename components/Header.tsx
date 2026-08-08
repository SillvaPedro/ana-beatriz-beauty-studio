"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/agendamento", label: "Agendamento" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blush-100 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blush-500 to-gold-400 text-sm font-bold text-white">
            AB
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Ana Beatriz
            <span className="text-blush-600"> Studio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-blush-600"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blush-600 to-gold-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Agendar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-blush-100 bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-blush-50 hover:text-blush-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gradient-to-r from-blush-600 to-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
