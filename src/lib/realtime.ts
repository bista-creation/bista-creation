import { createRealtime } from "@neon/realtime/server";

const url = process.env.NEON_REALTIME_URL;
const secret = process.env.NEON_REALTIME_SECRET;
const dbName = process.env.NEON_REALTIME_DB ?? "neondb";

if (!url || !secret) {
  throw new Error("NEON_REALTIME_URL and NEON_REALTIME_SECRET are not set");
}

/**
 * Neon Realtime server client (Live SQL API).
 * In trusted backend code, define + seal live queries with NEON_REALTIME_SECRET
 * and expose sealed queries from authenticated endpoints/server functions.
 */
export const realtime = createRealtime({
  url,
  secret,
  db: dbName,
});
