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
  {
    href: 'https://linkedin.com/company/casasoftware',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  { href: 'https://twitter.com/casasoftware', label: 'Twitter', icon: Twitter },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-primary"
              aria-label="CASA - Página inicial"
            >
              CASA
            </Link>
            <p className="mt-4 text-neutral-600 text-sm max-w-xs">
              Software house especializada em soluções digitais sob medida para
              transformar seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Links</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-primary text-sm
                      transition-colors duration-fast focus:outline-none focus:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-primary transition-colors duration-fast
                      focus:outline-none focus:text-primary"
                    aria-label={social.label}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} CASA Software House. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}