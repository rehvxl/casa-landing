import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
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
  plugins: [],
}
export default config