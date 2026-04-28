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
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
        <IconComponent size={24} className="text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
    </div>
  )
}
