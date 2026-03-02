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

export function CapitalOneRegistrationForm({ redirectPath, buttonText = 'Enviar registro' }: RegistrationFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    codigoPostal: '',
    estado: '',
    pais: '',
    edad: '',
    genero: '',
    linkedin: '',
    gradoEstudios: '',
    gradoEstudiosOtro: '',
    areaAcademica: '',
    areaAcademicaOtro: '',
    aniosExperiencia: '',
    trabajaActualmente: '',
    empresa: '',
    puestoActual: '',
    puestoActualOtro: '',
    personasACargo: '',
    lenguajes: [] as string[],
    lenguajesOtro: '',
    experienciaCloud: '',
    aniosCloud: '',
    porqueBeca: '',
    aceptaTerminos: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => navigate(redirectPath), 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleCheckboxChange = (lang: string) => {
  //   setFormData(prev => {
  //     const current = prev.lenguajes;
  //     if (current.includes(lang)) {
  //       return { ...prev, lenguajes: current.filter(l => l !== lang) };
  //     }
  //     if (current.length < 2) {
  //       return { ...prev, lenguajes: [...current, lang] };
  //     }
  //     return prev;
  //   });
  // };
    const handleCheckboxChange = (lang) => {
        setFormData((prev) => {
            const isSelected = prev.lenguajes.includes(lang);

            // 1. Handle Unchecking
            if (isSelected) {
                return {
                    ...prev,
                    lenguajes: prev.lenguajes.filter((i) => i !== lang),
                    // Clear custom field if 'Other' is unchecked
                    otherLanguage: lang === 'Other' ? '' : prev.otherLanguage
                };
            }

            // 2. Handle Checking (with max 2 limit)
            if (prev.lenguajes.length < 2) {
                return {
                    ...prev,
                    lenguajes: [...prev.lenguajes, lang]
                };
            }

            return prev;
        });
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

  // Helper para renderizar selects con estilo uniforme
  const renderSelect = (name: string, label: string, options: string[], required = true) => (
      <div className="flex flex-col gap-1 md:gap-3">
        <Label htmlFor={name} className="text-gray-300 text-sm md:w-48 shrink-0">
          {label}: {required && <span className="text-[#00ff66]">*</span>}
        </Label>
        <select
            id={name}
            name={name}
            required={required}
            value={(formData as any)[name]}
            onChange={handleChange}
            className="flex-1 bg-white/5 border border-white/10 rounded-md text-white h-9 text-sm px-2 focus:border-[#00ff66] outline-none"
        >
          <option value="" className="bg-[#1a1a1a]">Selecciona una opción</option>
          {options.map(opt => <option key={opt} value={opt} className="bg-[#1a1a1a]">{opt}</option>)}
        </select>
      </div>
  );
  const renderNumberInput = (name: string, label: string, min: number, max: number, required = true) => (
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <Label htmlFor={name} className="text-gray-300 text-sm md:w-48 shrink-0">
          {label}: {required && <span className="text-[#00ff66]">*</span>}
        </Label>
        <div className="relative flex-1">
          <input
              id={name}
              name={name}
              type="number"
              min={min}
              max={max}
              required={required}
              value={(formData as any)[name]}
              onChange={handleChange}
              placeholder="--"
              className="w-full bg-white/5 border border-white/10 rounded-md text-white h-9 text-sm px-3 focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66]/20 outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          {/* Indicador visual de flechas opcional o dejar las nativas */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col pointer-events-none opacity-50">
            <ChevronDown className="w-3 h-3 rotate-180 mb-[-2px]" />
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>
  );
  const renderNumberStepper = (name: string, label: string, min: number, max: number, required = true) => {
    const currentValue = parseInt((formData as any)[name]) || 0;

    const updateValue = (step: number) => {
      const newValue = Math.max(min, Math.min(max, currentValue + step));
      setFormData(prev => ({ ...prev, [name]: newValue.toString() }));
    };

    return (
        <div className="flex flex-col gap-1 md:gap-3">
          <Label htmlFor={name} className="text-gray-300 text-sm shrink-0">
            {label}: {required && <span className="text-[#00ff66]">*</span>}
          </Label>
          <div className="relative flex-1 flex h-9">
            <input
                id={name}
                name={name}
                type="number"
                min={min}
                max={max}
                required={required}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="flex-1 bg-white/5 border border-white/10 rounded-l-md text-white h-full text-sm px-3 focus:border-[#00ff66] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className="flex flex-col border-y border-r border-white/10 rounded-r-md overflow-hidden w-10">
              <button
                  type="button"
                  onClick={() => updateValue(1)}
                  className="flex-1 bg-white/10 hover:bg-[#00ff66]/20 text-gray-400 hover:text-[#00ff66] flex items-center justify-center border-b border-white/5 transition-colors"
              >
                <ChevronDown className="w-3 h-3 rotate-180" />
              </button>
              <button
                  type="button"
                  onClick={() => updateValue(-1)}
                  className="flex-1 bg-white/10 hover:bg-[#00ff66]/20 text-gray-400 hover:text-[#00ff66] flex items-center justify-center transition-colors"
              >
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
    );
  };
  return (
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">

        {/* Información Personal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-gray-300 text-xs">Nombre(s) *</Label>
            <Input name="nombres" required value={formData.nombres} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9" />
          </div>
          <div className="space-y-1">
            <Label className="text-gray-300 text-xs">Apellido(s) *</Label>
            <Input name="apellidos" required value={formData.apellidos} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
          <Label className="text-gray-300 text-sm md:w-48 shrink-0">Correo electrónico: *</Label>
          <Input name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9 flex-1" />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
          <Label className="text-gray-300 text-sm md:w-48 shrink-0">Teléfono móvil: *</Label>
          <div className="flex flex-1">
            <div className="relative">
              <button type="button" onClick={() => setShowCountryDropdown(!showCountryDropdown)} className="h-9 px-2 bg-white/10 border border-white/10 border-r-0 rounded-l-md text-white text-sm flex items-center gap-1">
                <span>{selectedCountry.flag}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-44 bg-[#1a1a1a] border border-white/10 rounded-md shadow-xl z-50 max-h-40 overflow-y-auto">
                    {countryCodes.map((c) => (
                        <button key={c.code} type="button" onClick={() => { setSelectedCountry(c); setShowCountryDropdown(false); }} className="w-full px-2 py-1.5 text-left text-xs text-white hover:bg-white/10 flex items-center gap-2">
                          {c.flag} {c.code} {c.country}
                        </button>
                    ))}
                  </div>
              )}
            </div>
            <Input name="telefono" required value={formData.telefono} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9 rounded-l-none flex-1" />
          </div>
        </div>

        {/* Ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label className="text-gray-300 text-xs">C.P. *</Label>
            <Input name="codigoPostal" required value={formData.codigoPostal} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9" />
          </div>
          <div className="space-y-1">
            <Label className="text-gray-300 text-xs">Estado *</Label>
            <Input name="estado" required value={formData.estado} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9" />
          </div>
          <div className="space-y-1">
            <Label className="text-gray-300 text-xs">País *</Label>
            <Input name="pais" required value={formData.pais} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9" />
          </div>
        </div>

        {/* Demográficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*{renderNumberInput("edad", "Edad", 10, 99)}*/}
          {renderNumberStepper("edad", "Edad", 10, 99)}
          {renderSelect("genero", "Género", ["Hombre", "Mujer", "Otro"])}
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
          <Label className="text-gray-300 text-sm md:w-48 shrink-0">LinkedIn (Opcional):</Label>
          <Input name="linkedin" placeholder="https://linkedin.com/in/..." value={formData.linkedin} onChange={handleChange} className="bg-white/5 border-white/10 text-white h-9 flex-1" />
        </div>

        {/* Educación */}
        {renderSelect("gradoEstudios", "Último grado estudios", ["Técnico Superior Universitario", "Licenciatura / Ingeniería concluida", "Maestría concluida", "Doctorado concluido", "Licenciatura / Ingeniería en curso", "Otro"])}
        {formData.gradoEstudios === 'Otro' && (
            <Input name="gradoEstudiosOtro" placeholder="Especifica tu grado" onChange={handleChange} className="bg-white/5 border-[#00ff66]/30 text-white h-9 mt-1" />
        )}

        {renderSelect("areaAcademica", "Área académica", ["Ciencias exactas o ingenierías", "Informática / Desarrollo de software", "Otra"])}
        {formData.areaAcademica === 'Otra' && (
            <Input name="areaAcademicaOtro" placeholder="Especifica el área" onChange={handleChange} className="bg-white/5 border-[#00ff66]/30 text-white h-9 mt-1" />
        )}

        {/* Experiencia */}
        {renderSelect("aniosExperiencia", "Años experiencia prof.", ["Menos de 1.5 años", "1.5 – 3 años", "3 – 5 años", "5 – 8 años", "8+ años"])}

        {renderSelect("trabajaActualmente", "¿Trabajas actualmente?", ["Sí", "No"])}
        {formData.trabajaActualmente === 'Sí' && (
            <>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <Label className="text-gray-300 text-sm md:w-48 shrink-0">Empresa / Org:</Label>
                <Input
                    name="empresa"
                    value={formData.empresa || ''}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white h-9 flex-1"
                />
              </div>

              {renderSelect("puestoActual", "Puesto actual", [
                "Software Engineer", "Senior Software Engineer", "Software / Tech Lead",
                "Engineering Manager", "Director / Head of Engineering", "Product Manager", "Otra"
              ])}

              {formData.puestoActual === 'Otra' && (
                  <Input
                      name="puestoActualOtro"
                      placeholder="Especifica tu puesto"
                      value={formData.puestoActualOtro || ''}
                      onChange={handleChange}
                      className="bg-white/5 border-[#00ff66]/30 text-white h-9 mt-1"
                  />
              )}

              {renderSelect("personasACargo", "Personas a cargo", ["No", "1 – 3", "4 – 8", "9+"])}
            </>
        )}
        {/* Lenguajes */}
          <div className="space-y-2">
              <Label className="text-gray-300 text-sm">Lenguajes principales (máximo 2): *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Python', 'Java', 'JavaScript', 'Go', 'Node.js', 'Other'].map(lang => (
                      <label key={lang} className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
                          <input
                              type="checkbox"
                              checked={formData.lenguajes.includes(lang)}
                              onChange={() => handleCheckboxChange(lang)}
                              className="rounded border-white/10 bg-black/5 text-[#00ff66] focus:ring-0"
                          />
                          {lang}
                      </label>
                  ))}
              </div>

              {/* Conditional Custom Field */}
              {formData.lenguajes.includes('Other') && (
                  <input
                      type="text"
                      placeholder="Escribe tu lenguaje..."
                      value={formData.otherLanguage || ''}
                      onChange={(e) => setFormData({ ...formData, otherLanguage: e.target.value })}
                      className="mt-2 w-full rounded border border-white/10 bg-black/20 p-2 text-xs text-white focus:border-[#00ff66] focus:outline-none"
                  />
              )}
          </div>
        {/* Cloud */}
        {renderSelect("experienciaCloud", "Experiencia Cloud", ["AWS", "GCP", "Azure", "No tengo experiencia en Cloud"])}
        {formData.experienciaCloud !== "No tengo experiencia en Cloud" && formData.experienciaCloud !== "" && (
            renderSelect("aniosCloud", "Años exp. Cloud", ["Menos de 1", "1 – 2", "2 – 4", "4+"])
        )}

        {/* Por qué aplicar */}
        <div className="space-y-1">
          <Label className="text-gray-300 text-sm">¿Por qué quieres aplicar a esta beca? (Opcional)</Label>
          <textarea
              name="porqueBeca"
              value={formData.porqueBeca}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-md text-white text-sm p-2 h-24 focus:border-[#00ff66] outline-none"
          />
        </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-0.5">
                      <input
                          type="checkbox"
                          name="aceptaTerminos"
                          checked={formData.aceptaTerminos || false}
                          onChange={(e) => handleChange({
                              target: {
                                  name: 'aceptaTerminos',
                                  value: e.target.checked
                              }
                          })}
                          className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#00ff66] focus:ring-offset-black focus:ring-[#00ff66] transition-colors"
                      />
                  </div>
                  <div className="flex flex-col gap-1">
            {/*<span className="text-sm text-gray-300 leading-tight">*/}
            {/*    Acepto compartir mis datos y el uso de mi información*/}
            {/*</span>*/}
                      <p className="text-[11px] text-gray-500 leading-normal">
                          Entiendo que la inscripción en este formulario no garantiza la asignación de la beca. En caso de ser seleccionado(a), la beca consistirá en una entrada Platino para Talent Land México 2026.
                      </p>
                  </div>

              </label>
              <ul className="text-[11px] text-gray-500 leading-normal">

                  <li>En caso de resultar seleccionado(a), la beca consistirá en una entrada Platino para el acceso a Talent Land México 2026.</li>
                  <li>En caso de no resultar seleccionado(a) para la beca Platino, el participante podrá ser considerado para una Entrada General.</li>
                  <li>Promoción válida hasta agotar existencias.</li>
                  <li>Al completar el registro, declaro que entiendo y acepto los Términos y Condiciones (<span className={"text-[#00ff66] underline"}>https://talent-land.mx/terminos-y-condiciones/</span>), así como el Aviso de Privacidad (<span className={"text-[#00ff66] underline"}>https://www.talent-network.org/aviso-de-privacidad/</span>) del evento.</li>
              </ul>
          </div>


        <Button
            type="submit"
            disabled={isSubmitting || !formData.aceptaTerminos}
            className={`w-full bg-[#00ff66] hover:bg-[#00cc52] text-black font-bold py-6 text-base transition-all duration-300 mt-6`}
        >
          {isSubmitting ? "Enviando..." : buttonText}
        </Button>
      </form>
  );
}
