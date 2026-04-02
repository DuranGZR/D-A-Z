import { useEffect, useRef, useState } from 'react';
import { PiTargetDuotone, PiEyeDuotone, PiBookOpenTextDuotone, PiUsersDuotone, PiGlobeHemisphereEastDuotone } from 'react-icons/pi';
import './About.css';

const stats = [
  { value: 10, suffix: '+', label: 'Konuşmacı' },
  { value: 500, suffix: '+', label: 'Katılımcı' },
  { value: 8, suffix: '+', label: 'Oturum' },
  { value: 1, suffix: '', label: 'Gün' },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <div className="stat-number" ref={ref}>{count}{suffix}</div>;
}

export default function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="container">
        <h2 className="section-title reveal">
          Hakkımızda
        </h2>
        <p className="section-subtitle reveal">
          Doğu Anadolu Zirvesi, bölgenin teknoloji ve girişimcilik potansiyelini
          gün yüzüne çıkarmak için tasarlandı.
        </p>

        {/* Mission & Vision */}
        <div className="about-mv-grid">
          <div className="about-mv-card reveal">
            <div className="about-mv-icon"><PiTargetDuotone /></div>
            <h3>Misyonumuz</h3>
            <p>
              Doğu Anadolu Bölgesi'nin teknoloji ve girişimcilik potansiyelini ortaya
              çıkarmak, genç yetenekleri desteklemek ve bölgesel kalkınmaya katkıda
              bulunmak için yenilikçi bir platform oluşturmak.
            </p>
          </div>
          <div className="about-mv-card reveal">
            <div className="about-mv-icon"><PiEyeDuotone /></div>
            <h3>Vizyonumuz</h3>
            <p>
              Doğu Anadolu'yu teknoloji ve inovasyonun merkezi haline getirmek, genç
              girişimcilere ilham vermek ve bölgenin dijital dönüşümüne öncülük etmek.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="about-info-grid">
          <div className="about-info-card reveal">
            <div className="info-icon-wrapper"><PiBookOpenTextDuotone className="info-icon" /></div>
            <h4>Üniversitemiz</h4>
            <p>
              İnönü Üniversitesi'nin geniş akademik kapasitesiyle düzenlenen bu zirve,
              bölgedeki en büyük teknoloji etkinliklerinden biri olmayı hedefliyor.
            </p>
          </div>
          <div className="about-info-card reveal">
            <div className="info-icon-wrapper"><PiUsersDuotone className="info-icon" /></div>
            <h4>Hedef Kitlemiz</h4>
            <p>
              Bölgemizdeki üniversite öğrencileri, yazılım ve mühendislik alanlarında
              büyük bir gelişim isteği içindedir. Bu zirve onlara sektörle tanışma
              fırsatı sunuyor.
            </p>
          </div>
          <div className="about-info-card reveal">
            <div className="info-icon-wrapper"><PiGlobeHemisphereEastDuotone className="info-icon" /></div>
            <h4>Etki Alanımız</h4>
            <p>
              Konuşmacıların bilgi birikimi ve deneyimleri, bölgedeki tüm gençler için
              yol gösterici nitelikte olacaktır. Sadece bir etkinlik değil, bölgesel bir
              dönüşüm hareketi.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map(stat => (
            <div className="stat-item reveal" key={stat.label}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
