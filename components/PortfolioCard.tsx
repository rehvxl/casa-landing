import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string | null
}

interface PortfolioCardProps {
  project: PortfolioItem
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-normal ease-out group">
      {/* Image */}
      <div className="relative aspect-video bg-neutral-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-normal ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-neutral-800">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-colors duration-fast flex-shrink-0"
              aria-label={`Ver projeto ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <p className="text-neutral-600 text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}