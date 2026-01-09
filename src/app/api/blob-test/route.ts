import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  const blob = await put("hello.txt", "hello from talkly", {
    access: "public",
    addRandomSuffix: true, // important: makes URL unguessable
  });

  return NextResponse.json({ url: blob.url });
}
