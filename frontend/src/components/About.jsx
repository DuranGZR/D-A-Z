import { useEffect, useRef, useState } from 'react';
import {
  PiTargetDuotone,
  PiEyeDuotone,
  PiBookOpenTextDuotone,
  PiUsersDuotone,
  PiGlobeHemisphereEastDuotone,
} from 'react-icons/pi';
import './About.css';

const stats = [
  { value: 10, suffix: '+', label: 'Konuşmacı' },
  { value: 500, suffix: '+', label: 'Katılımcı' },
  { value: 8, suffix: '+', label: 'Oturum' },
  { value: 1, suffix: '', label: 'Gün' },
];

const missionVisionItems = [
  {
    icon: PiTargetDuotone,
    title: 'Misyonumuz',
    text: "Doğu Anadolu Bölgesi'nin teknoloji ve girişimcilik potansiyelini ortaya çıkarmak, genç yetenekleri desteklemek ve bölgesel kalkınmaya katkıda bulunmak için yenilikçi bir platform oluşturmak.",
  },
  {
    icon: PiEyeDuotone,
    title: 'Vizyonumuz',
    text: "Doğu Anadolu'yu teknoloji ve inovasyonun merkezi haline getirmek, genç girişimcilere ilham vermek ve bölgenin dijital dönüşümüne öncülük etmek.",
  },
];

const infoItems = [
  {
    icon: PiBookOpenTextDuotone,
    title: 'Üniversitemiz',
    text: "İnönü Üniversitesi'nin geniş akademik kapasitesiyle düzenlenen bu zirve, bölgedeki en büyük teknoloji etkinliklerinden biri olmayı hedefliyor.",
  },
  {
    icon: PiUsersDuotone,
    title: 'Hedef Kitlemiz',
    text: 'Bölgemizdeki üniversite öğrencileri, yazılım ve mühendislik alanlarında büyük bir gelişim isteği içindedir. Bu zirve onlara sektörle tanışma fırsatı sunuyor.',
  },
  {
    icon: PiGlobeHemisphereEastDuotone,
    title: 'Etki Alanımız',
    text: 'Konuşmacıların bilgi birikimi ve deneyimleri, bölgedeki tüm gençler için yol gösterici nitelikte olacaktır. Sadece bir etkinlik değil, bölgesel bir dönüşüm hareketi.',
  },
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
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-number" ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

function MissionVisionMobile({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const ActiveIcon = activeItem.icon;

  const focusTabByIndex = (index, parent) => {
    const nextTab = parent?.querySelector(`#about-mv-tab-${index}`);
    if (nextTab) nextTab.focus();
  };

  const handleTabKeyDown = (event, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();

    const nextIndex =
      event.key === 'ArrowRight'
        ? (index + 1) % items.length
        : (index - 1 + items.length) % items.length;

    setActiveIndex(nextIndex);
    focusTabByIndex(nextIndex, event.currentTarget.parentElement);
  };

  return (
    <div className="about-mv-mobile">
      <div
        className="about-mv-mobile-tabs"
        role="tablist"
        aria-label="Misyon ve vizyon sekmeleri"
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            id={`about-mv-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`about-mv-panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            className={`about-mv-mobile-tab${activeIndex === index ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <article
        id={`about-mv-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`about-mv-tab-${activeIndex}`}
        className="about-mv-mobile-panel glass-card"
      >
        <div className="about-mv-mobile-icon">
          <ActiveIcon />
        </div>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.text}</p>
      </article>
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="container">
        <h2 className="section-title reveal">Hakkımızda</h2>
        <p className="section-subtitle reveal">
          Doğu Anadolu Zirvesi, bölgenin teknoloji ve girişimcilik potansiyelini gün yüzüne
          çıkarmak için tasarlandı.
        </p>

        <MissionVisionMobile items={missionVisionItems} />

        <div className="about-mv-grid">
          {missionVisionItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="about-mv-card reveal" key={item.title}>
                <div className="about-mv-icon">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="about-info-grid">
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="about-info-card reveal" key={item.title}>
                <div className="info-icon-wrapper">
                  <Icon className="info-icon" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
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
