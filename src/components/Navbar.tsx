import { useEffect, useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { useTranslation, useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const t = useTranslation();
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['crewcontrol', 'projects', 'about', 'timeline', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
          {t.navbar.links.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
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
          aria-label={menuOpen ? (lang === 'es' ? 'Cerrar navegación' : 'Close navigation') : (lang === 'es' ? 'Abrir navegación' : 'Open navigation')}
          aria-expanded={menuOpen}
          aria-controls="navbar-mobile-drawer"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div id="navbar-mobile-drawer" className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        {t.navbar.links.map((link) => {
          const isActive = link.href === `#${activeSection}`;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          );
        })}
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
