import React from 'react';
import { IconArrowRight } from './Icons';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 overflow-hidden bg-hyprova-dark w-full">
      
      {/* Animated Background */}
      <HeaderBackground />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <RevealOnScroll>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Redefining Human <br/>
            Recovery
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            Pioneering next-generation biomedical systems to advance muscle health, accelerate rehabilitation, and preserve physical vitality
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="min-w-[180px] inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-[#14b8a6] rounded-lg hover:bg-[#0d9488] shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
              Learn More
              <IconArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button className="min-w-[180px] inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-slate-600 rounded-lg hover:bg-white/5 hover:border-slate-400">
              View Applications
            </button>
          </div>
        </RevealOnScroll>

        {/* Small bottom bars */}
        <RevealOnScroll delay={600}>
          <div className="mt-20 flex justify-center gap-4">
              <div className="w-16 h-1 bg-[#1A4D54] rounded-full"></div>
              <div className="w-16 h-1 bg-[#14b8a6] rounded-full"></div>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;