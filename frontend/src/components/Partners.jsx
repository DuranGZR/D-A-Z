import './Partners.css';

const partners = [
  { name: 'İnönü Üniversitesi', image: '/inönü.png' },
  { name: 'HSD İnönü', image: '/inönü.png' },
  { name: 'Paydaş 1', image: '/inönü.png' },
  { name: 'Paydaş 2', image: '/inönü.png' },
  { name: 'Paydaş 3', image: '/inönü.png' },
  { name: 'Paydaş 4', image: '/inönü.png' },
];

export default function Partners() {
  
  const track = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="partners" id="paydaslar">
      <div className="container">
        <h2 className="section-title reveal">
          Paydaşlar
        </h2>
        <p className="section-subtitle reveal">
          Bu zirveyi birlikte gerçekleştiriyoruz
        </p>
      </div>

      <div className="marquee reveal">
        <div className="marquee-track">
          {track.map((partner, i) => (
            <div className="partner-item" key={i} title={partner.name}>
              <img src={partner.image} alt={partner.name} className="partner-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
