import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await db`SELECT 1 AS ok`;
    return NextResponse.json({ ok: true, database: "connected", result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, database: "unreachable", error: message }, { status: 500 });
  }
}
