import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { RegistrationForm } from '@/components/RegistrationForm';
import { AboutSection } from '@/components/AboutSection';
import { LocationGallery } from '@/components/LocationGallery';
import { BenefitsSection } from '@/components/BenefitsSection';
import { Footer } from '@/components/Footer';
import { Star } from 'lucide-react';

export function RegistrationSpecialGuest() {
  useEffect(() => {
    document.title = 'Registro Special Guest | Rueda de Prensa Talent Land México 2026';
    
    // Update meta tags for Open Graph
    const metaTags = [
      { property: 'og:title', content: 'Registro asistencia a Rueda de Prensa Talent Land México 2026 | 10 de febrero' },
      { property: 'og:description', content: 'Regístrate para asistir a la presentación oficial de Talent Land México 2026. Castillo de Chapultepec, CDMX.' },
      { property: 'og:image', content: '/images/save-the-date-og.jpg' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Registro asistencia a Rueda de Prensa Talent Land México 2026 | 10 de febrero' },
      { name: 'twitter:description', content: 'Regístrate para asistir a la presentación oficial de Talent Land México 2026. Castillo de Chapultepec, CDMX.' },
      { name: 'twitter:image', content: '/images/save-the-date-og.jpg' }
    ];
    
    metaTags.forEach(({ property, name, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        if (name) meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-3xl" />
      </div>

      <Header showBadge={true} ctaText="Registrarse para Asistir" />

      <main className="flex-1 relative">
        {/* Location Gallery - Right after Hero */}
        <LocationGallery />

        {/* Registration Section */}
        <section id="registration-form" className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-4">
                <Star className="w-4 h-4 text-[#00ff66]" />
                <span className="text-[#00ff66] text-sm font-medium">Registro confirmado inmediatamente</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Completa tu <span className="text-gradient">registro</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Como invitado especial, tu asistencia será confirmada de inmediato al completar el registro. Te esperamos en la Rueda de Prensa.
              </p>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 border-glow relative overflow-hidden">
                {/* Special Guest Badge on Form */}
                <div className="absolute top-0 right-0">
                  <div className="bg-[#00ff66] text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
                    SPECIAL GUEST
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-6 mt-2 text-center">
                  Formulario de registro
                </h3>
                <RegistrationForm redirectPath="/special-guest/gracias" buttonText="Confirmar asistencia" />
              </div>
            </div>

            {/* Benefits Section */}
            <BenefitsSection isSpecialGuest={true} />
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
