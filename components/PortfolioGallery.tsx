"use client";

import { useState } from "react";
import Image from "next/image";
import type { portfolioItem } from "@/lib/types";

const categories = ["Todos", "Noivas", "Eventos"];

export default function PortfolioGallery({ items }: { items: portfolioItem[] }) {
  const [active, setActive] = useState("Todos");
  const filtered =
    active === "Todos" ? items : items.filter((item) => item.category === active);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={
              active === category
                ? "rounded-full bg-brown-600 px-5 py-2 text-sm font-semibold text-white shadow-sm"
                : "rounded-full border border-brown-200 px-5 py-2 text-sm font-semibold text-brown-700 transition-colors hover:bg-brown-600 hover:text-white"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div key={item.title} className="group relative overflow-hidden rounded-2xl">
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={750}
              className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brown-950/70 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-beige-200">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}