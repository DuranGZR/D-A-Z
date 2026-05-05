import { useEffect, useState } from 'react';
import { FiUser, FiX } from 'react-icons/fi';
import './Speakers.css';

const speakers = [
  {
    name: 'Deniz Yalçın',
    title: 'Cloud Engineer @ Vodafone',
    tags: ['Cloud', 'Vodafone', 'Teknoloji'],
    bio: 'Vodafone tarafındaki cloud engineering deneyimleriyle bulut teknolojileri, modern altyapı ve kariyer yolculuğu üzerine içgörüler paylaşacak.',
    image: '/konuşmacı1.jpeg',
  },
  {
    name: 'Betül Gündüz Odabaşı',
    title: 'Eğitim ve Organizasyonel Gelişim Şefi @ İstikbal Mobilya A.Ş / Profesyonel Koç',
    tags: ['Eğitim', 'Organizasyonel Gelişim', 'Koçluk'],
    bio: 'Eğitim, organizasyonel gelişim ve profesyonel koçluk alanlarındaki deneyimleriyle kişisel gelişim ve liderlik üzerine konuşacak.',
    image: '/konuşmacı2.jpeg',
  },
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Developer Relations', 'Topluluk', 'Huawei'],
    bio: "Huawei'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, geliştirici ilişkileri ve topluluk yönetimi üzerine deneyimlerini aktaracak.",
    image: '/konuşmacı3.jpeg',
  },
  {
    name: 'Tuncay Erol',
    title: 'Eğitmen / Yazılım ve Yapay Zeka Öğretmeni',
    tags: ['Yazılım', 'Yapay Zeka', 'Eğitim'],
    bio: 'Yazılım ve yapay zeka eğitimi alanındaki deneyimleriyle teknoloji üretimi, öğrenme süreçleri ve gelecek yetkinlikleri üzerine paylaşım yapacak.',
    image: '/konuşmacı4.jpeg',
  },
];

export default function Speakers() {
  const [activeMobileSpeaker, setActiveMobileSpeaker] = useState(-1);

  const isMobileViewport = () =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

  const handleCardActivate = (index) => {
    if (!isMobileViewport()) return;
    setActiveMobileSpeaker(index);
  };

  const handleCardKeyDown = (event, index) => {
    if (!isMobileViewport()) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    setActiveMobileSpeaker(index);
  };

  const closeMobileSpeaker = () => {
    setActiveMobileSpeaker(-1);
  };

  useEffect(() => {
    if (activeMobileSpeaker === -1) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveMobileSpeaker(-1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeMobileSpeaker]);

  return (
    <section className="speakers" id="konusmacilar">
      <div className="container">
        <h2 className="section-title reveal">Konuşmacılar</h2>
        <p className="section-subtitle reveal">Alanında uzman isimler deneyimlerini paylaşıyor</p>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <article
              className="speaker-card reveal visible"
              key={index}
              onClick={() => handleCardActivate(index)}
              onKeyDown={(event) => handleCardKeyDown(event, index)}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`${speaker.name} detay kartını aç`}
            >
              <div className="speaker-image-wrapper">
                <div className="speaker-image-bg" />
                <FiUser className="speaker-image-placeholder" />
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-base)',
                    }}
                    className="speaker-real-image"
                  />
                ) : null}
              </div>

              <div className="speaker-glass-panel">
                <div className="speaker-glass-content">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-title">{speaker.title}</p>
                  <div className="speaker-tags">
                    {speaker.tags.map((tag) => (
                      <span className="speaker-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="speaker-bio-wrapper">
                    <p className="speaker-bio">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>

      {activeMobileSpeaker !== -1 && (
        <div className="speaker-mobile-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="speaker-mobile-modal-backdrop"
            aria-label="Konuşmacı detayını kapat"
            onClick={closeMobileSpeaker}
          />

          <article className="speaker-mobile-modal-card">
            <button
              type="button"
              className="speaker-mobile-close"
              aria-label="Kapat"
              onClick={closeMobileSpeaker}
            >
              <FiX />
            </button>

            <div className="speaker-mobile-top">
              <div className="speaker-mobile-image">
                <div className="speaker-image-bg" />
                <FiUser className="speaker-image-placeholder" />
                {speakers[activeMobileSpeaker].image ? (
                  <img
                    src={speakers[activeMobileSpeaker].image}
                    alt={speakers[activeMobileSpeaker].name}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                    className="speaker-mobile-real-image"
                  />
                ) : null}
              </div>
              <div className="speaker-mobile-head">
                <h3 className="speaker-name">{speakers[activeMobileSpeaker].name}</h3>
                <p className="speaker-title">{speakers[activeMobileSpeaker].title}</p>
              </div>
            </div>

            <div className="speaker-tags">
              {speakers[activeMobileSpeaker].tags.map((tag) => (
                <span className="speaker-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="speaker-mobile-fullbio">{speakers[activeMobileSpeaker].bio}</p>
          </article>
        </div>
      )}
    </section>
  );
}
