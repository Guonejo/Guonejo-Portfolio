import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Terminal size={20} className="gradient-text" />
            <span className="badge">Analista Programador & Infraestructura</span>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Matías Carvacho: Soluciones de Software de <span className="gradient-text">Alto Rendimiento</span> y Continuidad Operativa.
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Actualmente impulsando el éxito del cliente en Toteat como Customer Service Assistant. 
            Especializado en arquitecturas escalables, SaaS B2B y optimización de infraestructura.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#crewcontrol" className="btn btn-primary">
              Ver Proyecto Destacado <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
