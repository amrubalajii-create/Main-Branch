import React from 'react';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const TeamMember: React.FC<{
  name: string;
  role: string;
  initials: string;
}> = ({ name, role, initials }) => (
  <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center h-full">
    <div className="w-24 h-24 rounded-full bg-cyan-50 flex items-center justify-center mb-6">
      <span className="text-2xl font-bold text-cyan-400">{initials}</span>
    </div>
    <h3 className="text-lg font-bold text-[#0E3338] mb-2">{name}</h3>
    <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide">{role}</p>
    
    {/* Description logic based on role if needed, or static/empty for now based on screenshot */}
    {role === "Co-Founder" && name.includes("Abyann") && (
      <p className="text-slate-500 text-sm mt-4 leading-relaxed">
        Leading Hyprova's vision in biomedical innovation and muscle recovery technology.
      </p>
    )}
    {role === "Co-Founder" && name.includes("Shaurya") && (
      <p className="text-slate-500 text-sm mt-4 leading-relaxed">
        Driving technical innovation in mechanical and electrical stimulation research.
      </p>
    )}
  </div>
);

const Team: React.FC = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0E3338] w-full">
         <HeaderBackground />
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Meet Our Team</h1>
              <div className="w-24 h-1.5 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                The innovators dedicated to advancing muscle health
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-[#0E3338] text-center mb-12">Founders</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RevealOnScroll delay={0}>
            <TeamMember name="Abyann Manikandan" role="Co-Founder" initials="AM" />
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <TeamMember name="Shaurya Asthana" role="Co-Founder" initials="SA" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-[#0E3338] text-center mb-12">Our Team</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RevealOnScroll delay={0}><TeamMember name="Amruth Balaji" role="Website Manager" initials="AB" /></RevealOnScroll>
          <RevealOnScroll delay={100}><TeamMember name="Siddhant Kapoor" role="Programmer/Backup Researcher" initials="SK" /></RevealOnScroll>
          <RevealOnScroll delay={200}><TeamMember name="Shaun Leo" role="Networking Lead" initials="SL" /></RevealOnScroll>
          <RevealOnScroll delay={0}><TeamMember name="Saiyam Kabra" role="Paralegal" initials="SK" /></RevealOnScroll>
          <RevealOnScroll delay={100}><TeamMember name="Akshay Shenoy" role="Lead Technical Manager" initials="AS" /></RevealOnScroll>
          <RevealOnScroll delay={200}><TeamMember name="Akshith Gula" role="Software Release Manager" initials="AG" /></RevealOnScroll>
          <RevealOnScroll delay={0}><TeamMember name="Akshay Shitole" role="Code/App Developer" initials="AS" /></RevealOnScroll>
          <RevealOnScroll delay={100}><TeamMember name="Amayr Ali Mohamed" role="Lead Design and CAD Developer" initials="AM" /></RevealOnScroll>
          <RevealOnScroll delay={200}><TeamMember name="Pranjay Mishra" role="Website Interface Designer" initials="PM" /></RevealOnScroll>
          <RevealOnScroll delay={0}><TeamMember name="Samarth Deshpande" role="Human Resources" initials="SD" /></RevealOnScroll>
          <RevealOnScroll delay={100}><TeamMember name="Samanyu RC" role="Human Resources" initials="SR" /></RevealOnScroll>
          <RevealOnScroll delay={200}><TeamMember name="Sourin Das" role="Researcher" initials="SD" /></RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Team;