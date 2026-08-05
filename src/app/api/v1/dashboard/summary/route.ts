import { dashboardSummary } from "@/lib/dashboard-data";
import { apiSuccess } from "@/lib/http";

export function GET() {
  return apiSuccess(dashboardSummary, {
    headers: {
      "Cache-Control": "private, max-age=30, stale-while-revalidate=60",
    },
  });
}
