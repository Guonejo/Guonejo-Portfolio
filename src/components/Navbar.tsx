import { useEffect, useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { useTranslation, useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const t = useTranslation();
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <Terminal size={18} className="gradient-text" />
          <span className="navbar__logo-text">MC</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {t.navbar.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            <span className={lang === 'es' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>ES</span>
            <span className="lang-toggle__divider">·</span>
            <span className={lang === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
          </button>

          {/* CTA */}
          <a href="#contact" className="btn btn-primary navbar__cta">
            {t.navbar.cta}
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        {t.navbar.links.map((link) => (
          <a key={link.href} href={link.href} className="navbar__drawer-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        {/* Language toggle in drawer */}
        <button
          className="lang-toggle"
          onClick={() => { toggleLang(); closeMenu(); }}
          style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}
          aria-label="Switch language"
        >
          <span className={lang === 'es' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>ES</span>
          <span className="lang-toggle__divider">·</span>
          <span className={lang === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
        </button>
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }} onClick={closeMenu}>
          {t.navbar.cta}
        </a>
      </div>
    </nav>
  );
}
