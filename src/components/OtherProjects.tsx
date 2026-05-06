import { Bot, Wallet, ShoppingCart, CheckCircle2, ExternalLink, Lock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';

const projectMeta = [
  {
    id: 'kickbot',
    icon: <Bot size={28} />,
    accentColor: '#53FC18',
    accentBg: 'rgba(83, 252, 24, 0.07)',
    accentBorder: 'rgba(83, 252, 24, 0.2)',
    status: 'private' as const,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Netlify Functions', 'Axios'],
    services: ['Viewbots Kick', 'Seguidores / Likes Instagram', 'Seguidores / Likes TikTok'],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'moneyPlanner',
    icon: <Wallet size={28} />,
    accentColor: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.07)',
    accentBorder: 'rgba(16, 185, 129, 0.2)',
    status: 'live' as const,
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Recharts'],
    services: [],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'despensago',
    icon: <ShoppingCart size={28} />,
    accentColor: 'var(--accent-yellow)',
    accentBg: 'rgba(251, 191, 36, 0.07)',
    accentBorder: 'rgba(251, 191, 36, 0.2)',
    status: 'academic' as const,
    tags: ['Ionic + Angular 19', 'TypeScript', 'Capacitor', 'Supabase', 'Node.js / Express', 'Google Cloud Vision'],
    services: [],
    demoUrl: '',
    repoUrl: 'https://github.com/jenaroperoconj/DespenaGO',
  },
];

const statusStyles = {
  live:     { color: '#10B981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
  private:  { color: '#9ca3af', bg: 'rgba(156,163,175,0.1)', border: 'rgba(156,163,175,0.2)' },
  academic: { color: 'var(--accent-yellow)', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
};

export function OtherProjects() {
  const t = useTranslation();
  const tp = t.projects;

  const projectsData = [
    { ...projectMeta[0], ...tp.kickbot },
    { ...projectMeta[1], ...tp.moneyPlanner },
    { ...projectMeta[2], ...tp.despensago },
  ];

  return (
    <section id="projects" className="section reveal-section">
      <div className="container">
        <div className="reveal-item">
          <h2 className="section-title">{tp.sectionTitle}</h2>
        </div>

        <div className="other-projects-grid">
          {projectsData.map((proj) => {
            const st = statusStyles[proj.status];
            return (
              <article
                key={proj.id}
                className="bento-card project-card reveal-item"
                style={
                  {
                    '--proj-accent': proj.accentColor,
                    '--proj-bg': proj.accentBg,
                    '--proj-border': proj.accentBorder,
                    borderColor: proj.accentBorder,
                  } as React.CSSProperties
                }
              >
                {/* Header */}
                <div className="project-card__header">
                  <div className="project-card__icon" style={{ background: proj.accentBg, color: proj.accentColor }}>
                    {proj.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <h3 className="project-card__title">
                        {proj.id === 'kickbot' ? 'KickBotService' : proj.id === 'moneyPlanner' ? 'Money Planner' : 'DespensaGO'}
                      </h3>
                      {/* Status badge */}
                      <span className="project-card__badge" style={{ background: st.bg, borderColor: st.border, color: st.color }}>
                        {proj.status === 'private' && <Lock size={10} style={{ marginRight: '3px' }} />}
                        {tp.statuses[proj.status]}
                      </span>
                    </div>
                    <p className="project-card__subtitle">{proj.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="project-card__description">{proj.description}</p>

                {/* Highlights */}
                <ul className="project-card__highlights">
                  {proj.highlights.map((h) => (
                    <li key={h} className="project-card__highlight-item">
                      <CheckCircle2 size={14} style={{ color: proj.accentColor, flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Services (KickBot) */}
                {proj.services.length > 0 && (
                  <div className="project-card__services">
                    {proj.services.map((s) => (
                      <span key={s} className="project-card__service-tag" style={{ background: proj.accentBg, color: proj.accentColor }}>{s}</span>
                    ))}
                  </div>
                )}

                {/* Stack */}
                <div className="project-card__stack">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                {/* CTAs */}
                {(proj.demoUrl || proj.repoUrl) && (
                  <div className="project-card__ctas">
                    {proj.demoUrl && (
                      <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="project-cta project-cta--demo" style={{ '--cta-color': proj.accentColor } as React.CSSProperties}>
                        <ExternalLink size={14} /> {tp.viewDemo}
                      </a>
                    )}
                    {proj.repoUrl && (
                      <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="project-cta project-cta--repo">
                        <FaGithub size={14} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
