'use client'

import { useState } from 'react'
import PortfolioCard from '@/components/PortfolioCard'
import Container from '@/components/ui/Container'
import portfolioData from '@/data/portfolio.json'

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('all')

  const allTags = Array.from(
    new Set(portfolioData.flatMap((project) => project.tags))
  ).sort()

  const filteredProjects =
    filter === 'all'
      ? portfolioData
      : portfolioData.filter((project) => project.tags.includes(filter))

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-20">
        <Container>
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-neutral-200 text-lg max-w-2xl">
            Conheça alguns dos nossos projetos mais recentes e descubra como
            ajudamos empresas a alcançar seus objetivos digitais.
          </p>
        </Container>
      </section>

      {/* Filter Tags */}
      <section className="py-6 bg-bg-primary border-b border-neutral-200">
        <Container>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-fast ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              Todos
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-fast ${
                  filter === tag
                    ? 'bg-primary text-white'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-neutral-500 py-12">
              Nenhum projeto encontrado com este filtro.
            </p>
          )}
        </Container>
      </section>
    </>
  )
}