export const permissions = [
  "dashboard.read",
  "client.read",
  "client.create",
  "client.update",
  "client.delete",
  "project.read",
  "project.create",
  "project.update",
  "project.delete",
  "task.read",
  "task.create",
  "task.update",
  "task.delete",
  "finance.read",
  "finance.approve",
  "finance.export",
  "workflow.read",
  "workflow.run",
  "workflow.configure",
  "ai_agent.read",
  "ai_agent.run",
  "settings.manage_users",
  "settings.manage_integrations",
  "audit.read",
] as const;

export type Permission = (typeof permissions)[number];

export type AuthorizationContext = {
  permissions: ReadonlySet<Permission>;
  organizationId: string;
};

export function can(context: AuthorizationContext, permission: Permission): boolean {
  return context.permissions.has(permission);
}

export function requirePermission(
  context: AuthorizationContext,
  permission: Permission,
): void {
  if (!can(context, permission)) {
    throw new Error(`Missing required permission: ${permission}`);
  }
}
