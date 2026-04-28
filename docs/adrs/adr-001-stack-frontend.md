# ADR-001 — Stack Frontend

**Status:** Accepted
**Date:** 2026-04-27

## Decision

Next.js 15 (App Router) + TypeScript + Tailwind CSS.

## Alternatives Considered

| Alternative | Reason for Rejection |
|---|---|
| Astro | Bom para conteúdo estático, mas Next.js oferece ecossistema mais maduro para futuras features (auth, API routes) |
| HTML + Vanilla JS | Sem type safety, sem component reuse, difícil manutenção |
| Create React App | Deprecated, Vite superior mas Next.js 15 mais completo |

## Consequences

- positivo: TypeScript garante type safety em toda codebase
- positivo: App Router permite SSG/SSR híbrido
- positivo: Vercel deploy nativo com zero config
- positivo: Tailwind utilities = desenvolvimento rápido UI
- negativo: Lock-in em Next.js/Vercel (aceitável para landing page)
