import React, { useState } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-[#0E3338] border-b border-[#1A4D54]">
      <div className="w-full max-w-[1920px] mx-auto flex flex-wrap items-center justify-between px-6 py-4 lg:px-12">
        
        {/* Logo Section */}
        <a href="#" onClick={(e) => handleNavClick('home', e)} className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-white flex shrink-0 items-center justify-center p-1 transition-transform group-hover:scale-105 rounded-sm">
             <Logo className="w-full h-full" />
          </div>
          <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap text-white tracking-tight leading-tight">
            Hyprova Research in BioTechnologies
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          data-collapse-toggle="navbar-sticky" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg lg:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Navigation Links & CTA */}
        <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-[#1A4D54] rounded-lg bg-[#092529] lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent lg:items-center">
            <li>
              <a href="#" onClick={(e) => handleNavClick('home', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'home' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`} aria-current="page">Home</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick('about', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'about' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`}>About</a>
            </li>
            <li>
              <a href="#applications" onClick={(e) => handleNavClick('applications', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'applications' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`}>Applications</a>
            </li>
            <li>
              <a href="#impact" onClick={(e) => handleNavClick('impact', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'impact' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`}>Impact</a>
            </li>
            <li>
              <a href="#updates" onClick={(e) => handleNavClick('updates', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'updates' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`}>Updates</a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleNavClick('team', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'team' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`}>Team</a>
            </li>
            <li>
              <a href="#ai-assistant" onClick={(e) => handleNavClick('ai-assistant', e)} className={`block py-2 px-3 lg:p-0 transition-colors ${activePage === 'ai-assistant' ? 'text-[#14b8a6]' : 'text-white hover:text-[#14b8a6]'}`}>AI Assistant</a>
            </li>
            <li className="lg:ml-6 mt-4 lg:mt-0">
               <a href="#contact" onClick={(e) => handleNavClick('contact', e)} className="block w-full lg:w-auto text-center px-8 py-2.5 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                Contact
               </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;