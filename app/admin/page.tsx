import type { Metadata } from "next";
import AdminPanel from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Administração",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-brown-600">Área restrita</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-ink">
        Gerenciar agendamentos
      </h1>
      <p className="mt-4 text-ink/70">
        Acesse com a senha administrativa para ver os horários reservados e liberar horários de
        clientes que cancelaram.
      </p>

      <div className="mt-10 rounded-2xl border border-brown-100 bg-white p-7 shadow-sm sm:p-9">
        <AdminPanel />
      </div>
    </div>
  );
}