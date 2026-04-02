import { PiMapPinDuotone, PiEnvelopeDuotone, PiPhoneDuotone } from 'react-icons/pi';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="iletisim">
      {/* Background Map */}
      <div className="contact-map-bg">
        <iframe
          title="İnönü Üniversitesi Harita"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.7!2d38.325!3d38.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407f5dc02e5dc36d%3A0x9c2b3a9e7c8b4d2a!2s%C4%B0n%C3%B6n%C3%BC%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-overlay"></div>
      </div>

      <div className="container">
        <div className="contact-floating-panel reveal">
          <div className="contact-header">
            <h2 className="panel-title">BİZE ULAŞIN<span>.</span></h2>
            <p className="panel-subtitle">
              Doğu Anadolu Zirvesi hakkında her türlü soru ve öneriniz 
              için bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon"><PiMapPinDuotone /></div>
              <div className="contact-item-text">
                <h4>Adres</h4>
                <p>İnönü Üniversitesi, Merkez Kampüs<br />Battalgazi / Malatya</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><PiEnvelopeDuotone /></div>
              <div className="contact-item-text">
                <h4>E-posta</h4>
                <p>info@doguanadoluzirvesi.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon"><PiPhoneDuotone /></div>
              <div className="contact-item-text">
                <h4>Telefon</h4>
                <p>+90 (422) 000 00 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
