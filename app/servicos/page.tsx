import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import Container from '@/components/ui/Container'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Conheça nossos serviços de desenvolvimento web, mobile, consultoria e mais.',
}

export default function ServicosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-20">
        <Container>
          <h1 className="text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h1>
          <p className="text-neutral-200 text-lg max-w-2xl">
            Oferecemos soluções completas para impulsionar seu negócio no mundo
            digital. Do desenvolvimento à consultoria, estamos prontos para
            ajudar.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Tem um projeto em mente?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Fale conosco e crie uma solução juntos. Nossa equipe está pronta
              para transformar sua ideia em realidade.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md
                bg-accent text-white font-semibold
                transition-all duration-fast ease-out
                hover:bg-accent-600 hover:scale-[1.02] hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}