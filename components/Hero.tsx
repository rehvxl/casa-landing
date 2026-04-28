import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative bg-primary py-24 md:py-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Transformamos ideias em{' '}
            <span className="text-secondary-400">soluções digitais</span>
          </h1>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl">
            Somos uma software house especializada em desenvolver produtos
            digitais sob medida. Do conceito à entrega, construímos aplicações
            que impulsionam negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md
                bg-accent text-white font-semibold
                transition-all duration-fast ease-out
                hover:bg-accent-600 hover:scale-[1.02] hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                text-center"
            >
              Ver Serviços
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md
                border-2 border-white text-white font-semibold
                transition-all duration-fast ease-out
                hover:bg-white hover:text-primary
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                text-center"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="white">
          <circle cx="150" cy="50" r="80" />
          <circle cx="100" cy="150" r="60" />
        </svg>
      </div>
    </section>
  )
}