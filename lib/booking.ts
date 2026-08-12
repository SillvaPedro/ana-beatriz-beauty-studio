const startHour = 8;
const endHour = 22;

export const availableTimeSlots = Array.from(
  { length: endHour - startHour + 1 },
  (_, index) => `${String(startHour + index).padStart(2, "0")}:00`
);
