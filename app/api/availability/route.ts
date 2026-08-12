import type { NextRequest } from "next/server";
import { availableTimeSlots, bookedSlots } from "@/lib/booking";

export function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? "";
  const booked = bookedSlots[date] ?? [];
  const available = availableTimeSlots.filter((slot) => !booked.includes(slot));
  return Response.json({ date, available, booked });
}