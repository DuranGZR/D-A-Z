import { PiMicrophoneStageDuotone, PiUsersThreeDuotone, PiSparkleDuotone, PiCertificateDuotone } from 'react-icons/pi';

const reasons = [
  {
    icon: <PiMicrophoneStageDuotone />,
    title: 'Uzman Konuşmacılar',
    desc: 'Alanında öncü isimlerden yapay zeka, yazılım ve girişimcilik üzerine ilham verici konuşmalar.',
  },
  {
    icon: <PiUsersThreeDuotone />,
    title: 'Networking',
    desc: 'Akademisyenler, sektör temsilcileri ve öğrencilerle tanışma ve iş birliği fırsatını yakalayın.',
  },
  {
    icon: <PiSparkleDuotone />,
    title: 'İlham Verici İçerik',
    desc: 'Teknoloji dünyasındaki yenilikçi projeler ve uygulamalar hakkında derinlemesine bilgi edinin.',
  },
  {
    icon: <PiCertificateDuotone />,
    title: 'Sertifika Kazanın',
    desc: 'Doğu Anadolu Zirvesi katılımınızdan ötürü adınıza özel hazırlanmış sertifika kazanın.',
  },
];

export default function WhyAttend() {
  return (
    <section className="why-attend" id="neden">
      <div className="container">
        <h2 className="section-title reveal">
          Neden <span>Katılmalısınız?</span>
        </h2>
        <p className="section-subtitle reveal">
          Bu zirve size neler kazandıracak?
        </p>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card glass-card reveal" key={i}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
