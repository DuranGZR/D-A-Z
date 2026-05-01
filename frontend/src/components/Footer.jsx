import {
  PiGithubLogoDuotone,
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiTwitterLogoDuotone,
} from 'react-icons/pi';
import './Footer.css';

const quickLinks = [
  { href: '#anasayfa', label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#konusmacilar', label: 'Konuşmacılar' },
  { href: '#paydaslar', label: 'Paydaşlar' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-mega-brand" aria-hidden="true">
          <div className="footer-mega-brand-track">
            <span>DOĞU ANADOLU ZİRVESİ</span>
            <span>DOĞU ANADOLU ZİRVESİ</span>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-description">
              Bölgenin teknoloji ve girişimcilik potansiyelini ortaya çıkarmayı hedefleyen lider
              dijital platform.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><PiInstagramLogoDuotone /></a>
              <a href="#" aria-label="Twitter"><PiTwitterLogoDuotone /></a>
              <a href="#" aria-label="LinkedIn"><PiLinkedinLogoDuotone /></a>
              <a href="#" aria-label="GitHub"><PiGithubLogoDuotone /></a>
            </div>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-links-col">
              <h4 className="footer-heading">Keşfet</h4>
              <div className="footer-links">
                {quickLinks.slice(0, 3).map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-heading">Bağlantılar</h4>
              <div className="footer-links">
                {quickLinks.slice(3).map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-heading">İletişim</h4>
              <div className="footer-links">
                <a href="mailto:info@doguanadoluzirvesi.com" className="footer-mail">
                  info@doguanadoluzirvesi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">© 2025 DAZ. Tüm hakları saklıdır.</span>
          <div className="footer-dev">
            <span className="footer-dev-dot" />
            <span>HUAWEI STUDENT DEVELOPERS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
