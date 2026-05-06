import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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

/* ─── Timeline wrapper with id for anchor nav ─── */
function TimelineWrapper() {
  return (
    <div id="timeline" className="timeline-section">
      <Timeline />
    </div>
  );
}

/* ─── App ─── */
function App() {
  useScrollReveal();

  return (
    <>
      {/* Fixed chrome */}
      <ScrollProgress />
      <Navbar />

      {/* Background glow */}
      <div className="bg-glow" />

      <main>
        <Hero />
        <Skills />
        <CrewControl />
        <OtherProjects />
        <TimelineWrapper />
        <Contact />
      </main>

      <footer style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--glass-border)',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Matías Carvacho. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/Guonejo"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/matias-carvacho"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-yellow)')}
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

export default App;
