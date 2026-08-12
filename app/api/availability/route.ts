import type { NextRequest } from "next/server";
import { getAvailability, reserveSlot } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? "";
  const availability = await getAvailability(date);
  return Response.json(availability);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { date, time } = body as { date?: unknown; time?: unknown };

  if (typeof date !== "string" || typeof time !== "string" || !date || !time) {
    return Response.json({ error: "Data e horário são obrigatórios." }, { status: 400 });
  }

  const reserved = await reserveSlot(date, time);

  if (!reserved) {
    return Response.json({ reserved: false }, { status: 409 });
  }

  return Response.json({ reserved: true });
}
