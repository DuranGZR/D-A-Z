import { FiUser } from 'react-icons/fi';
import './Speakers.css';

const speakers = [
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Teknoloji', 'Geliştirici İlişkileri', 'Liderlik'],
    bio: 'Huawei\'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, teknoloji geliştirme süreçleri ve yazılım ekosistemleri üzerine bilgi ve deneyimlerini aktaracak.',
    image: '/kg.png',
  },
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Teknoloji', 'Geliştirici İlişkileri', 'Liderlik'],
    bio: 'Huawei\'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, teknoloji geliştirme süreçleri ve yazılım ekosistemleri üzerine bilgi ve deneyimlerini aktaracak.',
    image: '/kg.png',
  },
  {
    name: 'Kübra Bilgiç',
    title: 'Developer Relations Manager @ Huawei',
    tags: ['Teknoloji', 'Geliştirici İlişkileri', 'Liderlik'],
    bio: 'Huawei\'de Developer Relations Manager olarak görev yapan Kübra Bilgiç, teknoloji geliştirme süreçleri ve yazılım ekosistemleri üzerine bilgi ve deneyimlerini aktaracak.',
    image: '/kg.png',
  },
];

export default function Speakers() {
  return (
    <section className="speakers" id="konusmacilar">
      <div className="container">
        <h2 className="section-title reveal">
          Konuşmacılar
        </h2>
        <p className="section-subtitle reveal">
          Alanında uzman isimler deneyimlerini paylaşıyor
        </p>

        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div className="speaker-card reveal" key={i}>
              {/* Speaker Background/Image */}
              <div className="speaker-image-wrapper">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-base)' }}
                    className="speaker-real-image"
                  />
                ) : (
                  <>
                    <div className="speaker-image-bg"></div>
                    <FiUser className="speaker-image-placeholder" />
                  </>
                )}
              </div>

              {/* Floating Glass Panel */}
              <div className="speaker-glass-panel">
                <div className="speaker-glass-content">
                  <h3 className="speaker-name">{s.name}</h3>
                  <p className="speaker-title">{s.title}</p>
                  <div className="speaker-tags">
                    {s.tags.map(tag => (
                      <span className="speaker-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="speaker-bio-wrapper">
                    <p className="speaker-bio">{s.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="speakers-coming reveal">
          ✦ Daha fazla konuşmacı yakında duyurulacaktır
        </p>
      </div>
    </section>
  );
}
