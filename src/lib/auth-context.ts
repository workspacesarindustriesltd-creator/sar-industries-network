import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { permissions, type Permission } from "@/lib/permissions";
import { prisma } from "@/lib/prisma";

function isPermission(value: string): value is Permission {
  return (permissions as readonly string[]).includes(value);
}

export async function getAppAccess() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const membership = await prisma.membership.findFirst({
    where: {
      userId: session.user.id,
      status: "ACTIVE",
    },
    include: {
      organization: true,
      role: {
        include: {
          permissions: {
            include: {
              permission: true,
            },
          },
        },
      },
    },
  });

  const grantedPermissions = new Set<Permission>();

  for (const rolePermission of membership?.role?.permissions ?? []) {
    if (isPermission(rolePermission.permission.key)) {
      grantedPermissions.add(rolePermission.permission.key);
    }
  }

  return {
    session,
    membership,
    permissions: grantedPermissions,
  };
}

export async function requirePageAccess() {
  const access = await getAppAccess();

  if (!access) {
    redirect("/sign-in");
  }

  if (!access.membership) {
    redirect("/access-pending");
  }

  return access;
}

export function hasPermission(
  access: NonNullable<Awaited<ReturnType<typeof getAppAccess>>>,
  permission: Permission,
): boolean {
  return access.permissions.has(permission);
}
