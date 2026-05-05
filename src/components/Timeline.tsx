import { Briefcase, Server, Wrench } from 'lucide-react';

const experiences = [
  {
    role: "Customer Service Assistant",
    company: "Toteat",
    period: "Feb 2026 - Presente",
    icon: <Briefcase size={20} className="gradient-text" />,
    description: "Enfoque en resolución de incidencias complejas y mejora de la experiencia del usuario final.",
    benefit: "Asegurando la continuidad operativa y elevando los estándares de satisfacción del cliente en la plataforma."
  },
  {
    role: "Administración de Servidores y Soporte L1",
    company: "Ópticas Globales",
    period: "2023 - 2025",
    icon: <Server size={20} style={{ color: 'var(--accent-blue)' }} />,
    description: "Gestión de infraestructura tecnológica y soporte técnico de primer nivel.",
    benefit: "Garantizado un 99% de uptime, asegurando la continuidad del negocio sin interrupciones críticas."
  },
  {
    role: "Consultoría en Hardware y Redes LAN",
    company: "Servicio Técnico Independiente",
    period: "2015 - Presente",
    icon: <Wrench size={20} style={{ color: 'var(--text-secondary)' }} />,
    description: "Diagnóstico, reparación y configuración de equipos de cómputo y redes locales.",
    benefit: "Optimización del rendimiento del hardware y estabilización de redes para múltiples clientes."
  }
];

export function Timeline() {
  return (
    <section className="section" style={{ background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="section-title">Trayectoria Profesional</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.25rem' }}>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', 
                  background: 'var(--bg-dark)', border: '1px solid var(--glass-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {exp.icon}
                </div>
                {idx !== experiences.length - 1 && (
                  <div style={{ width: '1px', flexGrow: 1, background: 'var(--glass-border)', margin: '0.5rem 0' }}></div>
                )}
              </div>
              
              <div style={{ paddingBottom: idx !== experiences.length - 1 ? '2rem' : '0' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.role}</h3>
                  <span style={{ color: 'var(--accent-yellow)', fontWeight: 500 }}>@ {exp.company}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{exp.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  {exp.description}
                </p>
                <div style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 0.75rem', 
                  background: 'rgba(59, 130, 246, 0.05)', 
                  borderLeft: '2px solid var(--accent-blue)',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)'
                }}>
                  <span style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>Impacto:</span> {exp.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
