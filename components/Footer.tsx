import React from 'react';
import { IconArrowRight } from './Icons';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#0E3338] py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Discover how Hyprova is pioneering the future of muscle health and human recovery.
          </p>
          <button 
            onClick={(e) => handleNavClick('contact', e as any)}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#14b8a6] rounded-lg hover:bg-[#0d9488] shadow-[0_0_20px_rgba(20,184,166,0.3)]"
          >
            Get in Touch
            <IconArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Brand Column */}
            <div className="md:col-span-6 space-y-6">
              <a href="#" onClick={(e) => handleNavClick('home', e)} className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex shrink-0 items-center justify-center">
                    <Logo className="w-full h-full" />
                </div>
                <span className="self-center text-xl font-bold whitespace-nowrap text-[#0E3338]">
                    Hyprova Research in BioTechnologies
                </span>
              </a>
              
              <p className="text-slate-500 max-w-sm">
                Redefining Human Recovery through Biomedical Innovation
              </p>
              
              <div className="flex items-center text-slate-500 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></div>
                Eindhoven, Netherlands
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Company Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-[#0E3338] mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" onClick={(e) => handleNavClick('about', e)} className="hover:text-[#14b8a6] transition-colors">About Us</a></li>
                <li><a href="#" onClick={(e) => handleNavClick('applications', e)} className="hover:text-[#14b8a6] transition-colors">Applications</a></li>
                <li><a href="#" onClick={(e) => handleNavClick('impact', e)} className="hover:text-[#14b8a6] transition-colors">Societal Impact</a></li>
                <li><a href="#" onClick={(e) => handleNavClick('updates', e)} className="hover:text-[#14b8a6] transition-colors">Updates</a></li>
                <li><a href="#" onClick={(e) => handleNavClick('team', e)} className="hover:text-[#14b8a6] transition-colors">Team</a></li>
              </ul>
            </div>

            {/* Connect Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-[#0E3338] mb-6">Connect</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" onClick={(e) => handleNavClick('contact', e)} className="hover:text-[#14b8a6] transition-colors">Contact Us</a></li>
                <li><a href="mailto:hyprovaresearchinbiotechnologi@gmail.com" className="hover:text-[#14b8a6] transition-colors">Email</a></li>
              </ul>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 text-center md:text-left">
             {/* Copyright if needed */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;