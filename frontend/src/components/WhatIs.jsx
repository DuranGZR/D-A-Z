import { useState } from 'react';
import { PiBookOpenDuotone, PiUsersThreeDuotone, PiTrendUpDuotone, PiCaretDownBold } from 'react-icons/pi';
import './WhatIs.css';

const cards = [
  {
    icon: <PiBookOpenDuotone />,
    
    text: 'HSD İnönü Topluluğu tarafından düzenlenen Doğu Anadolu Zirvesi, yalnızca bir etkinlik değil; bölgenin teknoloji ve girişimcilik anlamında sahip olduğu büyük potansiyelin görünür kılınmasına yönelik stratejik bir adımdır. Bu zirve, yerel dinamiklerin ulusal ve küresel teknoloji trendleriyle buluştuğu, gençlerin ilham aldığı ve kendine yol çizdiği bir platform olmayı amaçlamaktadır.',
  },
  {
    icon: <PiUsersThreeDuotone />,
    
    text: 'Bölgemizdeki üniversite öğrencileri, özellikle yazılım ve mühendislik alanlarında büyük bir gelişim isteği içindedir ancak sektörle doğrudan temas edebilecekleri fırsatlar oldukça sınırlıdır. Bu noktada, alanında öncü ve vizyoner isimlerin katılımı, yalnızca bilgi paylaşımı anlamına gelmeyecek; aynı zamanda gençlerin kariyer motivasyonunu, girişimcilik hayallerini ve teknolojik üretkenliklerini tetikleyecektir.',
  },
  {
    icon: <PiTrendUpDuotone />,
    
    text: 'Davet edeceğimiz konuşmacıların bilgi birikimi ve deneyimleri, İnönü Üniversitesi başta olmak üzere bölgedeki tüm gençler için yol gösterici nitelikte olacaktır. Katılımlarıyla, sadece bir etkinliğe değil, aynı zamanda bölgesel bir dönüşüm hareketine katkı sağlamış olacaklardır.',
  },
];

export default function WhatIs() {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleAccordion = (index) => {
    
    if (window.innerWidth <= 768) {
      setActiveIndex(activeIndex === index ? -1 : index);
    }
  };

  return (
    <section className="whatis" id="nedir">
      <div className="container">
        <h2 className="section-title reveal">
          Doğu Anadolu Zirvesi <span>Nedir?</span>
        </h2>
        <p className="section-subtitle reveal">
          Bölgenin en büyük teknoloji ve girişimcilik buluşması
        </p>

        <div className="whatis-cards">
          {cards.map((card, i) => (
            <div className={`whatis-card reveal visible ${activeIndex === i ? 'active' : ''}`} key={i}>
              <div className="whatis-card-header" onClick={() => toggleAccordion(i)}>
                <div className="whatis-card-icon">{card.icon}</div>
                <h3 className="whatis-card-title">{card.title}</h3>
                <div className="whatis-card-toggle">
                  <PiCaretDownBold />
                </div>
              </div>
              <div className="whatis-card-content">
                <div className="whatis-card-content-inner">
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
