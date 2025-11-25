import React from 'react';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* 1. Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0E3338] w-full">
         <HeaderBackground />
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">About Hyprova</h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Pioneering the future of muscle health and biomedical innovation
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* 2. Our Mission */}
      <section className="py-24 px-6 lg:px-8 max-w-5xl mx-auto text-center">
         <RevealOnScroll>
           <h2 className="text-4xl md:text-5xl font-bold text-[#0E3338] mb-6 tracking-tight">Our Mission</h2>
           <div className="w-24 h-1.5 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
           <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto font-light">
             At Hyprova Research in BioTechnologies, we are advancing the future of muscle health and human recovery through next-generation biomedical systems. Our mission is to develop innovative, science-backed technologies that empower individuals to regain strength, accelerate rehabilitation, and preserve muscle vitality across all stages of life.
           </p>
         </RevealOnScroll>
      </section>

      {/* 3. The Challenge */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
               <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0E3338] mb-6 tracking-tight">The Challenge</h2>
                  <div className="w-24 h-1.5 bg-[#14b8a6] mb-10 rounded-full"></div>
                  <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
                    <p>
                      Muscle degradation affects millions worldwide — from athletes recovering from injury to elderly individuals facing age-related decline, and patients experiencing extended periods of reduced mobility.
                    </p>
                    <p>
                      Current rehabilitation methods are limited in effectiveness, leaving countless people struggling to regain their strength, independence, and quality of life. The gap between injury and full recovery continues to widen as our population ages.
                    </p>
                  </div>
               </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
               <div className="relative group">
                  {/* Image Container */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#14b8a6] to-purple-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop" 
                    alt="Biomedical network and cell structure" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square"
                  />
               </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* 4. Our Vision */}
      <section className="py-24 px-6 lg:px-8 max-w-5xl mx-auto text-center bg-white">
         <RevealOnScroll>
           <h2 className="text-4xl md:text-5xl font-bold text-[#0E3338] mb-6 tracking-tight">Our Vision</h2>
           <div className="w-24 h-1.5 bg-pink-500 mx-auto mb-10 rounded-full"></div>
           <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto font-light">
              We envision a world where recovery is not just possible — it's inevitable. Through groundbreaking research in biomedical engineering and human performance science, Hyprova is developing transformative technologies that will redefine how we approach muscle health, rehabilitation, and longevity.
           </p>
         </RevealOnScroll>
      </section>

      {/* 5. Based in Eindhoven */}
      <section className="py-24 bg-[#0E3338] text-center">
         <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Based in Eindhoven</h2>
              <div className="w-24 h-1.5 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
                 Hyprova is proudly based in Eindhoven, Netherlands — a thriving hub of innovation and biomedical research. Our location positions us at the heart of European biotechnology, surrounded by world-class research institutions, cutting-edge healthcare facilities, and a collaborative ecosystem dedicated to advancing human health.
              </p>
            </RevealOnScroll>
         </div>
      </section>
    </div>
  );
};

export default About;