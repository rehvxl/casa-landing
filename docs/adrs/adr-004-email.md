# ADR-004 — Integração de Email

**Status:** Accepted
**Date:** 2026-04-27

## Decision

Nodemailer via API Route Next.js (`/api/contact`).

## Alternatives Considered

| Alternative | Reason for Rejection |
|---|---|
| Formspree/Formcarry | Serviço externo, custo para volume, dependência de terceiros |
| SendGrid/Mailgun | Requer account externo, mais setup para caso simples |
| AWS SES | Mais complexo, overkill para landing page |

## Consequences

- positivo: Self-contained, sem dependência de serviço externo
- positivo: Configurável para qualquer SMTP (inclusive SMTP CASSI interno)
- positivo: Controle total sobre headers, templating
- negativo: Necessita SMTP credentials (armazenar em env var)
- negativo: Rate limiting por implementar manualmente
