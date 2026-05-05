import { Mail, Calendar, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          ¿Hablamos de tu próximo proyecto o infraestructura?
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Estoy disponible para nuevas oportunidades, consultorías o simplemente para hablar sobre tecnología y optimización.
        </p>
        
        <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', textAlign: 'left' }}>
          <a href="mailto:matias.carvachos@gmail.com" className="bento-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '0.5rem', color: 'var(--accent-cyan)' }}>
              <Mail size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Correo Electrónico</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>matias.carvachos@gmail.com</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/matias-carvacho" target="_blank" rel="noreferrer" className="bento-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.5rem', color: 'var(--accent-violet)' }}>
              <FaLinkedin size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>LinkedIn</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>matias-carvacho</p>
            </div>
          </a>

          <a href="https://github.com/Guonejo" target="_blank" rel="noreferrer" className="bento-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ padding: '0.75rem', background: 'var(--glass-border-hover)', borderRadius: '0.5rem', color: 'var(--text-primary)' }}>
              <FaGithub size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>GitHub</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Guonejo</p>
            </div>
          </a>

          <a href="mailto:matias.carvachos@gmail.com?subject=Agendar%20Reunión" className="bento-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '0.5rem', color: '#10B981' }}>
              <Calendar size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Agendar Reunión</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Solicitar espacio (vía correo)</p>
            </div>
          </a>
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <MapPin size={16} />
          <span style={{ fontSize: '0.9rem' }}>Santiago / Quilpué, Chile</span>
        </div>
      </div>
    </section>
  );
}
