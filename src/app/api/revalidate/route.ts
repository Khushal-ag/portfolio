import { createHash, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

import type { NextRequest } from "next/server";

import { CONTENT_TAG } from "@/lib/cms/constants";

function secretsEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "Revalidate secret is not configured" },
      { status: 500 },
    );
  }

  const querySecret = request.nextUrl.searchParams.get("secret");
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const body = await request.text();

  const queryOk = querySecret !== null && secretsEqual(querySecret, secret);
  let signatureOk = false;
  if (signature) {
    try {
      signatureOk = await isValidSignature(body, signature, secret);
    } catch {
      signatureOk = false;
    }
  }

  if (!queryOk && !signatureOk) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // `expire: 0` so the first visit after a publish already sees fresh content
  // (`"max"` would serve the stale page once while it refreshes).
  revalidateTag(CONTENT_TAG, { expire: 0 });
  return NextResponse.json({
    revalidated: true,
    tag: CONTENT_TAG,
    now: Date.now(),
  });
}
