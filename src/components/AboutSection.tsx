export function AboutSection() {
  const features = [
    {
      title: 'Innovación',
      description: 'Descubre las últimas tendencias tecnológicas y digitales que están transformando el mundo',
      image: '/images/about/innovacion.jpg'
    },
    {
      title: 'Networking',
      description: 'Conecta con líderes de la industria, emprendedores y empresas tecnológicas',
      image: '/images/about/networking.jpg'
    },
    {
      title: 'Conocimiento',
      description: 'Aprende de expertos en conferencias, talleres y workshops especializados',
      image: '/images/about/conocimiento.jpg'
    },
    {
      title: 'Oportunidades',
      description: 'Descubre nuevas posibilidades para tu carrera, negocio o proyecto emprendedor',
      image: '/images/about/oportunidades.jpg'
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff66]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-4">
            <span className="text-[#00ff66] text-sm font-medium">¿Qué es Talent Land?</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            El evento donde <span className="text-gradient">acelerar tu evolución profesional</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Talent Land México es el evento de tecnología, innovación y emprendimiento más importante de Latinoamérica.
            Durante 3 días, miles de asistentes se reúnen para aprender, conectar y descubrir.
          </p>
        </div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#00ff66]/40 transition-all duration-500 h-[280px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end">
                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff66] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00ff66]/15 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/*<div className="mt-8 text-center">*/}
        {/*  <p className="text-gray-500 text-sm">*/}
        {/*    En esta rueda de prensa te presentaremos todas las novedades de la edición 2026*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
