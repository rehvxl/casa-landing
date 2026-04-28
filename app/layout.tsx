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
    <div lang="pt-BR" className="antialiased flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
