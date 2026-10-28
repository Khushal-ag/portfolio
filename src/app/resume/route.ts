import { NextResponse } from "next/server";

import { getSite } from "@/lib/cms/content";

export async function GET() {
  const site = await getSite();
  return NextResponse.redirect(site.resumeUrl, 307);
}
