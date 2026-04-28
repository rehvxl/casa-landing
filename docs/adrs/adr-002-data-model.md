# ADR-002 — Modelo de Dados para Portfolio

**Status:** Accepted
**Date:** 2026-04-27

## Decision

JSON estático em `/data/portfolio.json` e `/data/services.json`.

## Alternatives Considered

| Alternative | Reason for Rejection |
|---|---|
| CMS Headless (Contentful/Sanity) | Overkill para landing page com conteúdo raro; adiciona custo e complexidade |
| Markdown + frontmatter | Bom para blogs, menos para portfolio com metadados ricos |
| PostgreSQL/Supabase | Custo adicional, necessidade de admin panel, over-engineering |

## Consequences

- positivo: Zero custo, zero manutenção de infraestrutura
- positivo: Versioning via git, rollback simples
- positivo: Build time data = performance máxima (SSG)
- negativo: Necessário code change para atualizar conteúdo (aceitável para landing page)
- negativo: Sem preview editorial (aceitável para caso de uso)
