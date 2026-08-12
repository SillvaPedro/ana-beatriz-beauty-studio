import postgres from "postgres";
import { availableTimeSlots } from "@/lib/booking";

let db: ReturnType<typeof postgres> | null = null;

function getDb() {
  if (!db) {
    db = postgres(process.env.POSTGRES_URL as string);
  }
  return db;
}

let ensured = false;

async function ensureTable() {
  if (ensured) return;
  await getDb()`
    CREATE TABLE IF NOT EXISTS bookings (
      date text NOT NULL,
      time text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY (date, time)
    )
  `;
  ensured = true;
}

export async function getBookedTimes(date: string) {
  await ensureTable();
  const rows = await getDb()`
    SELECT time FROM bookings WHERE date = ${date}
  `;
  return rows.map((row) => row.time);
}

export async function getAvailability(date: string) {
  const booked = await getBookedTimes(date);
  const available = availableTimeSlots.filter((slot) => !booked.includes(slot));
  return { date, available, booked };
}

export async function reserveSlot(date: string, time: string) {
  await ensureTable();
  const result = await getDb()`
    INSERT INTO bookings (date, time)
    VALUES (${date}, ${time})
    ON CONFLICT (date, time) DO NOTHING
  `;
  return result.count === 1;
}
