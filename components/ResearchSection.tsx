import React from 'react';
import StatsChart from './StatsChart';

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4">
              Data-Driven
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Exponential growth in <br/>
              <span className="text-teal-600">candidate identification</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              By automating the preliminary screening of molecular structures, Hyprova allows researchers to focus on high-probability candidates. Our internal benchmarks show a 500% increase in discovery velocity after 6 months of integration.
            </p>
            
            <ul className="space-y-4">
              {[
                "Real-time validation of structural integrity",
                "Automated toxicity prediction",
                "Cross-referencing with 50M+ published papers"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-blue-100 transform rotate-3 rounded-3xl -z-10 blur-sm"></div>
            <StatsChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
