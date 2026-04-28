import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transformamos ideias em{' '}
            <span className="text-primary-200">soluções digitais</span>
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl">
            Somos uma software house especializada em desenvolver produtos digitais sob medida.
            Do conceito à entrega, construímos aplicações que impulsionam negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicos"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Ver Serviços
            </Link>
            <Link
              href="/contato"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors text-center"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="white">
          <circle cx="150" cy="50" r="80" />
          <circle cx="100" cy="150" r="60" />
        </svg>
      </div>
    </section>
  )
}
