import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import Container from '@/components/ui/Container'
import servicesData from '@/data/services.json'
import portfolioData from '@/data/portfolio.json'

export default function Home() {
  const featuredServices = servicesData.slice(0, 3)
  const featuredPortfolio = portfolioData.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services Teaser */}
      <section className="py-12 md:py-16 lg:py-20 bg-bg-primary">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                Nossos Serviços
              </h2>
              <p className="mt-2 text-neutral-600">
                Soluções completas para sua transformação digital
              </p>
            </div>
            <Link
              href="/servicos"
              className="text-secondary font-medium transition-colors duration-fast
                hover:text-secondary-600 focus:outline-none focus:text-secondary-600"
            >
              Ver todos os serviços →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                Projetos Recentes
              </h2>
              <p className="mt-2 text-neutral-600">
                Resultados que falam por nós
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-secondary font-medium transition-colors duration-fast
                hover:text-secondary-600 focus:outline-none focus:text-secondary-600"
            >
              Ver todos os projetos →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPortfolio.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a
              construir a solução digital perfeita para o seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md
                bg-accent text-white font-semibold
                transition-all duration-fast ease-out
                hover:bg-accent-600 hover:scale-[1.02] hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Entre em contato
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}