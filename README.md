# SAR INDUSTRIES NETWORK Dashboard

Production-oriented foundation for the SAR Industries Network executive operations platform. The initial interface implements the branded dark/orange dashboard concept and establishes the application, database, authorization, API, testing, and CI structure needed for continued development.

## Included

- Next.js App Router and React dashboard application.
- Responsive SAR dark/orange design system.
- Executive KPIs, analytics charts, activity, referrals, and AI-agent status.
- Versioned health and dashboard-summary API routes.
- Prisma 7 and PostgreSQL organization-scoped data model.
- Role and permission foundations.
- Security headers, strict TypeScript, ESLint, Vitest, and GitHub Actions.
- Architecture and security documentation.

## Local setup

### Requirements

- Node.js 22.13 or later
- npm 10 or later
- PostgreSQL 15 or later

### Install

```bash
npm install
cp .env.example .env
npm run db:generate
npm run dev
```

Open `http://localhost:3000`.

### Database

Update `DATABASE_URL` in `.env`, then create the first migration:

```bash
npm run db:migrate -- --name init
```

For deployment environments:

```bash
npm run db:deploy
```

## Quality commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## API endpoints

- `GET /api/health`
- `GET /api/v1/dashboard/summary`

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `SESSION_SECRET` | Session signing/encryption secret, minimum 32 characters |
| `REDIS_URL` | Optional Redis connection string for future caching and jobs |
| `NEXT_PUBLIC_APP_NAME` | Public application name |
| `NEXT_PUBLIC_APP_URL` | Canonical application URL |

## Production status

This commit is the production foundation, not the final business system. Dashboard values currently come from typed demonstration data. Production identity, persistent business repositories, Redis workers, third-party integrations, and live analytics are the next implementation phases.

See [Architecture](docs/ARCHITECTURE.md) and [Security](docs/SECURITY.md).
