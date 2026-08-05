# Security baseline

## Implemented in the foundation

- Strict TypeScript configuration.
- Security response headers and restrictive content security policy.
- No indexing of the private admin interface.
- Server-only environment validation.
- Organization-scoped database model.
- Permission keys and server-side authorization helpers.
- Immutable audit-log data model.
- Dependabot-compatible npm structure and CodeQL workflow support.
- CI lint, type, test, and production-build gates.

## Required before production launch

- Configure a production OpenID Connect identity provider.
- Require multi-factor authentication for privileged roles.
- Store secrets in the deployment platform's encrypted secret manager.
- Enforce server-side permissions on every protected read and write.
- Add CSRF protection to session-authenticated mutations.
- Add rate limiting and abuse protection using Redis.
- Encrypt integration credentials and rotate them regularly.
- Validate uploads by MIME type, extension, size, and malware scan.
- Record login, permission, export, financial, workflow, and AI-tool events.
- Add tenant-isolation integration tests and backup restoration tests.

## Reporting

Do not open a public issue for suspected vulnerabilities. Contact the repository owner privately with the affected component, reproduction steps, impact, and suggested mitigation.
