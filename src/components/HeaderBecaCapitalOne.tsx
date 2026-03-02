import { Calendar, MapPin, Clock, ArrowDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBadge?: boolean;
  ctaText?: string;
}

export function Header({ 
  title = "Rueda de Prensa", 
  subtitle = "Talent Land México 2026",
  showBadge = false,
  ctaText = "Solicitar Acceso"
}: HeaderProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="relative overflow-hidden bg-black">
      {/* Logo Section - Pure black background */}
      <div className="relative z-10 bg-black py-2 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <img 
              src="/images/logo-tlmx.png" 
              alt="Talent Land México" 
              className="h-48 md:h-64 lg:h-80 w-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Content Section - With gradient effects starting from here */}
      <div className="relative">
        {/* Background gradient from black (top) to green (bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00ff66]/5 to-[#00ff66]/15" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 102, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 102, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-6">
          <div className="text-center">
            {/* Special Guest Badge */}
            {showBadge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 mb-6 animate-pulse-glow">
                <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
                <span className="text-[#00ff66] text-sm font-medium tracking-wide uppercase">
                  Registro Special Guest
                </span>
              </div>
            )}
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-[#00ff66] font-semibold mb-8">
              {subtitle}
            </p>
            
            {/* Event Details */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-[#00ff66]" />
                <span className="text-sm md:text-base">Martes 10 de febrero, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-[#00ff66]" />
                <span className="text-sm md:text-base">11:00 h</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-[#00ff66]" />
                <span className="text-sm md:text-base">Castillo de Chapultepec, CDMX</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-[#00ff66] hover:bg-[#00cc52] text-black font-bold text-sm md:text-lg rounded-full transition-all duration-300 hover:glow-green-sm group"
            >
              {ctaText}
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00ff66]/50 to-transparent" />
    </header>
  );
}
