import {
  Globe,
  Smartphone,
  Lightbulb,
  Cloud,
  Link as LinkIcon,
  Palette,
  Box,
  type LucideIcon,
} from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon: string
}

interface ServiceCardProps {
  service: Service
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Lightbulb,
  Cloud,
  Link: LinkIcon,
  Palette,
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Box

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-normal ease-out">
      <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
        <IconComponent size={24} className="text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">
        {service.title}
      </h3>
      <p className="text-neutral-600 text-base leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}