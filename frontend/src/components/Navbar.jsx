import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeMenu = () => setMenuOpen(false);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('scroll', closeMenu, { passive: true });
    window.addEventListener('resize', closeMenu);
    window.addEventListener('hashchange', closeMenu);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('resize', closeMenu);
      window.removeEventListener('hashchange', closeMenu);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-track">
        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
          type="button"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-pill${scrolled ? ' is-active' : ''}`}>
          <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            ))}
          </div>
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
    </nav>
  );
}
