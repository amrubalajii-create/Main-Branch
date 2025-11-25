import React from 'react';
import { 
  IconHeart, 
  IconUsers, 
  IconRocket, 
  IconDumbbell, 
  IconWheelchair, 
  IconMicroscope, 
  IconHome, 
  IconShield 
} from './Icons';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const ApplicationCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  useCase: string;
  purpose: string;
  benefit: string;
}> = ({ title, icon, useCase, purpose, benefit }) => (
  <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow h-full">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0">
        <div className="text-cyan-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#0E3338] mt-2 leading-tight">{title}</h3>
    </div>
    
    <div className="space-y-4">
      <div>
        <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider block mb-1">Use Case</span>
        <p className="text-slate-700 text-sm leading-relaxed">{useCase}</p>
      </div>
      <div>
        <span className="text-pink-400 font-bold text-sm uppercase tracking-wider block mb-1">Purpose</span>
        <p className="text-slate-700 text-sm leading-relaxed">{purpose}</p>
      </div>
      <div>
        <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider block mb-1">Benefit</span>
        <p className="text-slate-700 text-sm leading-relaxed">{benefit}</p>
      </div>
    </div>
  </div>
);

const Applications: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0E3338] w-full">
         <HeaderBackground />
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Applications</h1>
              <div className="w-24 h-1.5 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Transforming recovery across multiple fields
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our innovative biomedical technologies serve diverse applications across healthcare, research, sports, and space exploration.
          </p>
        </RevealOnScroll>
      </section>

      {/* Applications Grid */}
      <section className="pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevealOnScroll delay={0} className="h-full">
            <ApplicationCard 
              title="Rehabilitation & Physical Therapy"
              icon={<IconHeart className="w-8 h-8" />}
              useCase="Assisting patients recovering from injury, surgery, or immobilization (e.g., after fractures or joint replacements)."
              purpose="To help preserve or rebuild muscle strength in patients unable to perform full voluntary exercise."
              benefit="Accelerates recovery timelines, maintains muscle tone, and reduces risk of atrophy."
            />
          </RevealOnScroll>
          
          <RevealOnScroll delay={100} className="h-full">
            <ApplicationCard 
              title="Elderly Muscle Maintenance"
              icon={<IconUsers className="w-8 h-8" />}
              useCase="Supporting older adults experiencing sarcopenia (age-related muscle loss)."
              purpose="To stimulate muscle tissue safely and non-invasively, promoting strength and mobility."
              benefit="Encourages independent living, lowers fall risk, and enhances quality of life."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0} className="h-full">
            <ApplicationCard 
              title="Space Physiology & Microgravity Research"
              icon={<IconRocket className="w-8 h-8" />}
              useCase="Maintaining muscle mass in astronauts or subjects under prolonged microgravity conditions."
              purpose="To counteract muscle atrophy where regular resistance training is limited."
              benefit="Supports long-duration spaceflight and physiological health during missions."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="h-full">
            <ApplicationCard 
              title="Sports Recovery & Conditioning"
              icon={<IconDumbbell className="w-8 h-8" />}
              useCase="Helping athletes during recovery periods or low-activity phases."
              purpose="To stimulate muscle adaptation and enhance hypertrophic signaling between training sessions."
              benefit="Faster recovery, reduced soreness, and improved performance readiness."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0} className="h-full">
            <ApplicationCard 
              title="Assistive Rehabilitation for Mobility-Limited Individuals"
              icon={<IconWheelchair className="w-8 h-8" />}
              useCase="Benefiting patients with neuromuscular conditions, post-stroke deficits, or partial paralysis."
              purpose="To provide localized muscle stimulation in cases of limited voluntary control."
              benefit="Prevents disuse atrophy, aids neural reactivation, and supports gradual mobility restoration."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="h-full">
            <ApplicationCard 
              title="Clinical Research & Physiology Studies"
              icon={<IconMicroscope className="w-8 h-8" />}
              useCase="Used as a research tool in universities, hospitals, and labs studying muscle growth, recovery, or stimulation mechanisms."
              purpose="To provide controlled mechanical and electrical muscle stimulation for experimental or therapeutic analysis."
              benefit="Expands understanding of hypertrophy pathways and rehabilitation methods."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0} className="h-full">
            <ApplicationCard 
              title="Home-Based Recovery Systems"
              icon={<IconHome className="w-8 h-8" />}
              useCase="Safe and easy-to-use home devices for individuals recovering from mild injuries or extended sedentary periods."
              purpose="To make therapeutic stimulation accessible outside clinics."
              benefit="Reduces reliance on in-person therapy, increases adherence, and supports daily muscle maintenance."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="h-full">
            <ApplicationCard 
              title="Preventive Healthcare & Wellness"
              icon={<IconShield className="w-8 h-8" />}
              useCase="Early muscle health interventions in at-risk groups (e.g., sedentary professionals, diabetic patients)."
              purpose="To encourage proactive maintenance of muscle health and metabolism."
              benefit="Reduces long-term risk of metabolic and mobility-related disorders."
            />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Applications;