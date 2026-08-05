import { afterEach, describe, expect, it } from "vitest";
import { getServerEnv } from "../src/lib/env";

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("authentication environment", () => {
  it("accepts a complete production authentication configuration", () => {
    process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/sar_industries_network";
    process.env.AUTH_SECRET = "test-auth-secret-that-is-at-least-32-characters";
    process.env.AUTH_GITHUB_ID = "github-client-id";
    process.env.AUTH_GITHUB_SECRET = "github-client-secret";
    process.env.BOOTSTRAP_ADMIN_EMAIL = "founder@example.com";
    process.env.BOOTSTRAP_ORGANIZATION_NAME = "SAR INDUSTRIES NETWORK";
    process.env.BOOTSTRAP_ORGANIZATION_SLUG = "sar-industries-network";

    const env = getServerEnv();

    expect(env.BOOTSTRAP_ADMIN_EMAIL).toBe("founder@example.com");
    expect(env.BOOTSTRAP_ORGANIZATION_SLUG).toBe("sar-industries-network");
  });

  it("rejects an invalid organization slug", () => {
    process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/sar_industries_network";
    process.env.AUTH_SECRET = "test-auth-secret-that-is-at-least-32-characters";
    process.env.AUTH_GITHUB_ID = "github-client-id";
    process.env.AUTH_GITHUB_SECRET = "github-client-secret";
    process.env.BOOTSTRAP_ADMIN_EMAIL = "founder@example.com";
    process.env.BOOTSTRAP_ORGANIZATION_SLUG = "Invalid Slug";

    expect(() => getServerEnv()).toThrow();
  });
});
