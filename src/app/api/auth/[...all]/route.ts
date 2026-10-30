import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

const handler = auth.handler();

type RouteContext = { params: Promise<{ all: string[] }> };

export async function GET(request: NextRequest, context: RouteContext) {
  return handler.GET(request, { params: Promise.resolve({ path: [] }) });
}

export async function POST(request: NextRequest, context: RouteContext) {
  return handler.POST(request, { params: Promise.resolve({ path: [] }) });
}
