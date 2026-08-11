"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const serviceOptions = [
  "Maquiagem de noiva",
  "Maquiagem para evento",
  "Ensaios fotográficos",
  "Atendimento em domicílio",
  "Outro",
];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Olá, Ana Beatriz! Gostaria de agendar um atendimento.%0A%0ANome: ${encodeURIComponent(
      name
    )}%0AServiço: ${encodeURIComponent(service)}%0AData desejada: ${encodeURIComponent(
      date || "A combinar"
    )}%0AObservações: ${encodeURIComponent(message || "Nenhuma")}`;
    window.open(`${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-brown-200 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brown-500 focus:ring-2 focus:ring-brown-200";
  const labelClass = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Seu nome
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Maria Silva"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Serviço desejado
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClass}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="date" className={labelClass}>
          Data desejada <span className="font-normal text-ink/50">(opcional)</span>
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Observações <span className="font-normal text-ink/50">(opcional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte um pouco sobre o que você precisa..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-xs text-ink/60">
        Ao enviar, você será direcionada ao WhatsApp para confirmar a disponibilidade.
      </p>
    </form>
  );
}
