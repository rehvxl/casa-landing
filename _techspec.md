# TechSpec — CASA Landing Page

**Versão:** 1.0
**Data:** 2026-04-27
**Status:** Rascunho — aguardando aprovação

---

## 1. Resumo Executivo

Landing page institucional para a CASA software house. Presença digital que comunica serviços, exibe portfolio e captura leads via formulário de contato.

**Decisões adotadas por default (sem feedback do Gerente de Soluções):**
- Stack: Next.js 15 (App Router) + TypeScript
- Hospedagem: Vercel (CDN global, deploy automático)
- Design: Tailwind CSS
- Dados portfolio: JSON estático (sem CMS)
- Email: Nodemailer via API route

---

## 2. System Architecture

```
┌─────────────────────────────────────────────┐
│  Vercel Edge Network (CDN global)           │
├─────────────────────────────────────────────┤
│  Next.js 15 App Router                      │
│  ├── SSG — pages: /, /servicos, /portfolio │
│  └── SSR — page: /contato (dynamic)         │
├─────────────────────────────────────────────┤
│  API Routes                                  │
│  └── POST /api/contact                      │
│      └── Nodemailer → SMTP/Email service   │
└─────────────────────────────────────────────┘
```

**Decisões:**
- SSG para páginas de conteúdo → build estático, performance máxima
- SSR para contato → validação server-side sob demanda
- Sem backend dedicado → integração email via API route Next.js

---

## 3. Estrutura de Diretórios

```
casa-landing/
├── app/
│   ├── layout.tsx            # Layout raiz com Header/Footer
│   ├── page.tsx              # Home (hero + teasers)
│   ├── servicos/page.tsx     # Página de serviços
│   ├── portfolio/page.tsx    # Portfolio de projetos
│   ├── contato/page.tsx      # Formulário de contato
│   └── api/
│       └── contact/route.ts   # API POST contato
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── PortfolioCard.tsx
│   └── ContactForm.tsx
├── data/
│   ├── services.json          # Dados serviços
│   └── portfolio.json        # Dados portfolio
├── public/
│   └── images/               # Assets estáticos
└── docs/
    └── adrs/                 # Architecture Decision Records
```

---

## 4. Data Models

### 4.1 Service
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}
```

### 4.2 PortfolioItem
```typescript
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;        // Path to public image
  tags: string[];       // Technologies used
  link?: string;        // Optional external link
}
```

### 4.3 ContactFormData
```typescript
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
```

---

## 5. API Design

### POST /api/contact

**Request:**
```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "message": "string (required, min 10 chars)"
}
```

**Response 200:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso"
}
```

**Response 400:**
```json
{
  "success": false,
  "error": "Dados inválidos",
  "details": { "email": "Email inválido" }
}
```

**Response 500:**
```json
{
  "success": false,
  "error": "Erro ao enviar mensagem"
}
```

---

## 6. Páginas e Componentes

### 6.1 Home (/)
- **Hero:** Título principal, subtítulo, CTA "Ver Serviços"
- **Teaser Serviços:** Grid 3 serviços em destaque com link para /servicos
- **Teaser Portfolio:** Grid 3 projetos recentes com link para /portfolio
- **CTA Final:** Banner "Entre em contato" com link para /contato

### 6.2 /servicos
- Header com título da página
- Grid de ServiceCards (dados de services.json)
- CTA para contato

### 6.3 /portfolio
- Header com título da página
- Grid de PortfolioCards com filtros por tag (client-side)
- Lightbox/modal para detalhes do projeto

### 6.4 /contato
- Formulário ContactForm com validação client e server
- Campos: nome, email, empresa (opcional), mensagem
- Feedback visual de sucesso/erro

---

## 7. Component Inventory

| Componente | Descrição | Estados |
|---|---|---|
| Header | Navegação fixa com logo + links | default, mobile-menu-open |
| Footer | Links, copyright, redes sociais | — |
| Hero | Full-width com gradiente/imagem | — |
| ServiceCard | Card com icon, título, descrição | default, hover |
| PortfolioCard | Card com imagem, título, tags | default, hover |
| ContactForm | Form com validação | default, loading, success, error |

---

## 8. Responsabilidades de UX

- Mobile-first, breakpoints: sm(640), md(768), lg(1024), xl(1280)
- Acessibilidade: semantic HTML, ARIA labels, focus visible
- Performance: imagens otimizadas (next/image), font-display: swap
- SEO: metadata em cada page, Open Graph tags

---

## 9. ADR Index

| # | Título | Decisão |
|---|---|---|
| ADR-001 | Stack Frontend | Next.js 15 + TypeScript + Tailwind CSS |
| ADR-002 | Modelo de Dados | JSON estático para content |
| ADR-003 | Hospedagem | Vercel com CDN global |
| ADR-004 | Email | Nodemailer via API route |

---

## 10. Sub-issues (a delegar)

1. **CASA-9-1:** Configurar projeto Next.js 15 + Tailwind + TypeScript
2. **CASA-9-2:** Implementar componentes Header, Footer, Hero
3. **CASA-9-3:** Implementar página /servicos com ServiceCard
4. **CASA-9-4:** Implementar página /portfolio com PortfolioCard e filtros
5. **CASA-9-5:** Implementar página /contato com ContactForm e API route
6. **CASA-9-6:** Adicionar dados de exemplo em JSON
7. **CASA-9-7:** Testes E2E (Playwright) — fluxo contato
8. **CASA-9-8:** Deploy em Vercel e smoke tests
