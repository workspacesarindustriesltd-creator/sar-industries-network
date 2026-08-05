# SAR INDUSTRIES NETWORK Dashboard

Production-oriented foundation for the SAR Industries Network executive operations platform. The application implements the branded dark/orange dashboard concept and establishes the application, database, authentication, authorization, API, testing, and CI structure needed for continued development.

## Included

- Next.js App Router and React dashboard application.
- Responsive SAR dark/orange design system.
- Executive KPIs, analytics charts, activity, referrals, and AI-agent status.
- Auth.js authentication using GitHub OAuth and database sessions.
- Organization membership and permission-controlled dashboard access.
- Automatic founder/Super Admin bootstrap based on a protected environment variable.
- Versioned health and protected dashboard-summary API routes.
- Prisma 7 and PostgreSQL organization-scoped data model.
- Security headers, strict TypeScript, ESLint, Vitest, GitHub Actions, and CodeQL.
- Architecture and security documentation.

## Local setup

### Requirements

- Node.js 22.13 or later
- npm 10 or later
- PostgreSQL 15 or later
- GitHub OAuth application

### Install

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:migrate -- --name auth-foundation
npm run dev
```

Open `http://localhost:3000`.

## GitHub OAuth configuration

Create a GitHub OAuth application with:

```text
Homepage URL: http://localhost:3000
Authorization callback URL: http://localhost:3000/api/auth/callback/github
```

Set the generated client ID and secret in `.env`. Set `BOOTSTRAP_ADMIN_EMAIL` to the verified email returned by the authorized founder GitHub account. On successful sign-in, that account receives an active membership and the system `Super Admin` role for the configured organization.

For deployment environments, update the OAuth URLs to the production domain and run:

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
- `GET /api/v1/dashboard/summary` — authenticated membership with `dashboard.read`
- `/api/auth/*` — Auth.js handlers

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `AUTH_SECRET` | Auth.js signing secret, minimum 32 characters |
| `AUTH_GITHUB_ID` | GitHub OAuth application client ID |
| `AUTH_GITHUB_SECRET` | GitHub OAuth application client secret |
| `BOOTSTRAP_ADMIN_EMAIL` | Founder account eligible for automatic Super Admin access |
| `BOOTSTRAP_ORGANIZATION_NAME` | Initial organization display name |
| `BOOTSTRAP_ORGANIZATION_SLUG` | Initial organization URL-safe identifier |
| `REDIS_URL` | Optional Redis connection string for future caching and jobs |
| `NEXT_PUBLIC_APP_NAME` | Public application name |
| `NEXT_PUBLIC_APP_URL` | Canonical application URL |

## Production status

The dashboard UI still uses typed demonstration analytics values. Authentication, database sessions, founder bootstrap, organization membership, and protected server routes are implemented. Persistent analytics, invitation management, business repositories, Redis workers, integrations, and AI execution are subsequent phases.

See [Architecture](docs/ARCHITECTURE.md), [Security](docs/SECURITY.md), and [Authentication](docs/AUTHENTICATION.md).
