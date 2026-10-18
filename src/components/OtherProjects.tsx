import { useState } from 'react';
import { Bot, Wallet, ShoppingCart, CheckCircle2, ExternalLink, Lock, Trophy } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';

const projectMeta = [
  {
    id: 'torneoDelMillon',
    icon: <Trophy size={28} />,
    accentColor: '#A855F7',
    accentBg: 'rgba(168, 85, 247, 0.08)',
    accentBorder: 'rgba(168, 85, 247, 0.22)',
    status: 'live' as const,
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Zustand'],
    services: [],
    demoUrl: 'https://torneodelmillon.com/',
    repoUrl: '',
  },
  {
    id: 'kickbot',
    icon: <Bot size={28} />,
    accentColor: '#818CF8',
    accentBg: 'rgba(129, 140, 248, 0.08)',
    accentBorder: 'rgba(129, 140, 248, 0.22)',
    status: 'private' as const,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Netlify Functions', 'Axios'],
    services: ['Telemetría de Streams', 'Métricas de Audiencia', 'Alertas Automatizadas'],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'moneyPlanner',
    icon: <Wallet size={28} />,
    accentColor: '#34D399',
    accentBg: 'rgba(16, 185, 129, 0.08)',
    accentBorder: 'rgba(16, 185, 129, 0.22)',
    status: 'live' as const,
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Recharts'],
    services: [],
    demoUrl: 'https://personal-moneyplanner.netlify.app',
    repoUrl: '',
  },
  {
    id: 'despensago',
    icon: <ShoppingCart size={28} />,
    accentColor: '#C4B5FD',
    accentBg: 'rgba(196, 181, 253, 0.08)',
    accentBorder: 'rgba(196, 181, 253, 0.22)',
    status: 'academic' as const,
    tags: ['Ionic + Angular 19', 'TypeScript', 'Capacitor', 'Supabase', 'Node.js / Express', 'Google Cloud Vision'],
    services: [],
    demoUrl: '',
    repoUrl: 'https://github.com/jenaroperoconj/DespenaGO',
  },
];

const statusStyles = {
  live:     { color: '#34D399', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.22)' },
  private:  { color: '#94A3B8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)' },
  academic: { color: '#C4B5FD', bg: 'rgba(196,181,253,0.08)', border: 'rgba(196,181,253,0.22)' },
};

function ProjectVisualPreview({ projectId, accentColor }: { projectId: string; accentColor: string }) {
  if (projectId === 'torneoDelMillon') {
    return (
      <div className="project-preview-box">
        <div className="project-preview-header">
          <span className="project-preview-dot" style={{ background: accentColor }} />
          <span className="project-preview-title">Bracket & Live State Engine</span>
          <span className="project-preview-status" style={{ color: accentColor }}>Riot API Sync · Live</span>
        </div>
        <div className="bracket-preview-grid">
          <div className="bracket-match">
            <span className="bracket-team win">Team Vortex <strong style={{ color: accentColor }}>2</strong></span>
            <span className="bracket-team">Nova eSports <span>0</span></span>
          </div>
          <div className="bracket-arrow" aria-hidden="true">→</div>
          <div className="bracket-match bracket-match--active">
            <span className="bracket-team bracket-team--active">Gran Final <span>BO5</span></span>
            <span className="bracket-tag" style={{ background: 'rgba(168, 85, 247, 0.2)', color: accentColor }}>En vivo</span>
          </div>
          <div className="bracket-arrow" aria-hidden="true">←</div>
          <div className="bracket-match">
            <span className="bracket-team win">Solaris Gaming <strong style={{ color: accentColor }}>2</strong></span>
            <span className="bracket-team">Quantum Club <span>1</span></span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'kickbot') {
    return (
      <div className="project-preview-box">
        <div className="project-preview-header">
          <span className="project-preview-dot" style={{ background: accentColor }} />
          <span className="project-preview-title">Kick Telemetry & Webhook Pipeline</span>
          <span className="project-preview-status" style={{ color: '#10B981' }}>● WebSocket 24ms</span>
        </div>
        <div className="kickbot-preview-grid">
          <div className="telemetry-stat">
            <span className="telemetry-label">Audience CCV</span>
            <span className="telemetry-val" style={{ color: accentColor }}>3,480</span>
          </div>
          <div className="telemetry-stat">
            <span className="telemetry-label">API Latency</span>
            <span className="telemetry-val">18 ms</span>
          </div>
          <div className="telemetry-stat">
            <span className="telemetry-label">Role Guards</span>
            <span className="telemetry-val" style={{ color: '#34D399' }}>Active</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'moneyPlanner') {
    return (
      <div className="project-preview-box">
        <div className="project-preview-header">
          <span className="project-preview-dot" style={{ background: accentColor }} />
          <span className="project-preview-title">PWA Financial Tracking & Metrics</span>
          <span className="project-preview-status" style={{ color: accentColor }}>IndexedDB + Supabase</span>
        </div>
        <div className="finance-preview-grid">
          <div className="finance-stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <span className="finance-label">Balance Mensual</span>
              <span className="finance-num" style={{ color: accentColor, fontWeight: 700 }}>$1,450,000 CLP</span>
            </div>
            <div className="finance-bar">
              <div className="finance-bar-fill" style={{ width: '68%', background: accentColor }} />
            </div>
          </div>
          <div className="finance-mini-tags">
            <span className="finance-tag">Ahorro 32%</span>
            <span className="finance-tag">Gastos Fijos 48%</span>
            <span className="finance-tag">Inversión 20%</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'despensago') {
    return (
      <div className="project-preview-box">
        <div className="project-preview-header">
          <span className="project-preview-dot" style={{ background: accentColor }} />
          <span className="project-preview-title">Duoc UC Thesis · Mobile Vision Pipeline</span>
          <span className="project-preview-status" style={{ color: accentColor }}>OCR & Cloud Vision</span>
        </div>
        <div className="vision-preview-grid">
          <div className="vision-target-box">
            <span className="vision-scanner-line" />
            <div className="vision-ocr-tag">Item: Leche Entera 1L [99.2% Conf]</div>
          </div>
          <div className="vision-meta">
            <span>Sync: Supabase Cloud</span>
            <span>Mobile: Ionic Capacitor</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

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
                  role="tab"
                  aria-selected={isSelected}
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

              {/* Interactive Visual Schematic Preview */}
              <ProjectVisualPreview projectId={activeProject.id} accentColor={activeProject.accentColor} />

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
                    <a href={activeProject.demoUrl} target="_blank" rel="noopener noreferrer" className="project-cta project-cta--demo" style={{ '--cta-color': activeProject.accentColor } as React.CSSProperties}>
                      <ExternalLink size={14} /> {tp.viewDemo}
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a href={activeProject.repoUrl} target="_blank" rel="noopener noreferrer" className="project-cta project-cta--repo">
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
