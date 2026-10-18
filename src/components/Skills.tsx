import { useTranslation, useLanguage } from '../context/LanguageContext';
import {
  SiReact, SiNextdotjs, SiTypescript, SiVite, SiCss, SiHtml5,
  SiNodedotjs, SiSupabase, SiPostgresql, SiAxios,
  SiLinux, SiGit, SiGithub, SiVercel, SiNetlify,
} from 'react-icons/si';
import { Globe } from 'lucide-react';

export function Skills() {
  const t = useTranslation();
  const { lang } = useLanguage();

  const skillGroups = [
    {
      color: '#A78BFA',
      bg: 'rgba(167, 139, 250, 0.08)',
      border: 'rgba(167, 139, 250, 0.2)',
      skills: [
        { name: 'React',        icon: <SiReact /> },
        { name: 'Next.js',      icon: <SiNextdotjs /> },
        { name: 'TypeScript',   icon: <SiTypescript /> },
        { name: 'Vite',         icon: <SiVite /> },
        { name: 'CSS / Tailwind', icon: <SiCss /> },
        { name: 'HTML5',        icon: <SiHtml5 /> },
      ],
    },
    {
      color: '#818CF8',
      bg: 'rgba(129, 140, 248, 0.08)',
      border: 'rgba(129, 140, 248, 0.2)',
      skills: [
        { name: 'Node.js',    icon: <SiNodedotjs /> },
        { name: 'Supabase',   icon: <SiSupabase /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'REST APIs',  icon: <Globe size={14} /> },
        { name: 'Auth / RBAC', icon: <SiAxios /> },
      ],
    },
    {
      color: '#C4B5FD',
      bg: 'rgba(196, 181, 253, 0.08)',
      border: 'rgba(196, 181, 253, 0.2)',
      skills: [
        { name: 'Linux Server', icon: <SiLinux /> },
        { name: lang === 'es' ? 'Redes LAN / TI' : 'LAN / IT Networks', icon: <Globe size={14} /> },
        { name: 'Git',          icon: <SiGit /> },
        { name: 'GitHub',       icon: <SiGithub /> },
        { name: 'Vercel',       icon: <SiVercel /> },
        { name: 'Netlify',      icon: <SiNetlify /> },
      ],
    },
  ];

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
                    key={skill.name}
                    className="skill-pill"
                    style={{
                      background: group.bg,
                      borderColor: group.border,
                      color: group.color,
                      gap: '0.4rem',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.95em' }}>{skill.icon}</span>
                    {skill.name}
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

