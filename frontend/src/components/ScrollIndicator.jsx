import { useEffect, useState } from 'react';
import { PiCaretDownThin } from 'react-icons/pi';
import './ScrollIndicator.css';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let nedirTop = 0;
    let hakkimizdaTop = 0;
    let cached = false;
    let raf = 0;

    // Layout shift olmadıkça document-relative offset'ler sabit — bir kez ölç, cache.
    // Lazy section'lar mount oldukça resize observer ile yenilenir.
    const measure = () => {
      const nedirEl = document.getElementById('nedir');
      const hakkimizdaEl = document.getElementById('hakkimizda');
      if (!nedirEl || !hakkimizdaEl) {
        cached = false;
        return false;
      }
      nedirTop = nedirEl.getBoundingClientRect().top + window.scrollY;
      hakkimizdaTop = hakkimizdaEl.getBoundingClientRect().top + window.scrollY;
      cached = true;
      return true;
    };

    const compute = () => {
      raf = 0;
      if (!cached && !measure()) return;
      const scrollY = window.scrollY;
      const wh = window.innerHeight;
      const visible = scrollY >= (nedirTop - wh / 3) && scrollY < (hakkimizdaTop - wh / 2);
      setIsVisible(visible);
    };

    // rAF throttle — scroll event saniyede 60+ kez tetikleniyor, frame başına 1'e düşür.
    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Section'lar lazy mount ediliyor → DOM'da ID ortaya çıkana kadar tekrar dene.
    let attempts = 0;
    const tryMeasure = () => {
      if (measure()) {
        compute();
      } else if (attempts++ < 20) {
        setTimeout(tryMeasure, 250);
      }
    };
    tryMeasure();

    // Lazy mount sonrası layout değişimleri için resize/orient.
    const onResize = () => { cached = false; handleScroll(); };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
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
