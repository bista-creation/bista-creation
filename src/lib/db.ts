import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

/**
 * Neon serverless Postgres client.
 * Uses the pooled connection string (DATABASE_URL) for application traffic.
 * For long-running servers, swap to DATABASE_URL_UNPOOLED via the Neon CLI:
 *   neon env pull --branch production
 */
export const db = neon(connectionString);
