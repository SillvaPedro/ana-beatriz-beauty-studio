"use client";

import { useState } from "react";

type Booking = {
  date: string;
  time: string;
  created_at: string;
};

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputClass =
    "mt-1 w-full rounded-lg border border-brown-200 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brown-500 focus:ring-2 focus:ring-brown-200";
  const labelClass = "block text-sm font-semibold text-ink";

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/bookings", {
        headers: { "x-admin-password": password },
      });
      if (!response.ok) {
        setError("Senha incorreta.");
        setLoading(false);
        return;
      }
      const data = await response.json();
      setBookings(data.bookings);
      setAuthed(true);
    } catch {
      setError("Não foi possível conectar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const releaseSlot = async (booking: Booking) => {
    if (!window.confirm(`Liberar o horário ${booking.date} às ${booking.time}?`)) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/bookings", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ date: booking.date, time: booking.time }),
      });
      if (!response.ok) {
        setError("Não foi possível liberar o horário. Tente novamente.");
        return;
      }
      setBookings((list) =>
        list.filter((item) => item.date !== booking.date || item.time !== booking.time)
      );
    } catch {
      setError("Não foi possível conectar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  if (!authed) {
    return (
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label htmlFor="admin-password" className={labelClass}>
            Senha de acesso
          </label>
          <input
            id="admin-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha administrativa"
            className={inputClass}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-gradient-to-r from-brown-600 to-beige-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold text-ink">Agendamentos</h2>
          <p className="mt-1 text-sm text-ink/70">
            {bookings.length === 0
              ? "Nenhum horário reservado."
              : `${bookings.length} horário${bookings.length === 1 ? "" : "s"} reservado${bookings.length === 1 ? "" : "s"}.`}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAuthed(false)}
          className="rounded-full border border-brown-200 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brown-50"
        >
          Sair
        </button>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {bookings.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-brown-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-brown-50 text-xs font-bold uppercase tracking-wide text-brown-700">
              <tr>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Horário</th>
                <th className="px-4 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brown-50 bg-white">
              {bookings.map((booking) => (
                <tr key={`${booking.date}-${booking.time}`}>
                  <td className="px-4 py-3 text-ink">{formatDate(booking.date)}</td>
                  <td className="px-4 py-3 text-ink">{booking.time}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => releaseSlot(booking)}
                      className="rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100 disabled:opacity-60"
                    >
                      Liberar horário
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
