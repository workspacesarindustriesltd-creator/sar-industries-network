import { getAppAccess, hasPermission } from "@/lib/auth-context";
import { dashboardSummary } from "@/lib/dashboard-data";
import { apiError, apiSuccess } from "@/lib/http";

export const dynamic = "force-dynamic";

export async function GET() {
  const access = await getAppAccess();

  if (!access) {
    return apiError("UNAUTHORIZED", "Authentication is required.", 401);
  }

  if (!access.membership || !hasPermission(access, "dashboard.read")) {
    return apiError("FORBIDDEN", "Dashboard access is not permitted.", 403);
  }

  return apiSuccess(dashboardSummary, {
    headers: {
      "Cache-Control": "private, no-store",
    },
  });
}
