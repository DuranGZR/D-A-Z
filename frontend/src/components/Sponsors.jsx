const tiers = [
  {
    label: 'Ana Sponsorlar',
    tier: 'gold',
    items: [
      { name: 'Yeşilyurt Belediyesi', image: '/logo/yesilyurtbelediyesi.png' },
      { name: 'Malatya Teknokent', image: '/logo/malatyateknokenet.jpg' },
      { name: 'Matris Kurs', image: '/logo/matrislogo.jpg' },
      { name: 'Matris Coach', image: '/logo/matriscoachlogo.png' }
    ],
  },
  {
    label: 'Platinium Sponsorlar',
    tier: 'silver',
    items: [
      { name: 'English Time', image: '/logo/englishtime.jpg' },
      { name: 'Neşve', image: '/logo/nesvekafe.jpeg' },
      { name: 'Doğu Batı Kurs Merkezi', image: '/logo/dogubatıkurs.png' },
      { name: 'Acım Çiğköfte', image: '/logo/acimcigköfte.jpeg' },
      { name: 'ModaDil', image: '/logo/modadil.jpeg' },
      { name: 'Dilcim', image: '/logo/dilcim.jpeg' },
      { name: 'Boston', image: '/logo/bostondd.jpeg' },
      { name: 'MG Hotel', image: '/logo/mghillresidence.jpeg' },
      { name: 'Laser Tag', image: '/logo/lasertag.jpeg' },
      { name: 'Şirehan', image: '/logo/sirehan.jpeg' },
      { name: 'Terra Pizza', image: '/logo/terrapizza.jpeg' },
      { name: 'Luuq', image: '/logo/luuq.jpeg' },
      { name: 'Iceberry', image: '/logo/iceberrycafe.jpeg' },
      { name: 'Fitbull Gym', image: '/logo/fitbullgym.jpeg' },
      { name: 'Mr. Bon', image: '/logo/mrbon.jpeg' }
    ],
  },
  {
    label: 'Gümüş Sponsorlar',
    tier: 'bronze',
    items: [
      { name: 'Kahve Durağı', image: '/logo/kahveduragi.jpeg' },
      { name: 'Vefa Bozacısı', image: '/logo/vefabozacisi.jpeg' },
      { name: 'Enjoy Bowling', image: '/logo/enjoybowling.jpeg' },
      { name: 'Mahzen', image: '/logo/mahzenoyun.jpeg' },
      { name: 'Neo Vista', image: '/logo/neovista.jpeg' },
      { name: 'Game Mood PlayStation Cafe', image: '/logo/gamemood.jpeg' },
      { name: 'Hanedan', image: '/logo/hanedan.jpeg' },
      { name: 'Nar Künefe', image: '/logo/narkünefe.jpeg' },
      { name: 'Murat Örnek', image: '/logo/muratörnek.jpeg' },
      { name: 'Pia Makarna', image: '/logo/piamakarna.jpeg' },
      { name: 'Gülbe Şekerleme', image: '/logo/gülbeseker.jpeg' }
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
