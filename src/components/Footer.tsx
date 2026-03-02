import { Instagram, Twitter, Linkedin, Youtube, Globe } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/talentland', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/talentland', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/talentland', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/talentland', label: 'YouTube' },
    { icon: Globe, href: 'https://talent-land.mx', label: 'Website' }
  ];

  return (
    <footer className="py-6 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo-footer.png" 
              alt="Talent Land México" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00ff66] hover:border-[#00ff66]/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>© 2026 Talent Land México</p>
            <p className="mt-1">Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
