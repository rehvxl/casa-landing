# ADR-003 — Hospedagem

**Status:** Accepted
**Date:** 2026-04-27

## Decision

Vercel com CDN global (Edge Network).

## Alternatives Considered

| Alternative | Reason for Rejection |
|---|---|
| Netlify | Funcionalmente equivalente; Vercel tem integração nativa superior com Next.js |
| AWS S3 + CloudFront | Mais complexo de configurar, mesmo resultado para caso de uso |
| Servidor dedicado | Custo maior, gestão de infra desnecessária |

## Consequences

- positivo: Deploy automático em branch preview
- positivo: CDN global = baixa latência worldwide
- positivo: Zero config para Next.js
- positivo: SSL automático
- negativo: Lock-in em Vercel (aceitável para projeto novo)
