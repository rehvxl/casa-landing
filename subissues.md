# Sub-issues — CASA Landing Page

## Status: IMPLEMENTAÇÃO COMPLETA

Build corrigido (NODE_ENV=production no build script). Todas as páginas e componentes implementados.

## CASA-9-1: Configuração do Projeto ✅
**Status:** Completo
- Next.js 15.3.0 com App Router
- TypeScript strict mode
- Tailwind CSS
- Estrutura app/, components/, data/

## CASA-9-2: Componentes Base ✅
**Status:** Completo
- Header.tsx — com navegação e menu mobile
- Footer.tsx — com links e redes sociais
- Hero.tsx — seção hero com CTA

## CASA-9-3: Página /servicos ✅
**Status:** Completo
- app/servicos/page.tsx
- ServiceCard.tsx component
- data/services.json (6 serviços)

## CASA-9-4: Página /portfolio ✅
**Status:** Completo
- app/portfolio/page.tsx
- PortfolioCard.tsx component
- data/portfolio.json (6 projetos)

## CASA-9-5: Página /contato e API ✅
**Status:** Completo
- app/contato/page.tsx
- ContactForm.tsx com validação Zod
- app/api/contact/route.ts com Nodemailer

## CASA-9-6: Dados de Exemplo ✅
**Status:** Completo
- data/services.json
- data/portfolio.json

## CASA-9-7: Testes E2E ✅
**Status:** Completo
- Playwright configurado (playwright.config.ts)
- e2e/home.spec.ts - testes home page
- e2e/navigation.spec.ts - testes navegação
- e2e/contact.spec.ts - testes formulário contato
- e2e/services.spec.ts - testes página serviços
- e2e/portfolio.spec.ts - testes página portfolio
- Scripts: npm run test:e2e, npm run test:e2e:ui

## CASA-9-8: Deploy
**Status:** Aguardando ação manual
- GitHub repo: https://github.com/rehvxl/casa-landing ✅
- Push OK: commit e141031 (implementação completa)
- ESLint: configurado e passando
- Tests: 7/7 passando
- Build: passando

**Deploy manual necessário:**
1. Acessar vercel.com → Importar repo `rehvxl/casa-landing`
2. Configurar environment variables (ver `.env.example`)
3. Fazer deploy

**Deploy CLI** (requer token):
```bash
cd casa-landing
vercel --prod
```
