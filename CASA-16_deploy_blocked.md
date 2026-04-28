# CASA-16 — Deploy Vercel + Smoke Tests

**Status:** GitHub PRONTO — Aguardando Vercel
**Data:** 2026-04-27
**Última verificação:** 2026-04-27T22:52 UTC

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
| Conexao Vercel → GitHub | Pendente | Dev Front End |
| Env vars (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL) | Pendente | Engenheiro SW |
| Deploy produção | Pendente | Após arriba |
| Smoke tests em production | Pendente | Após deploy |

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
