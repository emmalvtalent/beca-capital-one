import { useEffect } from 'react';
import {  Mail, CheckCircle, } from 'lucide-react';
import { Footer } from '@/components/Footer';

export function ThankYouCapitalOne() {
  useEffect(() => {
    // Update page title
    document.title = 'Solicitud Recibida | Beca Capital One Talent Land 2026';
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
            {/* Success Icon */}
            <div className="w-24 h-24 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center mx-auto mb-8 glow-green-sm">
              <CheckCircle className="w-12 h-12 text-[#00ff66]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hemos recibido tu solicitud correctamente.
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              ¡Gracias por tu interés en formar parte de Talent Land México!
            </h2>

            <p className="text-gray-400 text-lg mb-2">
              Revisaremos tu registro; recuerda que esto no garantiza la beca. En caso de ser aceptada, recibirás en un plazo máximo de 5 días hábiles tu boleto de acceso vía Eventbrite para Talent Land México 2026.
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Revisa tu correo electrónico</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
