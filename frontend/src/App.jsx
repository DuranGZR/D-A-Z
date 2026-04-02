import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import WhyAttend from './components/WhyAttend';
import About from './components/About';
import Speakers from './components/Speakers';
import Partners from './components/Partners';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <ThemeProvider>
      {/* Fixed global background */}
      <div className="global-bg" aria-hidden="true">
        <div className="global-bg-gradient" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="orb orb-5" />
      </div>

      <Navbar />
      <Hero />
      <WhatIs />
      <WhyAttend />
      <About />
      <Speakers />
      <Partners />
      <Sponsors />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
