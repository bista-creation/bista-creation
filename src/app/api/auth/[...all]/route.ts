import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

const handler = auth.handler();

export async function GET(request: NextRequest) {
  return handler.GET(request, { params: Promise.resolve({ path: [] }) });
}

export async function POST(request: NextRequest) {
  return handler.POST(request, { params: Promise.resolve({ path: [] }) });
}
