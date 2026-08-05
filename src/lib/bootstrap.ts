import { getServerEnv } from "@/lib/env";
import { permissions } from "@/lib/permissions";
import { prisma } from "@/lib/prisma";

export async function bootstrapFounderAccess(userId: string, email: string): Promise<void> {
  const env = getServerEnv();

  if (email.toLowerCase() !== env.BOOTSTRAP_ADMIN_EMAIL.toLowerCase()) {
    return;
  }

  await prisma.$transaction(async (transaction) => {
    const organization = await transaction.organization.upsert({
      where: { slug: env.BOOTSTRAP_ORGANIZATION_SLUG },
      update: { name: env.BOOTSTRAP_ORGANIZATION_NAME },
      create: {
        name: env.BOOTSTRAP_ORGANIZATION_NAME,
        slug: env.BOOTSTRAP_ORGANIZATION_SLUG,
      },
    });

    const role = await transaction.role.upsert({
      where: {
        organizationId_name: {
          organizationId: organization.id,
          name: "Super Admin",
        },
      },
      update: {
        description: "Full organization administration access.",
        isSystem: true,
      },
      create: {
        organizationId: organization.id,
        name: "Super Admin",
        description: "Full organization administration access.",
        isSystem: true,
      },
    });

    const permissionRows = await Promise.all(
      permissions.map((key) =>
        transaction.permission.upsert({
          where: { key },
          update: {},
          create: { key },
        }),
      ),
    );

    await transaction.rolePermission.createMany({
      data: permissionRows.map((permission) => ({
        roleId: role.id,
        permissionId: permission.id,
      })),
      skipDuplicates: true,
    });

    await transaction.membership.upsert({
      where: {
        organizationId_userId: {
          organizationId: organization.id,
          userId,
        },
      },
      update: {
        roleId: role.id,
        status: "ACTIVE",
      },
      create: {
        organizationId: organization.id,
        userId,
        roleId: role.id,
        status: "ACTIVE",
      },
    });
  });
}
