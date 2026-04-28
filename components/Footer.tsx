import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const footerLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contato', label: 'Contato' },
]

const socialLinks = [
  { href: 'https://github.com/casasoftware', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/company/casasoftware', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com/casasoftware', label: 'Twitter', icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary-600">
              CASA
            </Link>
            <p className="mt-4 text-gray-600 text-sm max-w-xs">
              Software house especializada em soluções digitais sob medida para transformar seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CASA Software House. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
