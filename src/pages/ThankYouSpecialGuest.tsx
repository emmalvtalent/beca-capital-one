import { useEffect } from 'react';
import { Calendar, MapPin, Clock, Star, CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';

export function ThankYouSpecialGuest() {
  // Generate and download calendar file
  const handleAddToCalendar = () => {
    const event = {
      title: 'Rueda de Prensa - Talent Land México 2026',
      description: 'Presentación oficial de Talent Land México 2026. Descubre todas las novedades de la edición.',
      location: 'Castillo de Chapultepec, Av. Heroico Colegio Militar 172, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11580 Ciudad de México',
      startDate: '20260210T110000',
      endDate: '20260210T130000',
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate}
DTEND:${event.endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'rueda-prensa-talent-land-2026.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Update page title
    document.title = 'Asistencia Confirmada | Rueda de Prensa Talent Land 2026';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff66]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative py-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon 
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                  fill="none" 
                  stroke="#00ff66" 
                  strokeWidth="3"
                />
                <polygon 
                  points="50,20 75,35 75,65 50,80 25,65 25,35" 
                  fill="none" 
                  stroke="#00ff66" 
                  strokeWidth="2"
                />
                <polygon 
                  points="50,35 60,42 60,58 50,65 40,58 40,42" 
                  fill="#00ff66"
                />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg">Talent Land</span>
              <span className="text-[#00ff66] font-bold text-lg"> México</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative py-16 px-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12 animate-slide-up">
            {/* Special Guest Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 mb-6">
              <Star className="w-4 h-4 text-[#00ff66]" />
              <span className="text-[#00ff66] text-sm font-medium tracking-wide uppercase">
                Special Guest
              </span>
            </div>

            {/* Success Icon */}
            <div className="w-24 h-24 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center mx-auto mb-8 glow-green-sm">
              <CheckCircle className="w-12 h-12 text-[#00ff66]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¡Tu asistencia está confirmada!
            </h1>
            
            <p className="text-gray-400 text-lg">
              Te esperamos en la Rueda de Prensa de Talent Land México 2026.
            </p>
          </div>

          {/* Event Details Card */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 border-glow mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Detalles del evento
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#00ff66]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Fecha</p>
                  <p className="text-white font-medium">Martes 10 de febrero de 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#00ff66]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Hora</p>
                  <p className="text-white font-medium">11:00 h</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#00ff66]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00ff66]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Ubicación</p>
                  <p className="text-white font-medium">Castillo de Chapultepec, CDMX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={handleAddToCalendar}
              className="bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66]/20 px-8 py-6 text-base font-medium transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Agregar a mi calendario
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
