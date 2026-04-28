# Design System — CASA Landing Page

**Versão:** 1.0
**Data:** 2026-04-27
**Status:** ✅ Pronto para Revisão
**Parent:** CASA-17

---

## 1. Visão Geral

Design system para landing page da CASA. Foco em tokens CSS + padrões de componentes reutilizáveis. Implementação via Tailwind CSS customizado.

** stack:** Next.js 15 + TypeScript + Tailwind CSS + Lucide React

---

## 2. Tokens de Cores

### 2.1 Paleta Principal

```css
:root {
  /* Primary - Azul profundo */
  --color-primary-50: #EEF2F7;
  --color-primary-100: #D5DEE9;
  --color-primary-200: #ABBED3;
  --color-primary-300: #819CBD;
  --color-primary-400: #567BA7;
  --color-primary-500: #1E3A5F; /* MAIN */
  --color-primary-600: #1A3254;
  --color-primary-700: #162A49;
  --color-primary-800: #12223E;
  --color-primary-900: #0E1A33;

  /* Secondary - Azul claro */
  --color-secondary-50: #F0F7F9;
  --color-secondary-100: #DCEEF3;
  --color-secondary-200: #B9DDED;
  --color-secondary-300: #96CCE7;
  --color-secondary-400: #73BBE1;
  --color-secondary-500: #4A90A4; /* MAIN */
  --color-secondary-600: #3A7283;
  --color-secondary-700: #2A5462;
  --color-secondary-800: #1A3641;
  --color-secondary-900: #0A1820;

  /* Accent - Laranja terra */
  --color-accent-50: #FDF4F0;
  --color-accent-100: #FAE8DE;
  --color-accent-200: #F5D1BD;
  --color-accent-300: #F0BA9C;
  --color-accent-400: #EBA37B;
  --color-accent-500: #E07A3D; /* MAIN */
  --color-accent-600: #B36231;
  --color-accent-700: #864A25;
  --color-accent-800: #583119;
  --color-accent-900: #2B180D;

  /* Neutral - Grafite */
  --color-neutral-50: #F9FAFB;
  --color-neutral-100: #F3F4F6;
  --color-neutral-200: #E5E7EB;
  --color-neutral-300: #D1D5DB;
  --color-neutral-400: #9CA3AF;
  --color-neutral-500: #6B7280;
  --color-neutral-600: #4B5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #2D2D2D; /* MAIN */
  --color-neutral-900: #1F1F1F;

  /* Backgrounds */
  --color-bg-primary: #FAFAFA;
  --color-bg-secondary: #FFFFFF;
  --color-bg-dark: #2D2D2D;
}
```

