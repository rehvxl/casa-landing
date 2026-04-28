# Wireframes — CASA Landing Page

**Versão:** 1.0
**Data:** 2026-04-27
**Status:** ✅ Aprovado — Pronto para Handoff
**Parent:** CASA-17

---

## Nota sobre Notação

- `[====]` = Container/Box (maior)
- `[    ]` = Elemento vazio
- `┌─┐` = Borda
- `│ │` = Divisor vertical
- `████` = Elemento clicável (botão/link)
- `....` = Imagem placeholder
- `===` = Linha separadora

---

## 1. Homepage (/)

### 1.1 Header (fixo em todas as páginas)

```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO CASA]        Home    Serviços    Portfolio    Contato   [████ Contato ████] │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Altura: 72px desktop, 64px mobile
- Background: transparente → sólido on scroll
- Logo: 120px width max
- Nav links: 16px, espaçamento 32px entre items
- CTA button: accent color (orange)

### 1.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ┌─────────────────────────────┐              │
│                    │                             │              │
│                    │   DESENVOLVEMOS SOFTWARE     │              │
│                    │   QUE MOVE SEU NEGÓCIO      │              │
│                    │                             │              │
│                    │   Software sob medida para  │              │
│                    │   empresas que buscam       │              │
│                    │   crescer com tecnologia.    │              │
│                    │                             │              │
│                    │   [████ Ver Serviços ████]  │              │
│                    │   [     Portfolio    ]        │              │
│                    │                             │              │
│                    └─────────────────────────────┘              │
│                                                                 │
│                         ▼ (scroll indicator)                    │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Altura: 100vh ou min 600px
- Background: gradiente azul profundo ou imagem com overlay 60%
- Headline: 48px desktop, 32px mobile, font-weight 700
- Subheadline: 20px, cor secundária
- CTAs lado a lado, primário filled, secundário ghost

### 1.3 Social Proof / Logos

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   [.....LOGO 1.....]   [.....LOGO 2.....]   [.....LOGO 3.....] │
│                                                                 │
│   Confiança deliveries para empresas como:                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- 3-5 logos de "clientes"
- Grayscale, opacity 60%
- Altura seção: 120px

### 1.4 Serviços Teaser

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    NOSSOS SERVIÇOS                               │
│                    ─────────────────                             │
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐       │
│   │    [icon]     │  │    [icon]     │  │    [icon]     │       │
│   │               │  │               │  │               │       │
│   │   Título 1    │  │   Título 2    │  │   Título 3    │       │
│   │               │  │               │  │               │       │
│   │ Descrição     │  │ Descrição     │  │ Descrição     │       │
│   │ curta do      │  │ curta do      │  │ curta do      │       │
│   │ serviço.      │  │ serviço.       │  │ serviço.       │       │
│   │               │  │               │  │               │       │
│   └───────────────┘  └───────────────┘  └───────────────┘       │
│                                                                 │
│                    [████ Ver todos os serviços ████]            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Grid 3 colunas desktop, 2 tablet, 1 mobile
- Card: padding 24px, border-radius 8px, shadow-sm
- Icon: 48px, accent color
- Gap entre cards: 24px
- Link ver todos: alinhado à direita desktop, centralizado mobile

### 1.5 Portfolio Teaser

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    PROJETOS RECENTES                             │
│                    ──────────────────                           │
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐       │
│   │ ............. │  │ ............. │  │ ............. │       │
│   │ ............. │  │ ............. │  │ ............. │       │
│   │               │  │               │  │               │       │
│   │   Título      │  │   Título      │  │   Título      │       │
│   │   [tag] [tag] │  │   [tag] [tag] │  │   [tag] [tag] │       │
│   └───────────────┘  └───────────────┘  └───────────────┘       │
│                                                                 │
│                    [████ Ver portfolio completo ████]          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Grid 3 colunas desktop, 2 tablet, 1 mobile
- Imagem: aspect-ratio 16:9, border-radius 8px
- Tags: pill badges, 12px, secondary color
- Gap: 24px

### 1.6 CTA Final

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│        PRONTO PARA TRANSFORMAR SEU NEGÓCIO?                     │
│                                                                 │
│        Vamos discutir seu próximo projeto.                       │
│                                                                 │
│                    [███████ Fale Conosco ███████]               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: primary color (azul profundo)
- Texto: branco
- Altura: 300px desktop, 200px mobile
- CTA: accent color (laranja)

### 1.7 Footer

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [LOGO CASA]                                                    │
│                                                                 │
│  Home    Serviços    Portfolio    Contato                       │
│                                                                 │
│  ─────────────────────────────────────────────────────          │
│                                                                 │
│  © 2026 CASA Software House. Todos os direitos reservados.     │
│                                                                 │
│  [LinkedIn]  [GitHub]  [Instagram]                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: grafite (#2D2D2D)
- Texto: off-white (#FAFAFA)
- Altura: ~300px
- Social icons: 24px

---

## 2. Página /servicos

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER (mesmo componente)                                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    SERVIÇOS                                     │
│                    ─────────                                     │
│                    Desenvolvemos soluções completas...           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐     │
│   │    [icon]     │  │    [icon]     │  │    [icon]     │     │
│   │               │  │               │  │               │     │
│   │   Título 1    │  │   Título 2    │  │   Título 3    │     │
│   │               │  │               │  │               │     │
│   │ Descrição     │  │ Descrição     │  │ Descrição     │     │
│   │ completa do   │  │ completa do   │  │ completa do   │     │
│   │ serviço.      │  │ serviço.      │  │ serviço.      │     │
│   │               │  │               │  │               │     │
│   └───────────────┘  └───────────────┘  └───────────────┘     │
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐     │
│   │    [icon]     │  │    [icon]     │  │    [icon]     │     │
│   ...                                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│        TEM UM PROJETO EM MENTE?                                 │
│        [███████ Solicitar Orçamento ███████]                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Header page: padding-top 120px, text-align center
- Grid: 3 colunas desktop, 2 tablet, 1 mobile
- Cards maiores que no teaser (descrição completa)
- CTA final linka para /contato

---

## 3. Página /portfolio

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    PORTFOLIO                                     │
│                    ────────                                     │
│                    Cases de sucesso em diversos segmentos.       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   [ALL]  [React]  [Node]  [Mobile]  [AI]  [+mais]              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐     │
│   │ ............. │  │ ............. │  │ ............. │     │
│   │ ............. │  │ ............. │  │ ............. │     │
│   │               │  │   [DESTAQUE]  │  │               │     │
│   │   Título      │  │   Título      │  │   Título      │     │
│   │               │  │               │  │               │     │
│   │   [tag] [tag] │  │   [tag] [tag] │  │   [tag] [tag] │     │
│   │               │  │               │  │               │     │
│   │   hover:      │  │   hover:      │  │   hover:      │     │
│   │   descrição   │  │   descrição   │  │   descrição   │     │
│   │   expande     │  │   expande     │  │   expande     │     │
│   └───────────────┘  └───────────────┘  └───────────────┘     │
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐     │
│   ...                                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Filtros: pills horizontais, scroll em mobile
- Filtro ativo: filled accent color
- Grid: 3 colunas desktop, 2 tablet, 1 mobile
- Card hover: overlay com descrição expandida (semi-transparente)
- Badge "Destaque": canto superior direito card

---

## 4. Página /contato

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    CONTATO                                       │
│                    ──────                                       │
│                    Quer discutir seu projeto?                    │
│                   特价填写表格或发送邮件至 hi@casa.com            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌─────────────────────────┐  ┌───────────────────────────┐    │
│   │                         │  │                           │    │
│   │   Nome *                 │  │   ✉ hi@casa.com           │    │
│   │   [___________________] │  │   Tel: (11) 99999-9999    │    │
│   │                         │  │                           │    │
│   │   Email *               │  │   São Paulo, SP           │    │
│   │   [___________________] │  │                           │    │
│   │                         │  │   Redes:                  │    │
│   │   Empresa               │  │   [in] [gh] [ig]         │    │
│   │   [___________________] │  │                           │    │
│   │                         │  └───────────────────────────┘    │
│   │   Mensagem *            │                                    │
│   │   [___________________] │                                    │
│   │   [___________________] │                                    │
│   │   [___________________] │                                    │
│   │   [___________________] │                                    │
│   │                         │                                    │
│   │   [██████ Enviar ██████] │                                    │
│   │                         │                                    │
│   └─────────────────────────┘                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Layout: 2 colunas desktop (form 60%, info 40%), 1 coluna mobile
- Form: stack vertical, labels acima dos inputs
- Inputs: padding 12px 16px, border-radius 6px, border 1px #E5E7EB
- Textarea: 5 linhas min
- Botão: full-width em mobile
- Info panel: background surface, padding 32px

---

## 5. Mobile (< 640px)

### 5.1 Header Mobile

```
┌─────────────────────────┐
│ [LOGO]            [≡]    │
└─────────────────────────┘
```

**Mobile menu open:**
```
┌─────────────────────────┐
│ [LOGO]            [×]    │
├─────────────────────────┤
│                         │
│        Home             │
│                         │
│      Serviços           │
│                         │
│     Portfolio           │
│                         │
│       Contato           │
│                         │
│   [████ Contato ████]   │
│                         │
└─────────────────────────┘
```

**Specs:**
- Menu: fullscreen overlay
- Nav: centralizado, 24px font-size, 48px entre items
- CTA: mesmo estilo do desktop

### 5.2 Hero Mobile

```
┌─────────────────────────┐
│                         │
│   DESENVOLVEMOS          │
│   SOFTWARE QUE MOVE      │
│   SEU NEGÓCIO            │
│                         │
│   Software sob medida   │
│   para empresas que      │
│   buscam crescer.       │
│                         │
│   [████ Ver Serviços █] │
│                         │
│   [   Portfolio    ]    │
│                         │
└─────────────────────────┘
```

**Specs:**
- Headline: 32px
- CTAs: full-width, stacked
- Padding: 24px lateral

---

## 6. Component Inventory — Wireframe Summary

| Componente | Altura | Colunas | Notas |
|------------|--------|---------|-------|
| Header | 72px | — | Fixo, transparente → sólido |
| Hero | 100vh/600px | — | Centered content |
| Logo strip | 120px | 3-5 | Grayscale |
| ServiceCard | auto | 3/2/1 | Icon top, text below |
| PortfolioCard | auto | 3/2/1 | Image 16:9, tags below |
| CTA Section | 300px | — | Centered text + button |
| Footer | ~300px | — | 4 colunas links + logo |
| ContactForm | auto | 2/1 | Labels above inputs |

---

## 7. Notas de Interação

### Hover States
- **Header nav:** underline animado
- **ServiceCard:** shadow elevação
- **PortfolioCard:** overlay com descrição
- **Buttons:** scale 1.02 + shadow

### Focus States
- **Inputs:** border accent color + ring
- **Buttons:** outline accent
- **Nav links:** visible focus indicator

### Loading States
- **ContactForm submit:** spinner no botão, inputs disabled

### Error States
- **ContactForm:** border vermelha + mensagem abaixo do campo

---

## 8. Decisões de Design

| Item | Decisão | Justificativa |
|------|---------|---------------|
| Scroll indicator no hero | ✅ Removido | Simplicidade — navegação clara sem indicador adicional |
| Animação de scroll nos cards | ✅ Adiada | MVP não inclui — possível futura iteração |
| Modal de detalhes no portfolio | ✅ Expandir in-place | Melhor UX mobile, menos complexidade técnica |

---

## 9. Próximos Passos

- [x] **Aprovar wireframes** — ✅ Aprovado
- [x] **Design System** — Tokens definidos neste documento
- [ ] **UX Writer** — Passar contexto de telas para produção de microcopy
- [ ] **Handoff Dev Frontend** — Entregar specs para implementação
