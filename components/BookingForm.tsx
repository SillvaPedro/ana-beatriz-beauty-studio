"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const serviceOptions = [
  "Maquiagem de noiva",
  "Maquiagem para evento",
  "Ensaios fotográficos",
  "Atendimento em domicílio",
  "Outro",
];

type Availability = {
  available: string[];
  booked: string[];
};

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [availability, setAvailability] = useState<Availability>({
    available: [],
    booked: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!date) return;
    let cancelled = false;
    fetch(`/api/availability?date=${encodeURIComponent(date)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAvailability(data);
      })
      .catch(() => {
        if (!cancelled) setAvailability({ available: [], booked: [] });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [date]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDate(value);
    setTime("");
    setAvailability({ available: [], booked: [] });
    setLoading(Boolean(value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (date && time) {
      try {
        const response = await fetch("/api/availability", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date, time }),
        });
        const data = await response.json();
        if (!data.reserved) {
          setTime("");
          alert(
            "Esse horário acabou de ser agendado por outra cliente. Escolha outro e tente novamente."
          );
          fetch(`/api/availability?date=${encodeURIComponent(date)}`)
            .then((res) => res.json())
            .then((fresh) => setAvailability(fresh))
            .catch(() => undefined);
          return;
        }
      } catch {
        alert("Não foi possível confirmar o horário. Verifique sua conexão e tente novamente.");
        return;
      }
    }
    const text = `Olá, Ana Beatriz! Gostaria de agendar um atendimento.%0A%0ANome: ${encodeURIComponent(
      name
    )}%0AServiço: ${encodeURIComponent(service)}%0AData desejada: ${encodeURIComponent(
      date || "A combinar"
    )}%0AHorário desejado: ${encodeURIComponent(time || "A combinar")}%0AObservações: ${encodeURIComponent(
      message || "Nenhuma"
    )}`;
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
          Data desejada
        </label>
        <input
          id="date"
          type="date"
          required
          value={date}
          onChange={handleDateChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="time" className={labelClass}>
          Horário desejado
        </label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required={Boolean(date)}
          disabled={!date || loading}
          className={inputClass}
        >
          <option value="" disabled>
            {!date
              ? "Escolha a data primeiro"
              : loading
              ? "Carregando horários..."
              : "Escolha um horário"}
          </option>
          {availability.available.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {availability.booked.length > 0 && (
          <p className="mt-2 text-xs text-brown-600">
            {availability.booked.length}{" "}
            {availability.booked.length === 1
              ? "horário já foi agendado e foi bloqueado"
              : "horários já foram agendados e foram bloqueados"}
            .
          </p>
        )}
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
