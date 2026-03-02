import { MapPin, Navigation } from 'lucide-react';

export function LocationGallery() {
  const images = [
    {
      src: '/images/castillo-aereo.jpg',
      alt: 'Vista aérea del Castillo de Chapultepec',
      caption: 'El majestuoso Castillo de Chapultepec'
    },
    {
      src: '/images/jardin-chapultepec.jpg',
      alt: 'Jardines del Castillo de Chapultepec',
      caption: 'Jardines históricos'
    },
    {
      src: '/images/rueda-prensa.jpg',
      alt: 'Rueda de prensa anterior de Talent Land',
      caption: 'Edición anterior'
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff66]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-6">
            <MapPin className="w-4 h-4 text-[#00ff66]" />
            <span className="text-[#00ff66] text-sm font-medium">Ubicación</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Castillo de <span className="text-gradient">Chapultepec</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un escenario histórico y emblemático de la Ciudad de México para presentar el futuro de la tecnología y la innovación.
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#00ff66]/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Address Card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 border-glow">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-[#00ff66]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white font-semibold text-lg mb-1">Dirección</h3>
                <p className="text-gray-400 mb-1">
                  Av. Heroico Colegio Militar 172, Bosque de Chapultepec I Secc
                </p>
                <p className="text-gray-500 text-sm">
                  Miguel Hidalgo, 11580 Ciudad de México
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Castillo+de+Chapultepec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-sm font-medium hover:bg-[#00ff66]/20 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
