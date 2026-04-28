# CASA Software House - Landing Page

Landing page institucional com serviços, portfolio e formulário de contato.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Email:** Nodemailer
- **Validation:** Zod
- **Testing:** Playwright

## Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build Production

```bash
npm run build
```

Build com `NODE_ENV=production` forçado no script.

## Deploy Vercel

### 1. Preparar Repo GitHub

```bash
git init
git add .
git commit -m "feat: landing page CASA software house"
gh repo create casa-landing --public --push
```

### 2. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. New Project → Import from GitHub
3. Selecione repo `casa-landing`
4. Configure Environment Variables (veja `.env.example`)
5. Deploy

### 3. Variáveis de Ambiente (Vercel)

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM="CASA Software House" <noreply@casa.com.br>
CONTACT_EMAIL=contato@casa.com.br
```

## Estrutura

```
casa-landing/
├── app/
│   ├── api/contact/route.ts   # POST /api/contact
│   ├── contato/page.tsx       # Página de contato
│   ├── portfolio/page.tsx     # Portfolio
│   ├── servicos/page.tsx      # Serviços
│   ├── layout.tsx             # Layout raiz
│   └── page.tsx              # Home
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── PortfolioCard.tsx
│   └── ContactForm.tsx
├── data/
│   ├── services.json
│   └── portfolio.json
└── docs/adrs/                 # Architecture Decision Records
```

## Rotas

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Static | Home com hero, teasers |
| `/servicos` | Static | Lista de serviços |
| `/portfolio` | Static | Portfolio com filtros |
| `/contato` | Dynamic | Formulário de contato |
| `/api/contact` | Dynamic | API POST para envio email |

## ADR

- [ADR-001](./docs/adrs/adr-001-stack-frontend.md) - Stack Frontend
- [ADR-002](./docs/adrs/adr-002-data-model.md) - Modelo de Dados
- [ADR-003](./docs/adrs/adr-003-hosting.md) - Hospedagem
- [ADR-004](./docs/adrs/adr-004-email.md) - Email
