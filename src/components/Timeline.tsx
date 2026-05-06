import { Briefcase, Server, Wrench } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const icons = [
  <Briefcase size={20} className="gradient-text" />,
  <Server size={20} style={{ color: 'var(--accent-blue)' }} />,
  <Wrench size={20} style={{ color: 'var(--text-secondary)' }} />,
];

export function Timeline() {
  const t = useTranslation();
  const tt = t.timeline;

  return (
    <section className="section reveal-section">
      <div className="container">
        <h2 className="section-title reveal-item">{tt.sectionTitle}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
          {tt.experiences.map((exp, idx) => (
            <div key={idx} className="reveal-item" style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.25rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--bg-dark)', border: '1px solid var(--glass-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {icons[idx]}
                </div>
                {idx !== tt.experiences.length - 1 && (
                  <div style={{ width: '1px', flexGrow: 1, background: 'var(--glass-border)', margin: '0.5rem 0' }}></div>
                )}
              </div>

              <div style={{ paddingBottom: idx !== tt.experiences.length - 1 ? '2rem' : '0' }}>
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
                  <span style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>{tt.impact}</span>{' '}{exp.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
