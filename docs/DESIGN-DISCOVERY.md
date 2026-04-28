# Design Discovery — CASA Landing Page

**Versão:** 1.0
**Data:** 2026-04-27
**Status:** ✅ Pronto para Revisão
**Parent:** CASA-17

## Status: Aguardando Aprovação

Design discovery completo. Aguardando Gerente de Soluções aprovar para prosseguir com implementação via sub-issues (CASA-9-1 e seguintes).

---

## 1. O Que Estamos Construindo

Landing page institucional para a **CASA** — software house que oferece serviços de desenvolvimento de software sob medida, apps mobile, integração de sistemas e consultoria técnica.

**Escopo de Design:**
- Homepage com hero, teasers e CTAs
- Página de Serviços
- Página de Portfolio
- Página de Contato com formulário

**Escopo Técnico (já definido em techspec):**
- Next.js 15 + TypeScript + Tailwind CSS
- SSG para pages estáticas, SSR para contato
- Nodemailer para envio de emails

---

## 2. Público-Alvo

| Persona | Perfil | Necessidade |
|---------|--------|-------------|
| **Empresário PMD** | Dono de empresa pequena/média, 35-50 anos | Encontrar parceira de TI confiável para digitalizar processos |
| **Startup Founder** | Empreendedor tech, 25-35 anos | Encontrar devs qualificados para MVP ou product-market fit |
| **TI Manager** | Gestor de TI em empresa média/grande, 30-45 anos | Avaliar fornecedor para projeto específico ou outsourcing |

**Jornada típica:**
1. Encontra a CASA via Google / recomendação / portfólio
2. Escaneia hero em 5 segundos → avalia se é relevante
3. Navega para ver serviços ou portfolio
4. Descide se contata ou não

---

## 3. Objetivos de UX

### 3.1 Objetivos Principais

1. **Comunicar credibilidade** — transmitir profissionalismo e competência técnica
2. **Exibir portfolio** — mostrar trabalho concreto para construir confiança
3. **Facilitar contato** — tornar baixa fricção entrar em contato
4. **Destaque em busca** — SEO e metadata corretos

### 3.2 Métricas de Sucesso

| Métrica | Target |
|---------|--------|
| Tempo na página | > 2 min |
| Taxa de bounce | < 50% |
| Conversão contato | > 3% |

---

## 4. Análise Competitiva — Benchmarks

### 4.1 Software Houses Referenciadas

| Empresa | O que faz bem | Oportunidade CASA |
|---------|---------------|-------------------|
| **Toptal** | Proposta de valor clara, developers verificados badge | Usar badges/credenciais类似 |
| **Thoughtworks** | storytelling forte, caso de estudo detalhado | Portfolio com narrativa |
| **Deuso** | Design clean, contato proeminente | CTAs mais assertivos |
| **BairesDev** | Escalabilidade comunicada, lista clientes | Prova social / logos clientes |
| **Cubos** | Design diferenciado, identidade forte | Branding mais ousado |

### 4.2 Padrões Comuns

- **Hero:** Título de impacto + subtítulo de valor + CTA principal
- **Social proof:** Logos de clientes, números (projetos, clientes)
- **Serviços:** Grid de cards com icons + descrição curta
- **Portfolio:** Grid com hover reveal + filtros por tecnologia
- **Contato:** Form simples (nome, email, mensagem) ou Calendly embed

---

## 5. Design Language — Proposta Inicial

### 5.1 Direção Estética

**Posicionamento:** Profissional mas não genérico. Moderno mas não frio.

Inspiração: Blend entre a clareza da Thoughtworks e o design acessível da Cubos.

### 5.2 Paleta de Cores — Proposta

| Role | Cor | Hex | Uso |
|------|-----|-----|-----|
| Primary | Azul profundo | `#1E3A5F` | Header, CTAs, títulos |
| Secondary | Azul claro | `#4A90A4` | Accents, links, icons |
| Accent | Laranja terra | `#E07A3D` | CTAs principais, destaques |
| Background | Off-white | `#FAFAFA` | Fundo geral |
| Surface | Branco | `#FFFFFF` | Cards, componentes |
| Text Primary | Grafite | `#2D2D2D` | Corpo de texto |
| Text Secondary | Cinza | `#6B7280` | Subtítulos, labels |

### 5.3 Tipografia — Proposta

| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| Display | Inter (700) | system-ui | Títulos principais, hero |
| Heading | Inter (600) | system-ui | Títulos de seção |
| Body | Inter (400) | system-ui | Texto corrido |
| Caption | Inter (400) | system-ui | Labels, legendas |

### 5.4 Sistema Espacial

- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Container max-width: 1280px
- Grid: 12 colunas, gap 24px (mobile: 4 colunas, gap 16px)

### 5.5 Motion — Proposta

| Tipo | Duração | Easing | Uso |
|------|---------|--------|-----|
| Hover | 150ms | ease-out | Botões, cards |
| Page enter | 300ms | ease-out | Fade in sections |
| Scroll reveal | 400ms | ease-out | Sections ao entrar em viewport |

### 5.6 Ícones

