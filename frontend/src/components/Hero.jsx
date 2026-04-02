import { useState, useEffect } from 'react';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import './Hero.css';

const EVENT_DATE = new Date('2025-10-15T09:00:00');

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
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="hero" id="anasayfa">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          HSD İnönü Topluluğu
        </div>

        <h1 className="hero-title">
          <span className="hero-title-word">DOĞU </span>
          <span className="hero-title-word">ANADOLU</span>
          <span className="hero-title-accent">ZİRVESİ</span>
        </h1>

        <p className="hero-date">
          <FiCalendar style={{ verticalAlign: 'middle', marginRight: 8 }} />
          <strong>15 Ekim 2025</strong> &bull; İnönü Üniversitesi, Malatya
        </p>

        <div className="countdown">
          {[
            { value: timeLeft.days, label: 'Gün' },
            { value: timeLeft.hours, label: 'Saat' },
            { value: timeLeft.minutes, label: 'Dakika' },
            { value: timeLeft.seconds, label: 'Saniye' },
          ].map(item => (
            <div className="countdown-item" key={item.label}>
              <div className="countdown-number">{pad(item.value)}</div>
              <div className="countdown-label">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="hero-slogan">
          Teknoloji, inovasyon ve girişimcilik zirvesine hazır mısınız?
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Kayıt Ol <FiArrowRight />
          </button>
          <a href="#hakkimizda" className="btn-ghost">
            Keşfet
          </a>
        </div>
      </div>

    </section>
  );
}
