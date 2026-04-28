import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça nossos serviços de desenvolvimento web, mobile, consultoria e mais.',
}

export default function ServicosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Oferecemos soluções completas para impulsionar seu negócio no mundo digital.
            Do desenvolvimento à consultoria, estamos prontos para ajudar.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tem um projeto em mente?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Fale conosco e lets create a solution together. Nossa equipe está pronta para transformar sua ideia em realidade.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </>
  )
}
