import './Sponsors.css';

const tiers = [
  {
    label: 'Ana Sponsor',
    tier: 'gold',
    items: [
      { name: 'Ana Sponsor 1', image: '/int.png' },
      { name: 'Ana Sponsor 2', image: '/int.png' }
    ],
  },
  {
    label: 'Gümüş Sponsor',
    tier: 'silver',
    items: [
      { name: 'Sponsor 1', image: '/int.png' },
      { name: 'Sponsor 2', image: '/int.png' },
      { name: 'Sponsor 3', image: '/int.png' }
    ],
  },
  {
    label: 'Bronz Sponsor',
    tier: 'bronze',
    items: [
      { name: 'Sponsor 4', image: '/int.png' },
      { name: 'Sponsor 5', image: '/int.png' },
      { name: 'Sponsor 6', image: '/int.png' },
      { name: 'Sponsor 7', image: '/int.png' }
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
