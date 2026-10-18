import { useEffect, useRef, useState } from 'react';
import { LanguageProvider, useLanguage, useTranslation } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CrewControl } from './components/CrewControl';
import { OtherProjects } from './components/OtherProjects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/* ─── Scroll Progress Bar ─── */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = barRef.current;
      if (!el) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      el.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={barRef} className="scroll-progress" />;
}

/* ─── IntersectionObserver for scroll-reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Main content with lang-fade ─── */
function MainContent() {
  useScrollReveal();
  const { lang } = useLanguage();
  const t = useTranslation();
  const [visible, setVisible] = useState(true);
  const prevLang = useRef(lang);

  useEffect(() => {
    if (prevLang.current !== lang) {
      setVisible(false);
      const timer = setTimeout(() => {
        setVisible(true);
        prevLang.current = lang;
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [lang]);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="bg-glow" />

      <main style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.18s ease' }}>
        <Hero />
        <About />
        <Skills />
        <CrewControl />
        <OtherProjects />
        <Timeline />
        <Contact />
      </main>

      <footer style={{
        padding: '2.5rem 0',
        borderTop: '1px solid var(--glass-border)',
        background: 'rgba(8, 7, 14, 0.7)',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Matías Carvacho. {t.footer.rights}
          </span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a
              href="https://github.com/Guonejo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/matias-carvacho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── App ─── */
function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
