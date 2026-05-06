import { ArrowRight, Terminal, ChevronDown } from 'lucide-react';

const stats = [
  { value: '99%', label: 'Uptime logrado' },
  { value: '10+', label: 'Años en IT' },
  { value: '1', label: 'SaaS B2B lanzado' },
];

export function Hero() {
  return (
    <section className="hero-section section" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="hero-content">

          {/* Availability badge */}
          <div className="hero-badge">
            <span className="hero-badge__dot" />
            <span>Disponible para nuevas oportunidades</span>
          </div>

          {/* Role badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Terminal size={20} className="gradient-text" />
            <span className="badge">Analista Programador &amp; Infraestructura</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Matías Carvacho:{' '}
            <span className="gradient-text">Software de Alto Rendimiento</span>{' '}
            y Continuidad Operativa.
          </h1>

          {/* Description */}
          <p className="hero-description">
            Impulsando el éxito del cliente en Toteat como Customer Service Assistant.
            Especializado en arquitecturas escalables, SaaS B2B y optimización de infraestructura.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="#crewcontrol" className="btn btn-primary">
              Ver Proyecto Destacado <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contactar
            </a>
          </div>

          {/* Impact stats */}
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat__value gradient-text">{stat.value}</span>
                <span className="hero-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#crewcontrol" className="scroll-indicator" aria-label="Scroll hacia abajo">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
