import React from 'react';
import { IconMail, IconMapPin } from './Icons';
import HeaderBackground from './HeaderBackground';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0E3338] w-full">
         <HeaderBackground />
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Get in Touch</h1>
              <div className="w-24 h-1.5 bg-[#14b8a6] mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Let's discuss how we can collaborate
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-lg text-slate-600 leading-relaxed">
            Interested in learning more about our groundbreaking research and innovations? Whether you're a researcher, clinician, potential partner, or simply curious about our work — we'd love to hear from you.
          </p>
        </RevealOnScroll>
      </section>

      {/* Contact Cards */}
      <section className="pb-24 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email Card */}
          <RevealOnScroll delay={0} className="h-full">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0 mb-6">
                <IconMail className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-[#0E3338] mb-4">Email Us</h3>
              <a 
                href="mailto:hyprovaresearchinbiotechnologi@gmail.com" 
                className="text-cyan-400 font-medium hover:text-cyan-500 transition-colors mb-4 block break-all"
              >
                hyprovaresearchinbiotechnologi@gmail.com
              </a>
              <p className="text-slate-500 text-sm leading-relaxed">
                We typically respond within 1-2 business days
              </p>
            </div>
          </RevealOnScroll>

          {/* Location Card */}
          <RevealOnScroll delay={200} className="h-full">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0 mb-6">
                <IconMapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-[#0E3338] mb-4">Our Location</h3>
              <p className="text-[#0E3338] font-medium mb-4">
                Eindhoven, Netherlands
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                At the heart of European biomedical innovation
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="pb-32 px-6 lg:px-8 max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0E3338] mb-6">Collaboration Opportunities</h2>
            <div className="w-24 h-1 bg-[#14b8a6] mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-12 text-left">
          
          <RevealOnScroll delay={0}>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Research Partnerships</h3>
              <p className="text-slate-700 leading-relaxed">
                We collaborate with universities, research institutions, and hospitals to advance muscle health science and validate our technologies.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Clinical Trials</h3>
              <p className="text-slate-700 leading-relaxed">
                Healthcare professionals interested in participating in clinical studies or deploying our solutions in therapeutic settings.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Investment & Partnerships</h3>
              <p className="text-slate-700 leading-relaxed">
                We welcome discussions with investors, strategic partners, and organizations aligned with our mission to advance human recovery.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Media & Press</h3>
              <p className="text-slate-700 leading-relaxed">
                Journalists and media professionals seeking information about our research, innovations, or company updates.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </section>

    </div>
  );
};

export default Contact;