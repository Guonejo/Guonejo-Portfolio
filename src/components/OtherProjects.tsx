import { Bot, Wallet, ShoppingCart, CheckCircle2, ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    id: 'kickbot',
    title: 'KickBotService',
    subtitle: 'Dashboard para Streamers',
    status: 'private' as const,
    description:
      'Plataforma integral para streamers de Kick.com: gestión de servicios de crecimiento, monitoreo de estadísticas en tiempo real (seguidores, viewers, estado del stream) y panel de administración con control de roles.',
    icon: <Bot size={28} />,
    accentColor: '#53FC18',
    accentBg: 'rgba(83, 252, 24, 0.07)',
    accentBorder: 'rgba(83, 252, 24, 0.2)',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Netlify Functions', 'Axios'],
    highlights: [
      'Contador de tiempo restante del servicio',
      'Integración con API de Kick en tiempo real',
      'Barra de progreso hacia meta de viewers',
      'Solicitud de reinicio via Telegram automatizada',
      'Panel admin con gestión masiva de usuarios',
    ],
    services: ['Viewbots Kick', 'Seguidores / Likes Instagram', 'Seguidores / Likes TikTok'],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'money-planner',
    title: 'Money Planner',
    subtitle: 'PWA de Finanzas Personales Mobile-First',
    status: 'live' as const,
    description:
      'Aplicación web progresiva (PWA) para gestión financiera personal. Dashboard visual con gráficos dinámicos, registro de ingresos y gastos, categorías personalizadas e instalable como app nativa en mobile.',
    icon: <Wallet size={28} />,
    accentColor: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.07)',
    accentBorder: 'rgba(16, 185, 129, 0.2)',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Recharts'],
    highlights: [
      'Dashboard con gráficos de estado financiero',
      'Gestión de gastos e ingresos categorizados',
      'Categorías personalizables por usuario',
      'Mobile-first con soporte táctil optimizado',
      'PWA instalable (acceso nativo en iOS/Android)',
    ],
    services: [],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'despensago',
    title: 'DespensaGO',
    subtitle: 'App Móvil · Proyecto de Título DuocUC',
    status: 'academic' as const,
    description:
      'Aplicación móvil multiplataforma para gestión de inventario del hogar. Incluye escaneo de boletas con OCR (Google Cloud Vision), listas de compras inteligentes, colaboración familiar y sugerencias de recetas basadas en stock.',
    icon: <ShoppingCart size={28} />,
    accentColor: 'var(--accent-yellow)',
    accentBg: 'rgba(251, 191, 36, 0.07)',
    accentBorder: 'rgba(251, 191, 36, 0.2)',
    tags: ['Ionic + Angular 19', 'TypeScript', 'Capacitor', 'Supabase', 'Node.js / Express', 'Google Cloud Vision'],
    highlights: [
      'Escaneo de boletas con OCR automático',
      'Gestión completa de despensa e inventario',
      'Listas de compras colaborativas',
      'Sistema de invitaciones por hogar/familia',
      'Backend OCR propio en Node.js (Render)',
    ],
    services: [],
    demoUrl: '',
    repoUrl: '',
  },
];

const statusConfig = {
  live:     { label: 'En vivo',        color: '#10B981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
  private:  { label: 'Privado',        color: '#9ca3af', bg: 'rgba(156,163,175,0.1)', border: 'rgba(156,163,175,0.2)' },
  academic: { label: 'Proyecto de Título', color: 'var(--accent-yellow)', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
};

export function OtherProjects() {
  return (
    <section id="projects" className="section reveal-section">
      <div className="container">
        <div className="reveal-item">
          <h2 className="section-title">Otros Proyectos</h2>
        </div>

        <div className="other-projects-grid">
          {projects.map((proj) => {
            const st = statusConfig[proj.status];
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
                      <h3 className="project-card__title">{proj.title}</h3>
                      {/* Status badge */}
                      <span className="project-card__badge" style={{ background: st.bg, borderColor: st.border, color: st.color }}>
                        {proj.status === 'private' && <Lock size={10} style={{ marginRight: '3px' }} />}
                        {st.label}
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
                        <ExternalLink size={14} /> Ver demo
                      </a>
                    )}
                    {proj.repoUrl && (
                      <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="project-cta project-cta--repo">
                        GitHub
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
