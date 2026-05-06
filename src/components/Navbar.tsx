import { useEffect, useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Proyecto', href: '#crewcontrol' },
  { label: 'Skills', href: '#skills' },
  { label: 'Trayectoria', href: '#timeline' },
  { label: 'Contacto', href: '#contact' },
];

export function Navbar() {
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a href="#contact" className="btn btn-primary navbar__cta">
          Contáctame
        </a>

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
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="navbar__drawer-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }} onClick={closeMenu}>
          Contáctame
        </a>
      </div>
    </nav>
  );
}
