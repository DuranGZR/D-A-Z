import { useEffect, useState } from 'react';
import { FiUser, FiX } from 'react-icons/fi';
import './Speakers.css';

const speakers = [
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Teknoloji', 'Geliştirici İlişkileri', 'Liderlik'],
    bio: "Huawei'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, teknoloji geliştirme süreçleri ve yazılım ekosistemleri üzerine bilgi ve deneyimlerini aktaracak.",
    image: '/kg.png',
  },
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Teknoloji', 'Geliştirici İlişkileri', 'Liderlik'],
    bio: "Huawei'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, teknoloji geliştirme süreçleri ve yazılım ekosistemleri üzerine bilgi ve deneyimlerini aktaracak.",
    image: '/kg.png',
  },
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Teknoloji', 'Geliştirici İlişkileri', 'Liderlik'],
    bio: "Huawei'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, teknoloji geliştirme süreçleri ve yazılım ekosistemleri üzerine bilgi ve deneyimlerini aktaracak.",
    image: '/kg.png',
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
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-base)',
                    }}
                    className="speaker-real-image"
                  />
                ) : (
                  <>
                    <div className="speaker-image-bg" />
                    <FiUser className="speaker-image-placeholder" />
                  </>
                )}
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
                {speakers[activeMobileSpeaker].image ? (
                  <img
                    src={speakers[activeMobileSpeaker].image}
                    alt={speakers[activeMobileSpeaker].name}
                    className="speaker-mobile-real-image"
                  />
                ) : (
                  <>
                    <div className="speaker-image-bg" />
                    <FiUser className="speaker-image-placeholder" />
                  </>
                )}
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
