import { GraduationCap, Wrench, Globe, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: <GraduationCap size={20} />,
    color: 'var(--accent-blue)',
    bg: 'rgba(37, 99, 235, 0.08)',
    border: 'rgba(37, 99, 235, 0.2)',
    title: 'Formación',
    body: 'Analista Programador — Duoc UC (2025). Sólida base académica complementada con proyectos reales desde el primer año.',
  },
  {
    icon: <Wrench size={20} />,
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.2)',
    title: '10+ años en IT',
    body: 'Soporte técnico L1-L2, administración de servidores Windows/Linux, redes LAN y Active Directory en entornos productivos.',
  },
  {
    icon: <Globe size={20} />,
    color: 'var(--accent-yellow)',
    bg: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.2)',
    title: 'Inglés B2',
    body: 'Certificado EF SET. Leo documentación técnica, integro APIs y colaboro en proyectos con recursos en inglés sin fricción.',
  },
];

export function About() {
  return (
    <section id="about" className="section reveal-section about-section">
      <div className="container">
        {/* Header */}
        <div className="reveal-item">
          <h2 className="section-title">Sobre mí</h2>
        </div>

        {/* Main layout */}
        <div className="about-layout">
          {/* Left — bio text */}
          <div className="about-bio reveal-item">
            <p className="about-bio__lead">
              Soy un desarrollador full-stack con raíces en infraestructura y soporte TI.
              Esa combinación me permite <strong>construir y mantener sistemas de punta a punta</strong>{' '}
              —desde el servidor hasta la interfaz— con criterio de producción desde el día uno.
            </p>
            <p className="about-bio__body">
              Mi carrera empezó en la primera línea del soporte técnico: resolución de incidencias,
              redes LAN, servidores Windows/Linux y backups en la nube. Con el tiempo migré
              hacia el desarrollo web, donde hoy diseño y construyo aplicaciones completas con
              React, Node.js y Supabase. El enfoque de <em>Vibe Coding</em> —desarrollo ágil
              asistido por IA— me permite iterar rápido sin sacrificar calidad.
            </p>

            {/* Location chip */}
            <div className="about-bio__location">
              <MapPin size={14} />
              <span>Santiago, Chile</span>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="about-pillar bento-card reveal-item"
                style={{
                  '--pillar-color': p.color,
                  '--pillar-bg': p.bg,
                  '--pillar-border': p.border,
                  borderColor: p.border,
                } as React.CSSProperties}
              >
                <div className="about-pillar__icon" style={{ background: p.bg, color: p.color }}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="about-pillar__title" style={{ color: p.color }}>{p.title}</h3>
                  <p className="about-pillar__body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