### 2.2 Configuração Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          50: '#EEF2F7',
          100: '#D5DEE9',
          200: '#ABBED3',
          300: '#819CBD',
          400: '#567BA7',
          500: '#1E3A5F',
          600: '#1A3254',
          700: '#162A49',
          800: '#12223E',
          900: '#0E1A33',
        },
        secondary: {
          DEFAULT: '#4A90A4',
          50: '#F0F7F9',
          100: '#DCEEF3',
          200: '#B9DDED',
          300: '#96CCE7',
          400: '#73BBE1',
          500: '#4A90A4',
          600: '#3A7283',
          700: '#2A5462',
          800: '#1A3641',
          900: '#0A1820',
        },
        accent: {
          DEFAULT: '#E07A3D',
          50: '#FDF4F0',
          100: '#FAE8DE',
          200: '#F5D1BD',
          300: '#F0BA9C',
          400: '#EBA37B',
          500: '#E07A3D',
          600: '#B36231',
          700: '#864A25',
          800: '#583119',
          900: '#2B180D',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#2D2D2D',
          900: '#1F1F1F',
        },
        bg: {
          primary: '#FAFAFA',
          secondary: '#FFFFFF',
          dark: '#2D2D2D',
        },
      },
    },
  },
}
```

---

## 3. Tipografia

### 3.1 Font Family

```css
/* Google Fonts: Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### 3.2 Escala Tipográfica

| Token | Size | Line-height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `--text-xs` | 12px | 16px | 400 | Labels, legendas |
| `--text-sm` | 14px | 20px | 400 | Texto secundário |
| `--text-base` | 16px | 24px | 400 | Corpo de texto |
| `--text-lg` | 18px | 28px | 400 | Texto grande |
| `--text-xl` | 20px | 28px | 600 | Subtítulos |
| `--text-2xl` | 24px | 32px | 600 | Títulos de seção |
| `--text-3xl` | 30px | 36px | 700 | Títulos de página |
| `--text-4xl` | 36px | 40px | 700 | Hero título |
| `--text-5xl` | 48px | 56px | 700 | Hero título desktop |
| `--text-6xl` | 60px | 72px | 700 | Hero título mobile |

### 3.3 Configuração Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'base': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'xl': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        '2xl': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        '3xl': ['30px', { lineHeight: '36px', fontWeight: '700' }],
        '4xl': ['36px', { lineHeight: '40px', fontWeight: '700' }],
        '5xl': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        '6xl': ['60px', { lineHeight: '72px', fontWeight: '700' }],
      },
    },
  },
}
```

---

## 4. Espaçamento

### 4.1 Escala

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Gaps pequenos |
| `--space-2` | 8px | Icon gaps |
| `--space-3` | 12px | Padding interno cards |
| `--space-4` | 16px | Padding padrão |
| `--space-6` | 24px | Seções, gaps entre cards |
| `--space-8` | 32px | Padding containers |
| `--space-10` | 40px | Margins entre seções |
| `--space-12` | 48px | Seções grandes |
| `--space-16` | 64px | Hero spacing |
| `--space-20` | 80px | Footer, CTA sections |
| `--space-24` | 96px | Section spacing desktop |

### 4.2 Configuração Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
    },
  },
}
```

---

## 5. Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
}
```

---

## 6. Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;
}
```

### Tailwind

```javascript
borderRadius: {
  'sm': '4px',
  'md': '6px',
  'lg': '8px',
  'xl': '12px',
  '2xl': '16px',
  'full': '9999px',
}
```

---

## 7. Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

---

## 8. Motion / Animações

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 400ms;

  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### Configuração Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
}
```

---

## 9. Padrões de Componentes

### 9.1 Botões

#### Button Primary
```tsx
// classes Tailwind
"inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-semibold
 transition-all duration-fast ease-out
 hover:bg-accent-600 hover:scale-[1.02] hover:shadow-md
 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
```

#### Button Secondary (Ghost)
```tsx
// classes Tailwind
"inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-primary text-primary
 font-semibold transition-all duration-fast ease-out
 hover:bg-primary hover:text-white
 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

#### Button Text Link
```tsx
// classes Tailwind
"inline-flex items-center text-secondary font-medium underline-offset-4
 hover:underline hover:text-secondary-600
 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
```

### 9.2 Cards

#### ServiceCard
```tsx
// classes Tailwind para container
"bg-white rounded-lg p-6 shadow-sm transition-all duration-normal ease-out
 hover:shadow-lg hover:-translate-y-1"

// Icon wrapper
"w-12 h-12 rounded-lg bg-accent-50 text-accent flex items-center justify-center mb-4"

// Title
"text-xl font-semibold text-neutral-800 mb-2"

// Description
"text-neutral-600 text-base"
```

#### PortfolioCard
```tsx
// Container
"group relative overflow-hidden rounded-lg bg-neutral-200 aspect-video"

// Image
"w-full h-full object-cover transition-transform duration-normal ease-out
 group-hover:scale-105"

// Overlay (visible on hover)
"absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100
 transition-opacity duration-normal flex flex-col justify-end p-4"

// Title
"text-white font-semibold text-lg mb-1"

// Tags
"flex flex-wrap gap-2"
```

### 9.3 Inputs

```tsx
// Container
"flex flex-col gap-1.5"

// Label
"text-sm font-medium text-neutral-700"

// Input
"w-full px-4 py-3 rounded-md border border-neutral-300 text-neutral-800
 placeholder:text-neutral-400
 transition-all duration-fast
 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
 disabled:bg-neutral-100 disabled:cursor-not-allowed
 error:border-red-500 error:ring-2 error:ring-red-500/20"

// Error message
"text-sm text-red-600 mt-1"
```

### 9.4 Header

```tsx
// Desktop nav link
"text-neutral-700 font-medium transition-colors duration-fast
 hover:text-primary
 focus:outline-none focus:text-primary"

// Mobile menu overlay
"fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8"

// Mobile nav link
"text-2xl font-semibold text-neutral-800 hover:text-primary"
```

---

## 10. Layout

### 10.1 Container

```tsx
// classes Tailwind
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

### 10.2 Grid

```tsx
// Services/Portfolio grid
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
```

### 10.3 Section Spacing

```tsx
// Section padding
"py-12 md:py-16 lg:py-24"
```

---

## 11. Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-0` | 0 | Content |
| `z-10` | 10 | Cards, dropdowns |
| `z-20` | 20 | Sticky header |
| `z-30` | 30 | Mobile menu |
| `z-40` | 40 | Modal overlay |
| `z-50` | 50 | Modal content |

---

## 12. Checklist WCAG

- [ ] Contraste 4.5:1 para texto normal (foreground vs background)
- [ ] Contraste 3:1 para texto grande (18px+ ou 14px bold+)
- [ ] Focus visible em todos elementos interativos
- [ ] Labels para todos inputs (visible ou aria-label)
- [ ] Alt text para imagens
- [ ] Semantic HTML (button para ações, a para links)
- [ ] Skip to main content link
- [ ] Navegação por teclado funcional

---

## 13. Arquivos de Implementação Sugeridos

```
casa-landing/
├── tailwind.config.js      # Tokens customizados
├── app/globals.css         # CSS custom properties
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Container.tsx
│   └── CasaComponents.tsx  # Componentes específicos do design
└── docs/
    └── DESIGN-SYSTEM.md
```

---

## 14. Próximos Passos

1. [ ] **Aprovar Design System** — Gerente de Soluções revisa tokens
2. [ ] **Implementar tokens** — Criar tailwind.config.js customizado
3. [ ] **Criar componentes base** — Button, Card, Input, Container
4. [ ] **Migrar sub-issues** — Iniciar implementação com tokens aprovados
