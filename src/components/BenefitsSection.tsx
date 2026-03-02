interface BenefitsSectionProps {
  isSpecialGuest?: boolean;
}

export function BenefitsSection({ isSpecialGuest = false }: BenefitsSectionProps) {
  const benefits = [
    {
      title: 'Presentación Oficial',
      description: 'Sé el primero en conocer todas las novedades de Talent Land 2026',
      image: '/images/benefits/presentacion.jpg'
    },
    {
      title: 'Speakers Internacionales',
      description: 'Descubre quiénes serán los protagonistas de esta edición',
      image: '/images/benefits/speakers.png'
    },
    {
      title: 'Coffee Break',
      description: 'Disfruta de un momento de networking con refreshments',
      image: '/images/benefits/coffee.jpg'
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff66]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-4">
            <span className="text-[#00ff66] text-sm font-medium">
              {isSpecialGuest ? 'Beneficios exclusivos' : '¿Qué incluye?'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Una experiencia <span className="text-gradient">única</span> te espera
          </h2>
        </div>

        {/* Benefits Grid - 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#00ff66]/40 transition-all duration-500 h-[200px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full p-5 flex flex-col justify-end">
                {/* Text */}
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#00ff66] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00ff66]/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Note Card */}
        <div className="mt-6 p-4 rounded-xl bg-[#00ff66]/5 border border-[#00ff66]/20">
          <p className="text-[#00ff66] text-sm text-center">
            {isSpecialGuest ? (
              <><strong>Nota:</strong> Tu asistencia está confirmada. Completa el registro para asegurar tu lugar.</>
            ) : (
              <><strong>Nota:</strong> Tu solicitud será revisada y te contactaremos para confirmar tu asistencia.</>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
