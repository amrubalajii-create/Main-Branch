import React from 'react';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const ImpactCard: React.FC<{
  title: string;
  colorClass: string;
  description: string;
}> = ({ title, colorClass, description }) => (
  <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm h-full">
    <div className={`w-16 h-16 rounded-xl ${colorClass} mb-6`}></div>
    <h3 className="text-xl font-bold text-[#0E3338] mb-4">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Impact: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0E3338] w-full">
         <HeaderBackground />
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Societal Impact</h1>
              <div className="w-24 h-1.5 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Creating meaningful change for individuals and communities
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our work extends far beyond the laboratory. Hyprova's innovations have the potential to transform healthcare systems, empower vulnerable populations, and redefine how society approaches aging, recovery, and human longevity.
          </p>
        </RevealOnScroll>
      </section>

      {/* Impact Cards Grid */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll delay={0} className="h-full">
            <ImpactCard 
              title="Empowering Independence"
              colorClass="bg-cyan-50"
              description="Enabling elderly individuals and those with limited mobility to maintain their independence, prevent muscle decline, and improve overall quality of life. By preserving muscle function, we help people stay active, engaged, and autonomous in their daily lives."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="h-full">
            <ImpactCard 
              title="Reducing Healthcare Burden"
              colorClass="bg-teal-50"
              description="Supporting active aging and accelerating recovery to reduce long-term healthcare costs and minimize the burden on medical systems worldwide. Preventive muscle health interventions can dramatically lower hospitalization rates and improve patient outcomes."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={300} className="h-full">
            <ImpactCard 
              title="Extending Healthy Lifespans"
              colorClass="bg-pink-50"
              description="Pioneering research that extends not just lifespan, but healthspan — ensuring people can live longer, stronger, and more fulfilling lives. Our technologies aim to compress morbidity and maximize years of vibrant, healthy living."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Future Without Limits Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <RevealOnScroll>
             <h2 className="text-4xl font-bold text-[#0E3338] mb-6">A Future Without Limits</h2>
             <div className="w-24 h-1 bg-cyan-400 mx-auto mb-10 rounded-full"></div>
             <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
               <p>
                 Hyprova's vision extends beyond treating muscle loss — we're working toward a future where physical decline is no longer inevitable. By combining cutting-edge biomedical technology with accessible, user-friendly solutions, we aim to democratize muscle health and make recovery attainable for everyone, regardless of age, condition, or circumstance.
               </p>
               <p>
                 From clinical settings to home use, from elderly care facilities to space stations, our innovations are designed to create lasting, positive change on a global scale.
               </p>
             </div>
           </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Impact;