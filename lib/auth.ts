import type { NextRequest } from "next/server";

export function isAdminAuthorized(request: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const provided = request.headers.get("x-admin-password");
  return provided === expected;
}