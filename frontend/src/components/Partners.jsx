import './Partners.css';

const partners = [
  { name: 'Büyükşehir Belediyesi', image: '/logo/malatyabüyüksehir.jpeg' },
  { name: 'İnönü Üniversitesi', image: '/logo/inönüv2.png' },
  { name: 'Malatya Turgut Özal Üniversitesi', image: '/logo/turgutözallogo.png' },
  { name: 'Fırat Üniversitesi', image: '/logo/fıratlogo.png' },
  { name: 'Yeşilyurt Kent Konseyi', image: '/logo/yesilyurtkentkonseyi.png' }
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