- **Biblioteca:** Lucide React (já definido no techspec)
- **Estilo:** Stroke width 1.5px, size 24px default

---

## 6. Layout e Estrutura

### 6.1 Homepage — Hierarquia Visual

```
┌─────────────────────────────────────────────┐
│  HEADER (fixo)                              │
│  Logo | Home | Serviços | Portfolio | Contato│
├─────────────────────────────────────────────┤
│  HERO (100vh ou 80vh)                      │
│  ┌───────────────────────────────────────┐  │
│  │  Headline: [ Título de Impacto ]      │  │
│  │  Subhead: [ Proposta de valor ]       │  │
│  │  [CTA Primário] [CTA Secundário]      │  │
│  └───────────────────────────────────────┘  │
├─────────────────────────────────────────────┤
│  SOCIAL PROOF                               │
│  [Logo Cliente] [Logo Cliente] [Logo Cliente]│
├─────────────────────────────────────────────┤
│  SERVIÇOS TEASER (3 cards)                  │
│  [Card 1] [Card 2] [Card 3]                 │
│  → Link para /servicos                      │
├─────────────────────────────────────────────┤
│  PORTFOLIO TEASER (3 projetos)              │
│  [Projeto 1] [Projeto 2] [Projeto 3]         │
│  → Link para /portfolio                      │
├─────────────────────────────────────────────┤
│  CTA FINAL                                  │
│  "Pronto para começar?" [Fale Conosco]      │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Links | Redes Sociais | Copyright          │
└─────────────────────────────────────────────┘
```

### 6.2 Responsividade

| Breakpoint | Layout |
|------------|--------|
| < 640px | 1 coluna, menu hamburger |
| 640-768px | 2 colunas para grids |
| 768-1024px | 3 colunas para grids |
| > 1024px | Layout completo, header horizontal |

---

## 7. Componentes — Estados e Comportamentos

### 7.1 Header

| Estado | Comportamento |
|--------|---------------|
| Desktop | Logo esquerda, nav centro, CTA direita |
| Mobile | Logo esquerda, hamburger direita |
| Mobile menu open | Overlay fullscreen, nav vertical |
| Scrolled | Background sólido (drop shadow) |

### 7.2 Hero

- **Background:** Gradiente sutil ou imagem com overlay
- **Animação entrada:** Fade in + translate up, staggered (título → subtítulo → CTAs)
- **CTA primário:** Accent color, hover scale 1.02
- **CTA secundário:** Ghost/outline style

### 7.3 ServiceCard

| Estado | Visual |
|--------|--------|
| Default | Icon + título + descrição curta |
| Hover | Elevação (shadow), icon accent color |

### 7.4 PortfolioCard

| Estado | Visual |
|--------|--------|
| Default | Imagem + título + tags |
| Hover | Overlay com descrição expandida |
| Featured | Badge "Destaque" |

### 7.5 ContactForm

| Estado | Visual |
|--------|--------|
| Default | Campos + labels flutuantes |
| Focus | Border accent, label flutua |
| Loading | Botão desabilitado, spinner |
| Success | Mensagem verde, form hidden |
| Error | Border vermelho, mensagem de erro |

---

## 8. Acessibilidade (WCAG AA)

- [ ] Contraste mínimo 4.5:1 para texto normal
- [ ] Contraste mínimo 3:1 para texto grande
- [ ] Focus visible em todos os elementos interativos
- [ ] Navegação por teclado (Tab order lógica)
- [ ] Labels ARIA para icons e imagens
- [ ] Skip to content link
- [ ] Semantic HTML (header, main, nav, footer)

---

## 9. SEO e Metadata

### 9.1 Global

- Title format: `[Page Title] | CASA — Software House`
- Default description: `CASA — Software house brasileira. Desenvolvimento de software sob medida, apps mobile e consultoria técnica.`

### 9.2 Por Página

| Página | Title | Description |
|--------|-------|-------------|
| Home | CASA — Software House | Default |
| /servicos | Serviços | Desenvolvemos software sob medida... |
| /portfolio | Portfolio | Cases de sucesso em diversos segmentos... |
| /contato | Contato | Fale conosco para discutir seu projeto |

---

## 10. Riscos e Decisões em Aberto

| Item | Status | Ação |
|------|--------|------|
| Paleta de cores final | ⏳ Pendente | Necessário feedback do Gerente de Soluções |
| Imagens placeholder vs reais | ⏳ Pendente | Usar placeholder para MVP |
| Integração Calendly vs form | ⏳ Decisão técnica | Manter form + Nodemailer |
| Blog/Artigos | ❌ Out of scope | Não no MVP |
| Chat interativo | ❌ Out of scope | Não no MVP |

---

## 11. Próximos Passos

1. [ ] **Aprovar Design Discovery** — Gerente de Soluções revisa e aprova
2. [ ] **Wireframes** — Criar wireframes de média fidelidade (casa-wireframing skill)
3. [ ] **Design System** — Se necessário, definir tokens de design (casa-design-system skill)

---

## 12.Referências

- [Tailwind CSS Typography](https://tailwindcss.com/docs/typography-plugin)
- [Lucide Icons](https://lucide.dev/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
