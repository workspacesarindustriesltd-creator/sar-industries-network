# Architecture

## Current foundation

The repository starts as a modular Next.js application with a separate persistence boundary and a versioned API surface.

```text
Browser
  -> Next.js App Router
      -> dashboard UI
      -> /api/v1 route handlers
      -> authorization helpers
      -> Prisma data access
          -> PostgreSQL
```

## Project boundaries

- `src/app`: routes, layouts, error states, metadata, and HTTP endpoints.
- `src/components`: reusable presentation and dashboard components.
- `src/lib`: environment, authorization, HTTP, data, and infrastructure helpers.
- `prisma`: schema and migrations.
- `tests`: unit and integration tests.
- `docs`: architecture, security, and operational decisions.

## Delivery strategy

Start as a modular monolith. Add separate worker services only when asynchronous workloads require independent scaling. Planned boundaries are:

1. Identity and organization membership.
2. CRM, clients, and sales pipeline.
3. Projects, tasks, files, and approvals.
4. Marketing and analytics.
5. Finance and audit trails.
6. AI agents and workflow execution.
7. Notifications and third-party integrations.

## Data isolation

Every organization-owned record includes `organizationId`. All repository queries must scope by the active organization before applying record identifiers or filters. API authorization is enforced server-side; UI visibility is not an authorization control.

## API conventions

- Versioned endpoints under `/api/v1`.
- JSON envelopes contain `data` and request metadata.
- Important writes will accept idempotency keys.
- Errors will use stable application error codes.
- Integration webhooks will be signature-verified and deduplicated.

## Next implementation milestones

1. Add production identity provider and session management.
2. Seed roles and permissions.
3. Connect dashboard metrics to PostgreSQL.
4. Add clients, projects, tasks, and audit-log repositories.
5. Introduce Redis-backed caching and background jobs.
6. Add integration adapters and observability exporters.
