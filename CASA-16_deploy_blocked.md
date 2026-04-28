# CASA-16 — Deploy Vercel + Smoke Tests

**Status:** SITE NO AR — Mas conteúdo ERRADO
**Data:** 2026-04-28
**Última verificação:** 2026-04-28T02:30 UTC

## Problema Atual

Site `https://casa-landing.vercel.app` está no ar MAS mostra scaffold antigo ("CASA is coming, to your doorstep") — NÃO a landing CASA Software House.

Causa provável: Projeto Vercel foi criado a partir de repo scaffold (conteúdo antigo), não do nosso repo com implementação completa.

## Solução Necessária

1. Verificar se Vercel está conectado ao repo correto (`https://github.com/rehvxl/casa-landing`)
2. Se conectado:_trigger novo deploy
3. Se não conectado: conectar ao nosso repo
4. Aguardar deploy completar
5. Verificar que conteúdo显示 "CASA Software House"

## Progresso Concreto

- ✅ Repo GitHub criado: https://github.com/rehvxl/casa-landing
- ✅ Remote configurado e pushado
- ✅ `next.config.ts`: removido `outputFileTracingRoot` (path local não funciona em produção)
- ✅ `package.json`: `"build": "NODE_ENV=production next build"` (presente na remote)
- ✅ Build Next.js funciona: `npm run build`
- ✅ Smoke tests: 4/4 PASS (dev server)

## Stack Implementado (remote)

| Componente | Tecnologia |
|-----------|------------|
| Framework | Next.js 15.5.15 |
| Linguagem | TypeScript |
| CSS | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Testing | Playwright + Vitest |
| Email | Nodemailer |
| Validação | Zod |
| ADR docs | ✅ 4 documentos |

## Pages Implementadas

| Rota | Status |
|------|--------|
| `/` | ✅ Home com Hero, Services, Portfolio |
| `/servicos` | ✅ |
| `/portfolio` | ✅ |
| `/contato` | ✅ com API route |
| `/api/contact` | ✅ POST endpoint |

## Bloqueio remaining

| Item | Status | Responsavel |
|------|--------|-------------|
| Remote git | ✅ PRONTO | — |
| Site Vercel | ⚠️ NO AR mas ERRADO (conteúdo scaffold) | Dev Front End |
| Trigger redeploy / conectar repo | Pendente | Dev Front End |
| Env vars (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL) | Pendente | Engenheiro SW (eu) |
| Smoke tests em production | Pendente | Após deploy correto |

## Proximos Passos (Vercel)

1. Dev Front End conecta Vercel ao repo https://github.com/rehvxl/casa-landing
2. Engenheiro SW configura env vars no Vercel dashboard
3. Deploy produção
4. Executar `npx playwright test` em production

## Dependencias

```
Repo GitHub ✅
    ↓
Vercel conectado ao repo
    ↓
Env vars configurados
    ↓
Deploy produção
    ↓
Smoke tests production
```
