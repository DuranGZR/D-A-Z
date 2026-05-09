import { useState, useEffect, useRef } from 'react';
import { FiCalendar } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EVENT_DATE = new Date('2026-05-11T10:00:00');
const INITIAL_TIME_LEFT = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_LEFT);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const layerBg = root.querySelector('.hero-layer--bg img');
    const layerMountain = root.querySelector('.hero-layer--mountain img');
    /* Maske img üzerindeyken bazı tarayıcılarda transform uygulanmıyor; parallax bu sarmalayıcıda */
    const layerCloud = root.querySelector('.hero-cloud-parallax');
    const content = root.querySelector('.hero-foreground');
    // Mobile browser toolbar (adres çubuğu) değişimlerinde sürekli refresh kaynaklı jitter'ı azalt
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.25,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      if (layerBg) tl.to(layerBg, { yPercent: -4, scale: 1.025, ease: 'none' }, 0);
      if (layerMountain) {
        /* Bulut yukarı (negatif y%) — dağ ters yönde: aşağı (pozitif y%) */
        tl.to(layerMountain, { yPercent: 4.5, xPercent: -0.15, scale: 1.015, ease: 'none' }, 0);
      }
      if (layerCloud) {
        /* Önceki değerler hâlâ fazla yukarı taşıyordu — kısa ve yumuşak kayma */
        tl.to(
          layerCloud,
          { yPercent: -25, scale: 1.018, force3D: true, ease: 'none' },
          0,
        );
      }
      if (content) tl.to(content, { y: -22, opacity: 0.94, ease: 'none' }, 0);
    }, root);

    const imgs = root.querySelectorAll('.hero-layer img');
    const onImg = () => ScrollTrigger.refresh();
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', onImg, { once: true });
    });
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      imgs.forEach((img) => img.removeEventListener('load', onImg));
      ctx.revert();
    };
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="hero" id="anasayfa" ref={sectionRef}>
      <div className="hero-viewport">
        <div className="hero-layers" aria-hidden="true">
          <div className="hero-layer hero-layer--bg">
            <img
              src="/hero-section-image/arkaplan_katman.png"
              alt=""
              decoding="async"
              draggable={false}
            />
          </div>
          <div className="hero-layer hero-layer--mountain">
            <img
              src="/hero-section-image/dag_katman.png"
              alt=""
              decoding="async"
              draggable={false}
            />
          </div>
          <div className="hero-layer hero-layer--cloud">
            <div className="hero-cloud-parallax">
              <img
                src="/hero-section-image/bulut_katman.png"
                alt=""
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="hero-countdown-stage">
          <div className="hero-countdown-zone">
            <div className="countdown">
              {[
                { value: timeLeft.days, label: 'Gün' },
                { value: timeLeft.hours, label: 'Saat' },
                { value: timeLeft.minutes, label: 'Dakika' },
                { value: timeLeft.seconds, label: 'Saniye' },
              ].map((item) => (
                <div className="countdown-item" key={item.label}>
                  <div className="countdown-number">{pad(item.value)}</div>
                  <div className="countdown-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-foreground">
          <div className="hero-content hero-content--top">
            <a href="#anasayfa" className="hero-logo" aria-label="Anasayfa">
              <img src="/HSD-Beyaz-Logo.png" alt="" width={180} height={73} decoding="async" draggable={false} />
            </a>
            <h1 className="hero-title">
              <span className="hero-title-line">
                <span className="hero-title-word">TEKNOLOJİ</span>
                <span className="hero-title-word">VE</span>
                <span className="hero-title-word">YENİLİK</span>
              </span>
              <span className="hero-title-accent">ZİRVESİ</span>
            </h1>

            <p className="hero-date">
              <span className="hero-date-chalk">
                <FiCalendar className="hero-date-icon" aria-hidden />
                <strong>11 Mayıs 2026</strong> <span className="hero-date-sep">·</span> Kongre ve Kültür Merkezi, Malatya
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
