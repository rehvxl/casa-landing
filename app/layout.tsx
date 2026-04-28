import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'CASA Software House',
    template: '%s | CASA Software House',
  },
  description: 'Soluções digitais sob medida para o seu negócio',
  keywords: [
    'software house',
    'desenvolvimento web',
    'aplicações sob medida',
    'design UI/UX',
  ],
  openGraph: {
    title: 'CASA Software House',
    description: 'Soluções digitais sob medida para o seu negócio',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased flex flex-col min-h-screen bg-bg-primary text-neutral-900">
        <a
          href="#main-content"
          className="skip-link focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:font-semibold focus:no-underline"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}