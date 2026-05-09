import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazySection from './components/LazySection';
import ScrollIndicator from './components/ScrollIndicator';
import { useLandingAnimations } from './hooks/useLandingAnimations';
import { Preloader } from './widgets/Preloader';

// Hero/Navbar fold üstünde — eager.
// Alt sectionlar IO tetikleyince dinamik import edilir, chunk ayrı.
const loadWhatIs = () => import('./components/WhatIs');
const loadWhyAttend = () => import('./components/WhyAttend');
const loadAbout = () => import('./components/About');
const loadSpeakers = () => import('./components/Speakers');
const loadPartners = () => import('./components/Partners');
const loadSponsors = () => import('./components/Sponsors');
const loadContact = () => import('./components/Contact');
const loadFooter = () => import('./components/Footer');

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el));
    };
    observeAll();

    // Lazy mount edilen yeni .reveal elemanlarını yakala.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useScrollReveal();
  useLandingAnimations(isLoading);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Fixed global background */}
      <div className="global-bg" aria-hidden="true">
        <div className="global-bg-gradient" />
        <div className="orb orb-1" />
      </div>

      <ScrollIndicator />

      <Navbar />
      <Hero />
      <LazySection load={loadWhatIs} fallbackMinHeight="90vh" />
      <LazySection load={loadWhyAttend} fallbackMinHeight="90vh" />
      <LazySection load={loadAbout} fallbackMinHeight="120vh" />
      <LazySection load={loadSpeakers} fallbackMinHeight="100vh" />
      <LazySection load={loadPartners} fallbackMinHeight="60vh" />
      <LazySection load={loadSponsors} fallbackMinHeight="80vh" />
      <LazySection load={loadContact} fallbackMinHeight="60vh" />
      <LazySection load={loadFooter} fallbackMinHeight="40vh" />
    </>
  );
}
