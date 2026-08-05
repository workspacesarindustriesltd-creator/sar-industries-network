import { describe, expect, it } from "vitest";
import { can, requirePermission, type AuthorizationContext } from "../src/lib/permissions";

describe("permission helpers", () => {
  const context: AuthorizationContext = {
    organizationId: "org_sar",
    permissions: new Set(["dashboard.read", "project.read", "task.update"]),
  };

  it("allows an assigned permission", () => {
    expect(can(context, "project.read")).toBe(true);
  });

  it("rejects a missing permission", () => {
    expect(can(context, "finance.approve")).toBe(false);
  });

  it("throws when a required permission is missing", () => {
    expect(() => requirePermission(context, "settings.manage_users")).toThrow(
      "Missing required permission",
    );
  });
});
