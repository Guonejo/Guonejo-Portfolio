import { useState } from 'react';
import { Bot, Wallet, ShoppingCart, CheckCircle2, ExternalLink, Lock, Trophy } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';

const projectMeta = [
  {
    id: 'torneoDelMillon',
    icon: <Trophy size={28} />,
    accentColor: '#A855F7',
    accentBg: 'rgba(168, 85, 247, 0.07)',
    accentBorder: 'rgba(168, 85, 247, 0.2)',
    status: 'live' as const,
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Zustand'],
    services: [],
    demoUrl: 'https://torneodelmillon.com/',
    repoUrl: '',
  },
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
    demoUrl: 'https://personal-moneyplanner.netlify.app',
    repoUrl: '',
  },
  {
    id: 'despensago',
    icon: <ShoppingCart size={28} />,
    accentColor: 'var(--accent-yellow)',
    accentBg: 'rgba(232, 121, 249, 0.07)',
    accentBorder: 'rgba(232, 121, 249, 0.2)',
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
    { ...projectMeta[0], ...tp.torneoDelMillon },
    { ...projectMeta[1], ...tp.kickbot },
    { ...projectMeta[2], ...tp.moneyPlanner },
    { ...projectMeta[3], ...tp.despensago },
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id);
  const activeProject = projectsData.find(p => p.id === selectedProjectId) || projectsData[0];
  const st = statusStyles[activeProject.status];

  return (
    <section id="projects" className="section reveal-section">
      <div className="container">
        <div className="reveal-item">
          <h2 className="section-title">{tp.sectionTitle}</h2>
        </div>

        <div className="projects-split-view">
          {/* List Sidebar */}
          <div className="projects-sidebar reveal-item">
            {projectsData.map((proj) => {
              const isSelected = proj.id === selectedProjectId;
              return (
                <button
                  key={proj.id}
                  className={`project-list-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedProjectId(proj.id)}
                  style={{
                    '--proj-accent': proj.accentColor,
                    '--proj-bg': proj.accentBg,
                  } as React.CSSProperties}
                >
                  <div className="project-list-item__icon" style={{ background: isSelected ? proj.accentBg : 'var(--bg-card)', color: isSelected ? proj.accentColor : 'var(--text-secondary)' }}>
                    {proj.icon}
                  </div>
                  <div className="project-list-item__info">
                    <h4>{proj.id === 'torneoDelMillon' ? 'Torneo del Millón' : proj.id === 'kickbot' ? 'KickBotService' : proj.id === 'moneyPlanner' ? 'Money Planner' : 'DespensaGO'}</h4>
                    <p>{proj.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="project-details-panel reveal-item">
            <article
              key={activeProject.id}
              className="bento-card project-card"
              style={
                {
                  '--proj-accent': activeProject.accentColor,
                  '--proj-bg': activeProject.accentBg,
                  '--proj-border': activeProject.accentBorder,
                  borderColor: activeProject.accentBorder,
                  animation: 'fadeIn 0.3s ease-out'
                } as React.CSSProperties
              }
            >
              {/* Header */}
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: activeProject.accentBg, color: activeProject.accentColor }}>
                  {activeProject.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <h3 className="project-card__title">
                      {activeProject.id === 'torneoDelMillon' ? 'Torneo del Millón' : activeProject.id === 'kickbot' ? 'KickBotService' : activeProject.id === 'moneyPlanner' ? 'Money Planner' : 'DespensaGO'}
                    </h3>
                    {/* Status badge */}
                    <span className="project-card__badge" style={{ background: st.bg, borderColor: st.border, color: st.color }}>
                      {activeProject.status === 'private' && <Lock size={10} style={{ marginRight: '3px' }} />}
                      {tp.statuses[activeProject.status]}
                    </span>
                  </div>
                  <p className="project-card__subtitle">{activeProject.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="project-card__description">{activeProject.description}</p>

              {/* Highlights */}
              <ul className="project-card__highlights">
                {activeProject.highlights.map((h) => (
                  <li key={h} className="project-card__highlight-item">
                    <CheckCircle2 size={14} style={{ color: activeProject.accentColor, flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Services (KickBot) */}
              {activeProject.services.length > 0 && (
                <div className="project-card__services">
                  {activeProject.services.map((s) => (
                    <span key={s} className="project-card__service-tag" style={{ background: activeProject.accentBg, color: activeProject.accentColor }}>{s}</span>
                  ))}
                </div>
              )}

              {/* Stack */}
              <div className="project-card__stack">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

              {/* CTAs */}
              {(activeProject.demoUrl || activeProject.repoUrl) && (
                <div className="project-card__ctas">
                  {activeProject.demoUrl && (
                    <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="project-cta project-cta--demo" style={{ '--cta-color': activeProject.accentColor } as React.CSSProperties}>
                      <ExternalLink size={14} /> {tp.viewDemo}
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a href={activeProject.repoUrl} target="_blank" rel="noreferrer" className="project-cta project-cta--repo">
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
