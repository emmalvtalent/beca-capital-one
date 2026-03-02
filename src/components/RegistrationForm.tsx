import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, ChevronDown } from 'lucide-react';

interface RegistrationFormProps {
  redirectPath: string;
  buttonText?: string;
}

const countryCodes = [
  { code: '+52', country: 'México', flag: '🇲🇽' },
  { code: '+1', country: 'USA/Canadá', flag: '🇺🇸' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+55', country: 'Brasil', flag: '🇧🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+51', country: 'Perú', flag: '🇵🇪' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+34', country: 'España', flag: '🇪🇸' },
];

export function RegistrationForm({ redirectPath, buttonText = 'Enviar registro' }: RegistrationFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    medio: '',
    cargo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Redirect after showing success
    setTimeout(() => {
      navigate(redirectPath);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const selectCountry = (country: typeof countryCodes[0]) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 animate-slide-up">
        <div className="w-14 h-14 rounded-full bg-[#00ff66]/20 flex items-center justify-center mb-3">
          <CheckCircle className="w-7 h-7 text-[#00ff66]" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">¡Registro enviado!</h3>
        <p className="text-gray-400 text-sm text-center">Redirigiendo...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Nombre completo - Mobile: 2 lines, Desktop: 1 line */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <Label htmlFor="nombre" className="text-gray-300 text-sm md:whitespace-nowrap md:w-36">
          Nombre completo: <span className="text-[#00ff66]">*</span>
        </Label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#00ff66] focus:ring-[#00ff66]/20 h-9 text-sm"
        />
      </div>

      {/* Correo electrónico */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <Label htmlFor="email" className="text-gray-300 text-sm md:whitespace-nowrap md:w-36">
          Correo electrónico: <span className="text-[#00ff66]">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#00ff66] focus:ring-[#00ff66]/20 h-9 text-sm"
        />
      </div>

      {/* Teléfono con selector de país */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <Label htmlFor="telefono" className="text-gray-300 text-sm md:whitespace-nowrap md:w-36">
          Teléfono: <span className="text-[#00ff66]">*</span>
        </Label>
        <div className="flex flex-1">
          {/* Country Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="h-9 px-2 bg-white/10 border border-white/10 border-r-0 rounded-l-md text-white text-sm flex items-center gap-1 hover:bg-white/15 transition-colors"
            >
              <span>{selectedCountry.flag}</span>
              <span className="text-gray-300 text-xs hidden sm:inline">{selectedCountry.code}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            
            {showCountryDropdown && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-[#1a1a1a] border border-white/10 rounded-md shadow-xl z-50 max-h-40 overflow-y-auto">
                {countryCodes.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => selectCountry(country)}
                    className="w-full px-2 py-1.5 text-left text-xs text-white hover:bg-white/10 flex items-center gap-2 transition-colors"
                  >
                    <span>{country.flag}</span>
                    <span className="text-gray-400">{country.code}</span>
                    <span>{country.country}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Phone Input */}
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={handleChange}
            placeholder="55 1234 5678"
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#00ff66] focus:ring-[#00ff66]/20 h-9 text-sm rounded-l-none"
          />
        </div>
      </div>

      {/* Medio / Organización */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <Label htmlFor="medio" className="text-gray-300 text-sm md:whitespace-nowrap md:w-36">
          Medio / Org: <span className="text-[#00ff66]">*</span>
        </Label>
        <Input
          id="medio"
          name="medio"
          type="text"
          required
          value={formData.medio}
          onChange={handleChange}
          placeholder="Nombre del medio, organización o comunidad"
          className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#00ff66] focus:ring-[#00ff66]/20 h-9 text-sm"
        />
      </div>

      {/* Cargo */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <Label htmlFor="cargo" className="text-gray-300 text-sm md:whitespace-nowrap md:w-36">
          Cargo: <span className="text-[#00ff66]">*</span>
        </Label>
        <Input
          id="cargo"
          name="cargo"
          type="text"
          required
          value={formData.cargo}
          onChange={handleChange}
          placeholder="Tu cargo"
          className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#00ff66] focus:ring-[#00ff66]/20 h-9 text-sm"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00ff66] hover:bg-[#00cc52] text-black font-semibold py-4 text-sm transition-all duration-300 hover:glow-green-sm disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            {buttonText}
          </span>
        )}
      </Button>
    </form>
  );
}
