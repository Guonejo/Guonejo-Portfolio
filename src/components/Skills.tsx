import { useTranslation } from '../context/LanguageContext';

const skillGroups = [
  {
    color: 'var(--accent-blue)',
    bg: 'rgba(37, 99, 235, 0.08)',
    border: 'rgba(37, 99, 235, 0.2)',
    skills: ['React', 'Next.js', 'TypeScript', 'Vite', 'CSS / Tailwind', 'HTML5'],
  },
  {
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.2)',
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'Auth / RBAC'],
  },
  {
    color: 'var(--accent-yellow)',
    bg: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.2)',
    skills: ['Linux Server', 'LAN / Redes', 'Soporte L1', 'Hardware', 'Git / GitHub', 'Vercel / Netlify'],
  },
];

export function Skills() {
  const t = useTranslation();

  return (
    <section id="skills" className="section reveal-section">
      <div className="container">
        <h2 className="section-title">{t.skills.sectionTitle}</h2>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="bento-card skills-group reveal-item">
              <div className="skills-group__header" style={{ '--cat-color': group.color } as React.CSSProperties}>
                <span className="skills-group__dot" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <h3 className="skills-group__title" style={{ color: group.color }}>{t.skills.categories[idx]}</h3>
              </div>
              <div className="skills-pills">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      background: group.bg,
                      borderColor: group.border,
                      color: group.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
