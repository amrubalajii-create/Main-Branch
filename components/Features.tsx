import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E3338] mb-6 tracking-tight">
              Transforming Muscle Health Science
            </h2>
            {/* Mint underline */}
            <div className="w-24 h-1 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>

            <p className="text-xl text-slate-700 leading-relaxed">
              At Hyprova Research in BioTechnologies, we're developing innovative biomedical solutions to tackle muscle degradation, accelerate recovery, and extend healthy lifespans. Based in Eindhoven, Netherlands, we're at the forefront of European biomedical innovation.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <RevealOnScroll delay={100} className="h-full">
            <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all text-center group h-full">
              <h3 className="text-2xl font-bold text-[#0E3338] mb-4 group-hover:text-[#14b8a6] transition-colors">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Advancing muscle health through science-backed innovation
              </p>
            </div>
          </RevealOnScroll>

          {/* Card 2 */}
          <RevealOnScroll delay={200} className="h-full">
            <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all text-center group h-full">
              <h3 className="text-2xl font-bold text-[#0E3338] mb-4 group-hover:text-[#14b8a6] transition-colors">8 Applications</h3>
              <p className="text-slate-600 leading-relaxed">
                From rehabilitation to space research and beyond
              </p>
            </div>
          </RevealOnScroll>

          {/* Card 3 */}
          <RevealOnScroll delay={300} className="h-full">
            <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all text-center group h-full">
              <h3 className="text-2xl font-bold text-[#0E3338] mb-4 group-hover:text-[#14b8a6] transition-colors">Global Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Empowering independence and extending healthy lifespans
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Features;