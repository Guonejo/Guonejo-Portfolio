import { GraduationCap, Wrench, Globe, MapPin } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const pillarIcons = [
  <GraduationCap size={20} />,
  <Wrench size={20} />,
  <Globe size={20} />,
];

const pillarColors = [
  { color: '#A78BFA', bg: 'rgba(167, 139, 250, 0.08)', border: 'rgba(167, 139, 250, 0.2)' },
  { color: '#818CF8', bg: 'rgba(129, 140, 248, 0.08)', border: 'rgba(129, 140, 248, 0.2)' },
  { color: '#C4B5FD', bg: 'rgba(196, 181, 253, 0.08)', border: 'rgba(196, 181, 253, 0.2)' },
];

export function About() {
  const t = useTranslation();
  const a = t.about;

  return (
    <section id="about" className="section reveal-section about-section">
      <div className="container">
        {/* Header */}
        <div className="reveal-item">
          <h2 className="section-title">{a.sectionTitle}</h2>
        </div>

        {/* Main layout */}
        <div className="about-layout">
          {/* Left — bio text */}
          <div className="about-bio reveal-item">
            <p className="about-bio__lead">
              {a.bioLead}{' '}
              <strong>{a.bioLeadAccent}</strong>{' '}
              {a.bioLeadEnd}
            </p>
            <p className="about-bio__body">
              {a.bioBody}{' '}
              <em>{a.bioBodyAccent}</em>{' '}
              {a.bioBodyEnd}
            </p>

            {/* Location chip */}
            <div className="about-bio__location">
              <MapPin size={14} />
              <span>{a.location}</span>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="about-pillars">
            {a.pillars.map((p, i) => {
              const c = pillarColors[i];
              return (
                <div
                  key={i}
                  className="about-pillar bento-card reveal-item"
                  style={{
                    '--pillar-color': c.color,
                    '--pillar-bg': c.bg,
                    '--pillar-border': c.border,
                    borderColor: c.border,
                  } as React.CSSProperties}
                >
                  <div className="about-pillar__icon" style={{ background: c.bg, color: c.color }}>
                    {pillarIcons[i]}
                  </div>
                  <div>
                    <h3 className="about-pillar__title" style={{ color: c.color }}>{p.title}</h3>
                    <p className="about-pillar__body">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
