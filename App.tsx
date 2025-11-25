import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import AiAssistant from './components/AiAssistant';
import Applications from './components/Applications';
import Impact from './components/Impact';
import Updates from './components/Updates';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Features />
          </>
        )}
        {currentPage === 'about' && (
          <About />
        )}
        {currentPage === 'applications' && (
          <Applications />
        )}
        {currentPage === 'impact' && (
          <Impact />
        )}
        {currentPage === 'updates' && (
          <Updates />
        )}
        {currentPage === 'team' && (
          <Team />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
        {currentPage === 'ai-assistant' && (
          <AiAssistant />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;