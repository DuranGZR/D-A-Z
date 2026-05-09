import { useEffect, useState } from 'react';
import { PiCaretDownThin } from 'react-icons/pi';
import './ScrollIndicator.css';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nedirEl = document.getElementById('nedir');
      const hakkimizdaEl = document.getElementById('hakkimizda');
      
      if (!nedirEl || !hakkimizdaEl) return;

      // Calculate where the elements are in the document
      const nedirTop = nedirEl.getBoundingClientRect().top + window.scrollY;
      const hakkimizdaTop = hakkimizdaEl.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show when user scrolls past Hero (enters #nedir) 
      // Hide when user reaches #hakkimizda
      if (scrollY >= (nedirTop - windowHeight / 3) && scrollY < (hakkimizdaTop - windowHeight / 2)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${isVisible ? 'visible' : ''}`} aria-hidden="true">
      <span className="scroll-text">KAYDIR</span>
      <div className="scroll-arrows">
        <PiCaretDownThin className="scroll-arrow a1" />
        <PiCaretDownThin className="scroll-arrow a2" />
        <PiCaretDownThin className="scroll-arrow a3" />
      </div>
    </div>
  );
}
