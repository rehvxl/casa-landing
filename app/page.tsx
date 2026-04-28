import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import servicesData from '@/data/services.json'
import portfolioData from '@/data/portfolio.json'

export default function Home() {
  const featuredServices = servicesData.slice(0, 3)
  const featuredPortfolio = portfolioData.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Nossos Serviços</h2>
              <p className="mt-2 text-gray-600">Soluções completas para sua transformação digital</p>
            </div>
            <Link
              href="/servicos"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Ver todos os serviços →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Projetos Recentes</h2>
              <p className="mt-2 text-gray-600">Resultados que hablan por nós</p>
            </div>
            <Link
              href="/portfolio"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Ver todos os projetos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPortfolio.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar sua ideia em realidade?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a construir a solução digital perfeita para o seu negócio.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </>
  )
}
