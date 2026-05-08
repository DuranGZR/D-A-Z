import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { href: '#nedir', label: 'Nedir?' },
  { href: '#neden', label: 'Neden Katılmalı' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#konusmacilar', label: 'Konuşmacılar' },
  { href: '#paydaslar', label: 'Paydaşlar' },
  { href: '#sponsorlar', label: 'Sponsorlar' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="anasayfa">
      <div className="container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/HSD-Beyaz-Logo.png" alt="Huawei Student Developers Logo" className="navbar-logo-img" />
        </div>

        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Tema değiştir"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="navbar-menu-backdrop"
          aria-label="Menüyü kapat"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="navbar-glass-border" />
    </nav>
  );
}
