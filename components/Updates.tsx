import React from 'react';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const Updates: React.FC = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0E3338] w-full">
         <HeaderBackground />
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Company Updates</h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Stay informed about our latest research breakthroughs and milestones
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* Updates Content */}
      <section className="py-24 px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Update Card */}
        <RevealOnScroll>
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center text-slate-500 text-sm mb-4">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
               </svg>
               November 11, 2025
            </div>
            
            <h2 className="text-2xl font-bold text-[#0E3338] mb-4">Advancing Muscle Health Through Combined Stimulation Research</h2>
            
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                At Hyprova Research Biotechnologies, we are conducting ongoing research into how mechanical and electrical stimulation can be combined to promote muscle growth, recovery, and strength maintenance. Our work aims to address challenges such as muscle atrophy and age-related decline, with the goal of developing safe, effective, and accessible solutions for rehabilitation and long-term muscle health.
              </p>
              <p>
                As we continue to refine our prototype and deepen our research, our focus remains on translating innovative science into technologies that can enhance mobility, independence, and quality of life.
              </p>
            </div>
          </div>
        </RevealOnScroll>

      </section>
    </div>
  );
};

export default Updates;