import { useEffect, useState } from 'react';
// import { Header } from '@/components/Header';
// import { RegistrationForm } from '@/components/RegistrationForm';
import { AboutSection } from '@/components/AboutSection';
// import { LocationGallery } from '@/components/LocationGallery';
// import { BenefitsSection } from '@/components/BenefitsSection';
import { Footer } from '@/components/Footer';
import {CapitalOneRegistrationForm} from "@/components/CapitalOneRegistrationForm.tsx";
import {ArrowDown} from "lucide-react";

export function BecaCapitalOne() {
  const [showStickyBtn, setShowStickyBtn] = useState(true);
  useEffect(() => {
    document.title = 'Beca Capital One | Talent Land México 2026';

    // Update meta tags for Open Graph
    const metaTags = [
      { property: 'og:title', content: 'Beca Capital One Talent Land México 2026' },
      { property: 'og:description', content: 'Regístrate para obtener una beca al 100% para Talent Land México 2026.' },
      { property: 'og:image', content: '/images/becaCapitalOne/hero.jpg' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Beca Capital One Talent Land México 2026' },
      { name: 'twitter:description', content: 'Regístrate para obtener una beca al 100% para Talent Land México 2026.' },
      { name: 'twitter:image', content: '/images/becaCapitalOne/hero.jpg' }
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


    const handleScroll = () => {
      const formElement = document.getElementById('registration-form');
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        // Hide button when the top of the form is 400px from the bottom of the viewport
        const isNearForm = rect.top < window.innerHeight - 100;
        setShowStickyBtn(!isNearForm);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
  const scrollTo = (elementId:string) => {
    const formSection = document.getElementById(elementId);
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-3xl" />
      </div>

      {/*<Header ctaText="Solicitar Acceso" />*/}

      <main className="flex-1 relative">
        <div className="relative w-full overflow-hidden">
          {/* The Image */}
          <img
              className="mx-auto w-full h-auto hidden md:block"
              src="/images/becaCapitalOne/hero.jpg"
              alt="Hero"
          />
          <img
              className="mx-auto w-full h-auto block md:hidden"
              src="/images/becaCapitalOne/heroM.jpg"
              alt="Hero"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max hidden md:block">
            <button
                onClick={()=>scrollTo('registration-form')}
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-[#00ff66] hover:bg-[#00cc52] text-black font-bold text-sm md:text-lg rounded-full transition-all duration-300 hover:glow-green-sm group shadow-lg"
            >
              Participa
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>


        {/* Transition/Value Proposition Section */}
        <section className="bg-black py-16 md:py-24 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-4xl font-light text-white leading-tight mb-8">
              Una oportunidad que se <span className="font-bold text-[#00ff66]">gana</span>. <br />
              Una experiencia que <span className="italic">transforma</span>.
            </h3>

            <div className="w-16 h-1 [background:linear-gradient(90deg,transparent,#00ff66,transparent)] mx-auto mb-8" />

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              Capital One impulsa una beca <span className="text-white font-semibold">100% categoría Platino</span> para perfiles que demuestren visión, compromiso y ambición de crecer en la era de la inteligencia artificial.
            </p>

            <p className="text-[#00ff66] font-mono text-sm tracking-widest uppercase">
              Regístrate y demuestra por qué debes estar dentro
            </p>
          </div>
        </section>
        {/* Location Gallery - Right after Hero */}
        {/*<LocationGallery />*/}

        <AboutSection />
        {/* Registration Section */}
        <section id="registration-form" className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-4">
                <span className="text-[#00ff66] text-sm font-medium">¡Limitado a 1500 becas!</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Completa tu <span className="text-gradient">registro</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Esta beca categoría Platino es posible gracias a Capital One, como parte de su compromiso por impulsar talento con visión de crecimiento y liderazgo en entornos de transformación tecnológica.
                <br></br>
                Está dirigida a perfiles que demuestren preparación, iniciativa y un interés genuino por potenciar su desarrollo profesional dentro del ecosistema de innovación que reúne Talent Land.
                <br></br>
                Cada registro será evaluado conforme a los criterios establecidos para esta convocatoria.
              </p>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 border-glow">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  Formulario de registro
                </h3>
                <CapitalOneRegistrationForm redirectPath="/beca-capital-one/gracias" buttonText="Solicitar Beca Capital One" />
              </div>
            </div>

            {/* Benefits Section */}
            {/*<BenefitsSection />*/}
          </div>
        </section>

      </main>
      {/* MOBILE STICKY BUTTON */}
      <div
          className={`fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 md:hidden ${
              showStickyBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
      >
        <button
            onClick={() => scrollTo('registration-form')}
            className="w-full max-w-xs inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#00ff66] active:scale-95 text-black font-extrabold text-base rounded-full shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all"
        >
          Participa Ahora
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
