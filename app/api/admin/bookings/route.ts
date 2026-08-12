import type { NextRequest } from "next/server";
import { getDb } from "@/lib/db";
import { isAdminAuthorized } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }
  const rows = await getDb()`
    SELECT date, time, created_at
    FROM bookings
    ORDER BY date, time
  `;
  return Response.json({ bookings: rows });
}

export async function DELETE(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }
  const body = await request.json();
  const { date, time } = body as { date?: unknown; time?: unknown };
  if (typeof date !== "string" || typeof time !== "string" || !date || !time) {
    return Response.json({ error: "Data e horário são obrigatórios." }, { status: 400 });
  }
  const result = await getDb()`
    DELETE FROM bookings WHERE date = ${date} AND time = ${time}
  `;
  return Response.json({ deleted: result.count === 1 });
}
