import './Sponsors.css';

const tiers = [
  {
    label: 'Ana Sponsor',
    tier: 'gold',
    items: [
      { name: 'Teknokent', image: '/teknokent.jpeg' },
      { name: 'Matris', image: '/matris.png' },
      { name: 'Matris Koç', image: '/matriskoç.png' }
    ],
  },
  {
    label: 'Gümüş Sponsor',
    tier: 'silver',
    items: [
      { name: 'English Time', image: '/int.png' }
    ],
  },
  {
    label: 'Bronz Sponsor',
    tier: 'bronze',
    items: [
      { name: 'Balta Burger', image: '/baltaburger.png' },
      { name: 'Malatya Büyükşehir Belediyesi', image: '/malatyabüyükşehir.jpeg' },
      { name: 'Neovista', image: '/neovista.jpeg' },
      { name: 'Mahzen', image: '/mahzen.jpg' },
      { name: 'Vefa Bozacısı', image: '/vefabozacısı.png' },
      { name: 'Kahve Dünyası', image: '/kahvedünyası.jpg' },
      { name: 'Bosch', image: '/bosch.jpg' },
      { name: 'Enjoy Bowling', image: '/enjoybowling.jpg' }
    ],
  },
];

export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsorlar">
      <div className="container">
        <h2 className="section-title reveal">
          Sponsorlar
        </h2>
        <p className="section-subtitle reveal">
          Etkinliğimize destek veren değerli sponsorlarımız
        </p>

        <div className="sponsors-tiers">
          {tiers.map((tier) => (
            <div key={tier.label} className="reveal">
              <div className="sponsor-tier-label">{tier.label}</div>
              <div className="sponsor-tier-grid">
                {tier.items.map((sponsor, i) => (
                  <div className={`sponsor-item ${tier.tier}`} key={i} title={sponsor.name}>
                    <img src={sponsor.image} alt={sponsor.name} className="sponsor-img" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sponsors-cta reveal">
          <p>Sponsor olmak ister misiniz?</p>
          <a href="#iletisim" className="btn-ghost">
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
}
