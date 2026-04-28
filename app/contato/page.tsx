import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a CASA Software House. Estamos prontos para ajudar.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Contato</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Tem uma ideia ou projeto em mente? Fale conosco! Nossa equipe entrará em contato o mais rápido possível.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
