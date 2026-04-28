'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import PortfolioCard from '@/components/PortfolioCard'
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
      <section className="bg-primary-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Conheça alguns dos nossos projetos mais recentes e descubra como ajudamos empresas a alcançar seus objetivos digitais.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todos
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              Nenhum projeto encontrado com este filtro.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
