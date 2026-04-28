import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Container from '@/components/ui/Container'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a CASA Software House. Estamos prontos para ajudar.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-20">
        <Container>
          <h1 className="text-4xl font-bold text-white mb-4">Contato</h1>
          <p className="text-neutral-200 text-lg max-w-2xl">
            Tem uma ideia ou projeto em mente? Fale conosco! Nossa equipe
            entrará em contato o mais rápido possível.
          </p>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}