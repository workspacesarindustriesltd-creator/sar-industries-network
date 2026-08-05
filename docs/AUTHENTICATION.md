# Authentication

The dashboard uses Auth.js with GitHub OAuth and Prisma-backed database sessions.

## Access flow

1. Users sign in through `/sign-in`.
2. GitHub returns the account to `/api/auth/callback/github`.
3. Auth.js stores the user, OAuth account, and session in PostgreSQL.
4. The application loads the user's active organization membership and role permissions.
5. Authenticated users without membership are directed to `/access-pending`.
6. Authorized members can access only the pages and APIs allowed by their permissions.

## Initial administrator

`BOOTSTRAP_ADMIN_EMAIL` identifies the initial founder administrator. On account creation or sign-in, the application safely creates or updates the configured organization, Super Admin role, permission registry, role permissions, and active founder membership.

## Operating rules

Authentication, membership, and authorization are separate controls. Every protected server page and API route must independently verify the session, active organization membership, and required permission. Interface visibility alone is not an authorization control.

Use server environment configuration for OAuth credentials and the authentication secret. Configure the GitHub OAuth callback URL for the exact deployment domain.

## Future work

- Administrator-managed invitations
- Membership activation and suspension
- Organization switching
- Additional OpenID Connect providers
- Session and device management
- Authentication and authorization audit events
