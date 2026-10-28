import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { list, issueSignedToken, presignUrl } from "@vercel/blob";
export const runtime = "nodejs";
const PRINT_MASTER = "print-masters/Crisp-Point-PRINT.jpg";
export async function GET(request: Request) {
  const secret = process.env.BLOB_HEALTH_SECRET;
  const authorization = request.headers.get("authorization");
  const expected = secret ? `Bearer ${secret}` : null;

  const authorized =
    expected !== null &&
    authorization !== null &&
    Buffer.byteLength(authorization) === Buffer.byteLength(expected) &&
    timingSafeEqual(
      Buffer.from(authorization),
      Buffer.from(expected)
    );

  if (!authorized) {
    return NextResponse.json(
      { error: "Unauthorized." },
      {
        status: 401,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  try {
  // Read-only test using Vercel OIDC authentication.
  const result = await list({
    prefix: PRINT_MASTER,
    limit: 10,
  });

  const blob = result.blobs.find(
    (item) => item.pathname === PRINT_MASTER
  );

  if (!blob) {
    return NextResponse.json(
      { success: false, error: "Print master not found." },
      { status: 404, headers: { "Cache-Control": "no-store" } }
    );
  }

  const validUntil = Date.now() + 60_000;

  const signedToken = await issueSignedToken({
    pathname: blob.pathname,
    operations: ["get"],
    validUntil,
  });

  const { presignedUrl } = await presignUrl(signedToken, {
    pathname: blob.pathname,
    operation: "get",
    validUntil,
    access: "private",
  });

  const response = await fetch(presignedUrl, {
    headers: { Range: "bytes=0-1023" },
    cache: "no-store",
  });

  if (response.status !== 206) {
    throw new Error("Private image range request failed.");
  }

  const bytes = await response.arrayBuffer();

  if (bytes.byteLength !== 1024) {
    throw new Error("Unexpected image response length.");
  }

  return NextResponse.json(
    { success: true, oidcImageRead: "PASS", bytes: bytes.byteLength },
    { headers: { "Cache-Control": "no-store" } }
  );
} catch {
  return NextResponse.json(
    { success: false, oidcImageRead: "FAILED" },
    { status: 500, headers: { "Cache-Control": "no-store" } }
  );
}
}