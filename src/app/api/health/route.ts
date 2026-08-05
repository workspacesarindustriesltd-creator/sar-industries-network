import { apiSuccess } from "@/lib/http";

export const dynamic = "force-dynamic";

export function GET() {
  return apiSuccess(
    {
      service: "sar-industries-network-dashboard",
      status: "healthy",
      version: process.env.npm_package_version ?? "0.1.0",
      uptimeSeconds: Math.round(process.uptime()),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
