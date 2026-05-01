import { PiEnvelopeDuotone, PiMapPinDuotone } from 'react-icons/pi';
import './Contact.css';

const venueName = 'Malatya Kongre ve Kültür Merkezi';
const mapQuery = encodeURIComponent(venueName);
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const email = 'info@doguanadoluzirvesi.com';

export default function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div className="contact-map-bg">
        <iframe
          title={`${venueName} Harita`}
          src={mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-overlay" />
      </div>

      <div className="container">
        <div className="contact-floating-panel reveal">
          <div className="contact-header">
            <h2 className="panel-title">BİZE ULAŞIN<span>.</span></h2>
            <p className="panel-subtitle">
              Doğu Anadolu Zirvesi hakkında her türlü soru ve öneriniz için bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="contact-actions" aria-label="Hızlı iletişim seçenekleri">
            <a className="contact-action" href={`mailto:${email}`}>
              <PiEnvelopeDuotone />
              <span>Mail Gönder</span>
            </a>
            <a className="contact-action" href={mapsUrl} target="_blank" rel="noreferrer">
              <PiMapPinDuotone />
              <span>Yol Tarifi</span>
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon"><PiMapPinDuotone /></div>
              <div className="contact-item-text">
                <h4>Adres</h4>
                <p>
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    {venueName}<br />Malatya
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><PiEnvelopeDuotone /></div>
              <div className="contact-item-text">
                <h4>E-posta</h4>
                <p><a href={`mailto:${email}`}>{email}</a></p>
              </div>
            </div>
          </div>

          <div className="contact-mobile-map">
            <iframe
              title={`${venueName} Mobil Harita`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Google Maps'te Aç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
