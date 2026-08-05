import { z } from "zod";

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(32),
  AUTH_GITHUB_ID: z.string().min(1),
  AUTH_GITHUB_SECRET: z.string().min(1),
  BOOTSTRAP_ADMIN_EMAIL: z.string().email(),
  BOOTSTRAP_ORGANIZATION_NAME: z.string().min(1).default("SAR INDUSTRIES NETWORK"),
  BOOTSTRAP_ORGANIZATION_SLUG: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .default("sar-industries-network"),
  REDIS_URL: z.string().url().optional(),
});

const publicSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default("SAR INDUSTRIES NETWORK"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

export function getServerEnv() {
  return serverSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    BOOTSTRAP_ADMIN_EMAIL: process.env.BOOTSTRAP_ADMIN_EMAIL,
    BOOTSTRAP_ORGANIZATION_NAME: process.env.BOOTSTRAP_ORGANIZATION_NAME,
    BOOTSTRAP_ORGANIZATION_SLUG: process.env.BOOTSTRAP_ORGANIZATION_SLUG,
    REDIS_URL: process.env.REDIS_URL,
  });
}

export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
